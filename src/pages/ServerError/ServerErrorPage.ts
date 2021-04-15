import Handlebars from 'handlebars';
import {serverErrorTemplate} from './ServerErrorPage.handlebars';
import './ServerErrorPage.scss';
import {context as ServerErrorContext} from './ServerErrorPage.context';

import {Component} from '../../components/Component';
import {Main} from '../Main';
import {Screens} from '../Main/Main.context';
import {render} from '../../utils/renderDOM';
import {AnyObject} from '../../components/Component/Component';
import {Button} from '../../components/Button';

export class ServerErrorPage extends Component {
  constructor(props: AnyObject) {
    super({
      ...props,
      childNodes: {
        buttons: {
          backToChatsButton: new Button({...props.buttons.backToChatsButton}),
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
    const template = Handlebars.compile(serverErrorTemplate);
    return template({
      ...this.props,
      childNodes: {
        buttons: {
          backToChatsButton: this.props.childNodes.buttons.backToChatsButton.render(),
        },
      },
      events: {
        click: [() => console.log('123')],
      },
    });
  }
}

const main = new Main({
  activeScreen: Screens.SERVER_ERROR,
  screens: {
    [Screens.SERVER_ERROR]: new ServerErrorPage(ServerErrorContext),
  },
});
render('body', main);
