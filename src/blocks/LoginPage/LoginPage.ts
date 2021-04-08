import Handlebars from 'handlebars';
import {loginTemplate} from './LoginPage.handlebars';
import './LoginPage.scss';

import {FormHandler} from '../../services/FormHandler';
import {Component} from '../../components/Component';
import {Main} from '../Main';
import {context as LoginContext} from './LoginPage.context';
import {Screens} from '../Main/Main.context';
import {render} from '../../utils/renderDOM';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';

export class LoginPage extends Component {
  inputs: { [key: string]: typeof Input };
  buttons: { [key: string]: typeof Button };

  constructor(props: any) {
    super('section', 'login', props);
  }

  componentDidMount() {
    Handlebars.registerHelper({
      log(something) {
        console.log(something);
      },
    });
    this.inputs = {};
    this.buttons = {};
    for (const [key, value] of Object.entries(this.props.inputs)) {
      this.inputs[key] = new Input(value);
    }
    for (const [key, value] of Object.entries(this.props.buttons)) {
      this.buttons[key] = new Button(value);
    }
  }

  changeInvalid(input, bool) {
    this.setProps(this.props.inputs[input].isValid = bool);
  }

  render(): string {
    const template = Handlebars.compile(loginTemplate);
    return template({
      ...this.props,
      loginInput: this.inputs.login.render(),
      passwordInput: this.inputs.password.render(),
      submitButton: this.buttons.submit.render(),
      signInButton: this.buttons.signIn.render(),
    });
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
