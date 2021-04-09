// import Handlebars from 'handlebars';
// import {loginTemplate} from './LoginPage.handlebars';
// import './LoginPage.scss';
//
// import {Component} from '../../components/Component';
// import {context as LoginContext} from './LoginPage.context';
// import {render} from '../../utils/renderDOM';
// import {Input} from '../../components/Input';
// import {Button} from '../../components/Button';
// import {Main} from "../Main";
// import {Screens} from "../Main/Main.context";
//
// export class LoginPage extends Component {
//   inputs: { [key: string]: typeof Input };
//   buttons: { [key: string]: typeof Button };
//
//   constructor(props: any) {
//     super('section', 'login', props);
//   }
//
//   componentDidMount() {
//     Handlebars.registerHelper({
//       log(something) {
//         console.log(something);
//       },
//     });
//   }
//
//   changeInvalid(input, bool) {
//     this.setProps(this.props.inputs[input].isValid = bool);
//   }
//
//   render(): string {
//     const template = Handlebars.compile(loginTemplate);
//     return template({
//       ...this.props,
//       loginInput: this.inputs.login.render(),
//       passwordInput: this.inputs.password.render(),
//       submitButton: this.buttons.submit.render(),
//       signInButton: this.buttons.signIn.render(),
//     });
//   }
// }
//
// const main = new Main({
//   activeScreen: Screens.LOGIN,
//   screens: {
//     [Screens.LOGIN]: new LoginPage(LoginContext),
//   },
// });
// render('body', main);

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

import Handlebars from 'handlebars';
import {loginTemplate} from './LoginPage.handlebars';
import './LoginPage.scss';

import {Component} from '../../components/Component';
import {context as LoginContext} from './LoginPage.context';
import {render} from '../../utils/renderDOM';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';

export class LoginPage extends Component {
  constructor(props) {
    super('section', 'login', props);
  }

  componentDidMount() {
    Handlebars.registerHelper({
      log(something) {
        console.log(something);
      },
    });
    setTimeout(() => {
      // console.log('before', this.props);
      this.setProps({tit: 'FDGFHRSHR'})
      // this.setProps(this.props)
      // console.log('after', this.props);
    }, 3000);
  }

  render() {
    const template = Handlebars.compile(loginTemplate);
    return template({
      ...this.props,
      loginInput: this.props.loginInput.render(),
      passwordInput: this.props.passwordInput.render(),
      submitButton: this.props.submitButton.render(),
      signInButton: this.props.signInButton.render(),
    });
  }
}

class Main extends Component {
  constructor() {
    super('main', 'main', {
      loginPage: new LoginPage({
        ...LoginContext,
        loginInput: new Input({...LoginContext.inputs.login}),
        passwordInput: new Input({...LoginContext.inputs.password}),
        submitButton: new Button({...LoginContext.buttons.submit}),
        signInButton: new Button({...LoginContext.buttons.signIn}),
      }),
    });
  }

  componentDidMount() {
    Handlebars.registerHelper({
      log(something) {
        console.log(something);
      },
    });
    console.log(this.props)
    setTimeout(() => {
      // console.log('before', this.props);
      this.setProps({tit: 'asd'})
      // this.setProps(this.props)
      // console.log('after', this.props);
    }, 3000);
  }

  componentDidUpdate(oldProps, newProps): boolean {
    console.log(oldProps, newProps);
    return true;
  }

  render(): string {
    console.log('renderMain')
    console.log(this.props)
    return this.props.loginPage.render();
  }
}

const main = new Main();
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
