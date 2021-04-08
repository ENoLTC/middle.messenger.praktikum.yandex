import Handlebars from 'handlebars';
import {loginTemplate} from './LoginPage.handlebars';
import './LoginPage.scss';

import {FormHandler} from '../../services/FormHandler';
import {Component} from '../../components/Component';
import {Main} from "../Main";
import {context as LoginContext} from "./LoginPage.context";
import {Screens} from "../Main/Main.context";
import {render} from "../../utils/renderDOM";

export class LoginPage extends Component {
  constructor(props: any) {
    super('section', 'login', props);
  }

  componentDidMount() {
    Handlebars.registerHelper({
      log(something) {
        console.log(something);
      },
    });
  }

  render(): string {
    const template = Handlebars.compile(loginTemplate);
    const renderedTemplate = template({
      ...this.props,
      loginInput: this.props.inputs.login.render(),
      passwordInput: this.props.inputs.password.render(),
      submitButton: this.props.buttons.submit.render(),
      signInButton: this.props.buttons.signIn.render(),
    });
    return renderedTemplate;
  }
}

const main = new Main({
  activeScreen: Screens.LOGIN,
  screens: {
    [Screens.LOGIN]: new LoginPage(LoginContext),
  },
});
render('body', main);

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
