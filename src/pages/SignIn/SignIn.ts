import Handlebars from 'handlebars';
import {signInTemplate} from './SignIn.handlebars';
import './SignIn.scss';
import {Component} from '../../components/Component';
import {Main} from '../Main';
import {Screens} from '../Main/Main.context';
import {context as SignInContext} from './SignIn.context';
import {render} from '../../utils/renderDOM';
import {AnyObject} from '../../components/Component/Component';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';

export class SignInPage extends Component {
  constructor(props: AnyObject) {
    super({
      ...props,
      childNodes: {
        inputs: {
          emailInput: new Input({...props.inputs.email}),
          loginInput: new Input({...props.inputs.login}),
          nameInput: new Input({...props.inputs.name}),
          surnameInput: new Input({...props.inputs.surname}),
          phoneInput: new Input({...props.inputs.phone}),
          passwordInput: new Input({...props.inputs.password}),
          passwordConfirmInput: new Input({...props.inputs.password_confirm}),
        },
        buttons: {
          submitButton: new Button({...props.buttons.submit}),
          loginButton: new Button({...props.buttons.login}),
        },
      },
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
    const template = Handlebars.compile(signInTemplate);
    return template({
      ...this.props,
      childNodes: {
        inputs: {
          emailInput: this.props.childNodes.inputs.emailInput.render(),
          loginInput: this.props.childNodes.inputs.loginInput.render(),
          nameInput: this.props.childNodes.inputs.nameInput.render(),
          surnameInput: this.props.childNodes.inputs.surnameInput.render(),
          phoneInput: this.props.childNodes.inputs.phoneInput.render(),
          passwordInput: this.props.childNodes.inputs.passwordInput.render(),
          passwordConfirmInput: this.props.childNodes.inputs.passwordConfirmInput.render(),
        },
        buttons: {
          submitButton: this.props.childNodes.buttons.submitButton.render(),
          loginButton: this.props.childNodes.buttons.loginButton.render(),
        },
      },
      events: {
        click: [() => console.log('123')],
      },
    });
  }
}

const main = new Main({
  activeScreen: Screens.SIGNIN,
  screens: {
    [Screens.SIGNIN]: new SignInPage(SignInContext),
  },
});
render('body', main);
