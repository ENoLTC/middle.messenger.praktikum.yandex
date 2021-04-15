import Handlebars from 'handlebars';
import {loginTemplate} from './LoginPage.handlebars';
import './LoginPage.scss';

import {Component} from '../../components/Component';
import {context as LoginContext} from './LoginPage.context';
import {render} from '../../utils/renderDOM';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';
import {AnyObject} from '../../components/Component/Component';
import {Screens} from '../Main/Main.context';
import {Main} from '../Main';

export class LoginPage extends Component {
  constructor(props: AnyObject) {
    super({
      ...props,
      childNodes: {
        loginInput: new Input({
          ...props.inputs.login,
          events: {
            click: [(e: InputEvent) => {
              e.preventDefault();
              console.log(e);
            }],
          },
        }),
        passwordInput: new Input({...props.inputs.password}),
        submitButton: new Button({
          ...props.buttons.submit,
          events: {
            click: [(e) => {
              e.preventDefault();
              console.log('123');
            }],
          },
        }),
        signInButton: new Button({
          ...props.buttons.signIn,
          events: {
            click: [(e) => {
              e.preventDefault();
              console.log('123');
            }],
          },
        }),
      },
      events: {
        click: [() => console.log('123')],
      },
    });
  }

  componentDidMount() {
    Handlebars.registerHelper({
      log(something) {
        console.log(something);
      },
    });
    setTimeout(() => {
      this.setProps({title: 'Enter'});
      this.props.childNodes.loginInput.setProps({labelName: 'newLogin'});
    }, 3000);
  }

  render() {
    const template = Handlebars.compile(loginTemplate);
    return template({
      ...this.props,
      loginInput: this.props.childNodes.loginInput.render(),
      passwordInput: this.props.childNodes.passwordInput.render(),
      submitButton: this.props.childNodes.submitButton.render(),
      signInButton: this.props.childNodes.signInButton.render(),
    });
  }
}

const main = new Main({
  activeScreen: Screens.LOGIN,
  screens: {
    [Screens.LOGIN]: new LoginPage(LoginContext),
  },
  events: {
    click: [() => console.log('123')],
  },
});
render('body', main);
