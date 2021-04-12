import Handlebars from 'handlebars';
import './NotFoundPage.scss';
import {context as NotFoundContext} from './NotFoundPage.context';

import {Component} from '../../components/Component';
import {Main} from '../Main';
import {Screens} from '../Main/Main.context';
import {render} from '../../utils/renderDOM';
import {AnyObject} from '../../components/Component/Component';
import {Button} from '../../components/Button';
import {notFoundTemplate} from './NotFoundPage.handlebars';

export class NotFoundPage extends Component {
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
    const template = Handlebars.compile(notFoundTemplate);
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
  activeScreen: Screens.NOT_FOUND,
  screens: {
    [Screens.NOT_FOUND]: new NotFoundPage(NotFoundContext),
  },
});
render('body', main);
