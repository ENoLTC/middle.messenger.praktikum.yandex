import Handlebars from 'handlebars';
import './Main.scss';
import {Component} from '../../components/Component';
import {mainTemplate} from './Main.handlebars';

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
  }

  render(): string {
    const template = Handlebars.compile(mainTemplate);
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
