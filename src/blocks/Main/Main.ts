import Handlebars from 'handlebars';
import './Main.scss';
import {context as MainContext, Screens} from './Main.context';

import {FormHandler} from '../../services/FormHandler';
import {Component} from '../../components/Component';

import {render} from '../../utils/renderDOM';

import {loginTemplate} from '../LoginPage';

export class Main extends Component {
  constructor(props) {
    super('main', 'main', props);
    // this._mutationObserver = new MutationObserver((mutations) => {
    //   console.log('123')
    //   for (let mutation of mutations) {
    //     console.log(mutation)
    //     // проверим новые узлы, есть ли что-то, что надо подсветить?
    //     for (let node of mutation.addedNodes) {
    //       console.log(node)
    //       // // отслеживаем только узлы-элементы, другие (текстовые) пропускаем
    //       // if (!(node instanceof HTMLElement)) continue;
    //       //
    //       // // проверить, не является ли вставленный элемент примером кода
    //       // if (node.matches('pre[class*="language-"]')) {
    //       //   Prism.highlightElement(node);
    //       // }
    //       //
    //       // // или, может быть, пример кода есть в его поддереве?
    //       // for (let elem of node.querySelectorAll('pre[class*="language-"]')) {
    //       //   Prism.highlightElement(elem);
    //       // }
    //     }
    //   }
    // });
    // this._mutationObserver.observe(this._element, {childList: true, subtree: true});
  }

  componentDidMount() {
    Handlebars.registerHelper({
      log(something) {
        console.log(something);
      },
    });
  }

  // chooseScreenTemplate(activeScreen: string) {
  //   switch (activeScreen) {
  //     case Screens.LOGIN:
  //       return loginTemplate;
  //     // case Screens.SIGININ:
  //     //   return signInTemplate;
  //     // case Screens.APP:
  //     //   return appTemplate;
  //     // case Screens.PROFILE_EDIT:
  //     //   return profileEditTemplate;
  //     default:
  //       throw new Error('Template choose error! No template chosen');
  //   }
  // }

  render(): string {
    const activeScreen = this.props.screens[this.props.activeScreen].render();
    // Можно завязаться на реализации вашего класса Block
    // this._element?.appendChild(activeScreen);
    //
    // const template = Handlebars.compile(activeScreen);
    // return template(this.props);
    return activeScreen;
  }
}

// const main = new Main(MainContext);
// render('body', main);
//


// import {signInTemplate} from '../SignInPage/SignIn.handlebars';
//
// import {appTemplate} from '../AppPage';
//
// import {profileEditTemplate} from '../profile';
import {mainTemplate} from "./Main.handlebars";

//
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
