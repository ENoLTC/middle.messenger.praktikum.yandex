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
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  _element: HTMLElement = {} as HTMLElement;
  _meta: Meta;
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

    this.props = this._makePropsProxy(props);
    this.DOMParser = new DOMParser();

    this._registerEvents();
    this.eventBus.emit(Component.EVENTS.INIT);
  }

  _registerEvents() {
    this.eventBus.on(Component.EVENTS.INIT, this.init.bind(this));
    this.eventBus.on(Component.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    this.eventBus.on(Component.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    this.eventBus.on(Component.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _addEvents() {
    const {events = {}} = this.props;
    Object.keys(events).forEach((eventName) => {
      this._element!.addEventListener(eventName, events[eventName]);
    });
  }

  _removeEvents() {
    const {events = {}} = this.props;

    Object.keys(events).forEach((eventName) => {
      this._element!.removeEventListener(eventName, events[eventName]);
    });
  }

  _createResources() {
    const {tagName, className} = this._meta;
    this._element = this._createDocumentElement(tagName, className);
  }

  init() {
    this._createResources();
    this.eventBus.emit(Component.EVENTS.FLOW_CDM);
  }

  _componentDidMount() {
    this.componentDidMount();
    this.eventBus.emit(Component.EVENTS.FLOW_RENDER);
  }

  // Может переопределять пользователь, необязательно трогать
  componentDidMount() {}

  _componentDidUpdate(oldProps: Props, newProps: Props) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (response) {
      // console.log('emit render after update')
      this.eventBus.emit(Component.EVENTS.FLOW_RENDER);
    }
  }

  // Может переопределять пользователь, необязательно трогать
  componentDidUpdate(oldProps: Props, newProps: Props) {
    return true;
  }

  setProps = (nextProps: Props) => {
    if (!nextProps) {
      return;
    }

    const oldProps = this.props;

    this.props = Object.assign(this.props, nextProps);
    this.eventBus.emit(Component.EVENTS.FLOW_CDU, oldProps, this.props);
  };

  get element() {
    return this._element;
  }

  _render() {
    // console.log('render')
    const htmlString = this.render().trim();
    // const parsedHTML = this.DOMParser.parseFromString(htmlString, 'text/html');
    // const oldContent = this._element.firstChild;
    // const newContent = parsedHTML.body.firstChild;
    this._removeEvents();
    console.log('oldElement', this._element)
    // if (oldContent) oldContent.replaceWith(newContent);
    // this._element.appendChild(newContent);
    this._element.innerHTML = htmlString;
    this._addEvents();
    console.log('newElement', this._element);
    return this._element;
  }

  // Может переопределять пользователь, необязательно трогать
  render() {}

  getContent() {
    return this._element;
  }

  _makePropsProxy(props: Props) {
    const that = this;
    const proxyProps = new Proxy(props, {
      set(target, prop, value) {
        target[prop] = value;
        that.eventBus.emit(Component.EVENTS.FLOW_RENDER);
        return true;
      },
      deleteProperty(target, prop) { // перехватываем удаление свойства
        throw new Error('нет доступа');
      },
    });
    return proxyProps;
  }

  _createDocumentElement(tagName: string, className?: string) {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    const element = document.createElement(tagName);
    if (className) {
      element.classList.add(className);
    }
    return element;
  }

  show() {
    this.getContent()!.style.display = 'block';
  }

  hide() {
    this.getContent()!.style.display = 'none';
  }
}
