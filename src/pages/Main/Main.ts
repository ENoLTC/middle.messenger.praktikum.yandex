import Handlebars from 'handlebars';
import './Main.scss';
import {Component} from '../../components/Component';
import {mainTemplate} from './Main.handlebars';
import {AnyObject} from '../../components/Component/Component';

export class Main extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    Handlebars.registerHelper({
      log(something) {
        console.log(something);
      },
    });
    // setTimeout(() => {
    //   // this.props.screens.login.setProps({tit: 'FDGFHRSHR'});
    //   // this.props.screens.login.props.childNodes.loginInput.setProps({isValid: false});
    // }, 3000);
  }

  componentDidUpdate(oldProps: ProxyHandler<AnyObject>, newProps: ProxyHandler<AnyObject>): boolean {
    console.log('main', oldProps, newProps);
    return true;
  }

  render(): string {
    const template = Handlebars.compile(mainTemplate);
    console.log(this.props);
    return template({
      ...this.props,
      renderedPage: this.props.screens[this.props.activeScreen].render(),
    });
  }
}

// const initForm = () => {
//   const loginForm: HTMLFormElement | null = document.querySelector('.login__form');
//   const formHandler: FormHandler = new FormHandler({
//     errorClass: '',
//     inactiveButtonClass: '',
//     inputErrorClass: '',
//     inputSelector: '',
//     submitButtonSelector: '',
//     onSuccess: () => {
//       // window.location.href = '/main.html';
//       console.log('123')
//     },
//   }, loginForm!);
//   formHandler.enableValidation();
// };

// document.addEventListener('ready', () => {
//   const loginForm: HTMLFormElement | null = document.querySelector('.login__form');
//   console.log(loginForm)
//   const formHandler: FormHandler = new FormHandler({
//     errorClass: '',
//     inactiveButtonClass: '',
//     inputErrorClass: '',
//     inputSelector: '',
//     submitButtonSelector: '',
//     onSuccess: () => {
//       // window.location.href = '/main.html';
//       console.log('123')
//     },
//   }, loginForm!);
//   console.log(formHandler)
//   formHandler.enableValidation();
// });
