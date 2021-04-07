import Handlebars from 'handlebars';
import {loginTemplate} from './LoginPage.handlebars';
import './LoginPage.scss';

import {context} from './LoginPage_context';
import {FormHandler} from '../../services/FormHandler';
import {Component} from '../../components/Component';

import {render} from '../../utils/renderDOM';

const initForm = () => {
  const loginForm: HTMLFormElement | null = document.querySelector('.login__form');
  const formHandler: FormHandler = new FormHandler({
    errorClass: '',
    inactiveButtonClass: '',
    inputErrorClass: '',
    inputSelector: '',
    submitButtonSelector: '',
    onSuccess: () => {
      // window.location.href = '/main.html';
      console.log('123')
    },
  }, loginForm!);
  formHandler.enableValidation();
};

export class LoginPage extends Component {
  constructor() {
    super('section', 'login', {
      ...context,

    });

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
    console.log(this._element)
    const loginForm: HTMLFormElement | null = this._element!.querySelector('.login__form');
    const formHandler: FormHandler = new FormHandler({
      errorClass: '',
      inactiveButtonClass: '',
      inputErrorClass: '',
      inputSelector: '',
      submitButtonSelector: '',
      onSuccess: () => {
        // window.location.href = '/main.html';
        console.log('123')
      },
    }, loginForm!);
    console.log(formHandler)
    formHandler.enableValidation();
    return renderedTemplate;
  }
}

const loginPage = new LoginPage();
render('.main', loginPage);

// document.addEventListener('ready', () => {
  const loginForm: HTMLFormElement | null = document.querySelector('.login__form');
  console.log(loginForm)
  const formHandler: FormHandler = new FormHandler({
    errorClass: '',
    inactiveButtonClass: '',
    inputErrorClass: '',
    inputSelector: '',
    submitButtonSelector: '',
    onSuccess: () => {
      // window.location.href = '/main.html';
      console.log('123')
    },
  }, loginForm!);
  console.log(formHandler)
  formHandler.enableValidation();
// });
