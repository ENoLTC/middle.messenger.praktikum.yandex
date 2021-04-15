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
import {InputWithFloatingLabel} from '../../components/InputWithFloatingLabel';

export class LoginPage extends Component {
  constructor(props: AnyObject) {
    super({
      ...props,
      childNodes: {
        loginInput: new InputWithFloatingLabel({
          ...props.inputs.login,
          childNodes: {
            input: new Input({
              ...props.inputs.login,
              events: [{
                event: 'blur',
                callback: (e: InputEvent) => {
                  console.log('123');
                  console.log(e.target.name);
                  // this.onInput(e.target.name, e.target.value);
                  this.props.childNodes[e.target.name].setProps({
                    isValid: false,
                  });
                  this.props.childNodes[e.target.name].props.childNodes.input.setProps({
                    value: e.target.value,
                  });
                },
              }],
            }),
          },
        }),
        passwordInput: new InputWithFloatingLabel({
          ...props.inputs.password,
          childNodes: {
            input: new Input({
              ...props.inputs.password,
              events: [{
                event: 'blur',
                callback: (e: InputEvent) => {
                  console.log('123');
                  console.log(e.target.name);
                  // this.onInput(e.target.name, e.target.value);
                  this.props.childNodes[e.target.name].setProps({
                    isValid: false,
                  });
                  this.props.childNodes[e.target.name].props.childNodes.input.setProps({
                    value: e.target.value,
                  });
                },
              }],
            }),
          },
        }),
        submitButton: new Button({
          ...props.buttons.submit,
          events: [{
            event: 'click',
            callback: (e: InputEvent) => {
              console.log(e);
            },
          }],
        }),
        signInButton: new Button({
          ...props.buttons.signIn,
          events: [{
            event: 'click',
            callback: (e: InputEvent) => {
              e.preventDefault();
              console.log(e);
            },
          }],
        }),
      },
      events: [{
        event: 'click',
        callback: (e: InputEvent) => {
          e.preventDefault();
          console.log('5547657');
        },
      }],
    });
  }

  componentDidMount() {
    Handlebars.registerHelper({
      log(something) {
        console.log(something);
      },
    });
    // setTimeout(() => {
    //   this.setProps({title: 'Enter'});
    // }, 3000);
  }

  onInput(input: string, value: string): void {
    this.props.childNodes[input].setProps({value});
  }

  validateLogin() {
    this.props.childNodes.loginInput.setProps({isValid: false});
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
  childNodes: {
    [Screens.LOGIN]: new LoginPage(LoginContext),
  },
  events: [{
    event: 'click',
    callback: () => console.log('123'),
  }],
});
render('body', main);
