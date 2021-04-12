import {v4 as uuidv4} from 'uuid';
import {EventBus} from '../../services';

export interface AnyObject {
  [key: string]: any;
}

interface Meta {
  props: AnyObject;
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
  props: AnyObject;
  eventBus: EventBus;
  /** JSDoc
   * @param {string} tagName
   * @param {string | undefined} className
   * @param {Object} props
   *
   * @returns {void}
   */
  constructor(
    props: AnyObject = {},
  ) {
    this.eventBus = new EventBus();
    this._meta = {props};

    this._id = uuidv4();
    this.props = this._makePropsProxy({__id: this._id, ...props});

    this._registerEvents();
    this.eventBus.emit(this.EVENTS.INIT);
  }

  _registerEvents(): void {
    this.eventBus.on(this.EVENTS.INIT, this._init.bind(this));
    this.eventBus.on(this.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    this.eventBus.on(this.EVENTS.FLOW_CDU, (oldProps: AnyObject = {}, newProps: AnyObject = {}) => this._componentDidUpdate(oldProps, newProps));
    this.eventBus.on(this.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _addEventListeners(): void {
    const {events = {}} = this.props;
    // const el = document.querySelector(`[data-id="${this._id}"]`);
    // console.log('addEvents', el)
    // if (!el) {
    //   return;
    // }
    // Object.keys(events).forEach((eventName) => {
    //   el.addEventListener(eventName, events[eventName]);
    // });
    // if (this.props.childNodes) {
    //   for (const [_, node] of Object.entries(this.props.childNodes)) {
    //     if (node.props.events) {
    //       Object.keys(node.props.events).forEach((eventName) => {
    //         const element = document.querySelector(`[data-id="${node.props.__id}"]`);
    //         console.log('el', element);
    //         if (element) element!.addEventListener(eventName, node.props.events[eventName]);
    //       });
    //     }
    //   }
    // }
  }

  _removeEventListeners(): void {
    const {events = {}} = this.props;
    // const el = document.querySelector(`[data-id="${this._id}"]`);
    // console.log('removeEvents', el);
    // if (!el) {
    //   return;
    // }
    // Object.keys(events).forEach((eventName) => {
    //   el!.removeEventListener(eventName, events[eventName]);
    // });
  }

  _createResources(): void {
    this._element = this._createDocumentElement('div');
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

  _componentDidUpdate(oldProps: AnyObject, newProps: AnyObject): void {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (response) {
      this.eventBus.emit(this.EVENTS.FLOW_RENDER);
    }
  }

  // Может переопределять пользователь, необязательно трогать
  componentDidUpdate(oldProps: ProxyHandler<AnyObject>, newProps: ProxyHandler<AnyObject>): boolean {
    return true;
  }

  setProps = (nextProps: AnyObject): ProxyHandler<AnyObject> | void => {
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
    const htmlString = this.render().trim();
    this._element.innerHTML = htmlString;

    const renderedElement = document.querySelector(`[data-id="${this._id}"]`);
    if (renderedElement) {
      this._removeEventListeners();
      renderedElement.replaceWith(this._element);
    }

    this._addEventListeners();
  }

  // Может переопределять пользователь, необязательно трогать
  render(): string {
    return '';
  }

  getContent(): HTMLElement {
    return this._element;
  }

  _makePropsProxy(props: AnyObject): ProxyHandler<AnyObject> {
    const proxyProps = new Proxy(props, {
      get(target, prop) {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target, prop, value) {
        if (target[prop] !== value) {
          target[prop] = value;
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

  _createDocumentElement(tagName: string): HTMLElement {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    return document.createElement(tagName);
  }
}
