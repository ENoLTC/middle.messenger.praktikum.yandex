import Handlebars from 'handlebars';
import {signInTemplate} from './SignIn.handlebars';
import './SignIn.scss';
import {Component} from '../../components/Component';
import {Main} from "../Main";
import {Screens} from "../Main/Main.context";
import {context as SignInContext} from "./SignIn.context";
import {render} from "../../utils/renderDOM";

export class SignInPage extends Component {
  constructor(props: any) {
    super('section', 'signin', props);
  }

  componentDidMount() {
    Handlebars.registerHelper({
      log(something) {
        console.log(something);
      },
    });
  }

  render(): string {
    const template = Handlebars.compile(signInTemplate);
    const renderedTemplate = template({
      ...this.props,
      compiled: {
        inputs: {
          emailInput: this.props.inputs.email.render(),
          loginInput: this.props.inputs.login.render(),
          nameInput: this.props.inputs.name.render(),
          surnameInput: this.props.inputs.surname.render(),
          phoneInput: this.props.inputs.phone.render(),
          passwordInput: this.props.inputs.password.render(),
          passwordConfirmInput: this.props.inputs.password_confirm.render(),
        },
        buttons: {
          submitButton: this.props.buttons.submit.render(),
          loginButton: this.props.buttons.login.render(),
        },
      },
    });
    return renderedTemplate;
  }
}

const main = new Main({
  activeScreen: Screens.SIGNIN,
  screens: {
    [Screens.SIGNIN]: new SignInPage(SignInContext),
  },
});
render('body', main);
// const signInForm = document.querySelector('.signin__form');
// signInForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const formData = new FormData(e.target);
//   const formValues = {};
//   for(let [name, value] of formData) {
//     formValues[name] = value;
//   }
//   console.log(formValues);
//   window.location = '/main.html';
// });
