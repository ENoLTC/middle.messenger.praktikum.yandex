import {EventBus} from '../../services';

interface Props {
  [key: string]: any;
}

interface Meta {
  tagName: string;
  className?: string;
  props: Props;
}

export class Component {
  EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  _element: HTMLElement = {} as HTMLElement;
  _meta: Meta;
  _id: string;
  props: Props;
  eventBus: EventBus;
  DOMParser: DOMParser;
  /** JSDoc
   * @param {string} tagName
   * @param {string | undefined} className
   * @param {Object} props
   *
   * @returns {void}
   */
  constructor(tagName = 'div', className: string | undefined = undefined, props: Props = {}) {
    this.eventBus = new EventBus();
    this._meta = {
      tagName,
      className,
      props,
    };

    this._id = `uniq${parseInt(String(Math.random() * 1000000), 10)}`;
    this.props = this._makePropsProxy({_key: this._id, ...props});
    this.DOMParser = new DOMParser();

    this._registerEvents();
    this.eventBus.emit(this.EVENTS.INIT);
  }

  _registerEvents(): void {
    this.eventBus.on(this.EVENTS.INIT, this._init.bind(this));
    this.eventBus.on(this.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    this.eventBus.on(this.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    this.eventBus.on(this.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _addEvents(): void {
    const {events = {}} = this.props;
    const el = document.querySelector(`[_key=${this._id}]`);
    if (!el) {
      return;
    }
    Object.keys(events).forEach((eventName) => {
      console.log(eventName)
      el.addEventListener(eventName, events[eventName]);
      // el.addEventListener(eventName, events[eventName]);
    });
  }

  _removeEvents(): void {
    const {events = {}} = this.props;
    const el = document.querySelector(`[_key=${this._id}]`);
    if (!el) {
      return;
    }
    Object.keys(events).forEach((eventName) => {
      el!.removeEventListener(eventName, events[eventName]);
    });
  }

  _createResources(): void {
    const {tagName, className} = this._meta;
    this._element = this._createDocumentElement(tagName, className);
  }

  _init(): void {
    this._createResources();
    this.eventBus.emit(this.EVENTS.FLOW_CDM);
  }

  _componentDidMount(): void {
    this.componentDidMount();
    this.eventBus.emit(this.EVENTS.FLOW_RENDER);
  }

  // Может переопределять пользователь, необязательно трогать
  componentDidMount(): void {}

  _componentDidUpdate(oldProps: Props, newProps: Props): void {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (response) {
      // console.log('emit render after update')
      this.eventBus.emit(this.EVENTS.FLOW_RENDER);
    }
  }

  // Может переопределять пользователь, необязательно трогать
  componentDidUpdate(oldProps: ProxyHandler<Props>, newProps: ProxyHandler<Props>): boolean {
    return true;
  }

  setProps = (nextProps: Props): ProxyHandler<Props> | void => {
    if (!nextProps) {
      return;
    }

    const oldProps = this.props;

    this.props = Object.assign(this.props, nextProps);
    this.eventBus.emit(this.EVENTS.FLOW_CDU, oldProps, this.props);
  };

  get id(): string {
    return this._id;
  }

  get element(): HTMLElement {
    return this._element;
  }

  _render(): void {
    // console.log('render')
    const htmlString = this.render().trim();
    // const parsedHTML = this.DOMParser.parseFromString(htmlString, 'text/html');
    // const oldContent = this._element.firstChild;
    // const newContent = parsedHTML.body.firstChild;
    this._removeEvents();
    console.log('oldElement', this._element);
    // if (oldContent) oldContent.replaceWith(newContent);
    // this._element.appendChild(newContent);
    this._element.innerHTML = htmlString;
    this._addEvents();
    console.log('newElement', this._element);
  }

  // Может переопределять пользователь, необязательно трогать
  render(): string {
    return '';
  }

  getContent(): HTMLElement {
    return this._element;
  }

  _makePropsProxy(props: Props): ProxyHandler<Props> {
    // const that = this;
    const proxyProps = new Proxy(props, {
      get(target, prop) {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target, prop, value) {
        // const oldProps = that.props;
        if (target[prop] !== value) {
          console.log(target[prop])
          target[prop] = value;
          console.log(target[prop])
          // that.eventBus.emit(that.EVENTS.FLOW_CDU, oldProps, target);
          return true;
        }
        return false;
      },
      deleteProperty(target, prop) { // перехватываем удаление свойства
        throw new Error('нет доступа');
      },
    });
    return proxyProps;
  }

  _createDocumentElement(tagName: string, className?: string): HTMLElement {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    const element = document.createElement(tagName);
    if (className) {
      element.classList.add(className);
    }
    element.setAttribute('data-id', this._id);
    return element;
  }

  show() {
    this.getContent()!.style.display = 'block';
  }

  hide() {
    this.getContent()!.style.display = 'none';
  }
}
