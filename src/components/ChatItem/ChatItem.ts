import Handlebars from 'handlebars';
import {chatItemTemplate} from './ChatItem.handlebars';
import './ChatItem.scss';
import {Component} from '../Component';

export class ChatItem extends Component {
  constructor(props) {
    super(props);
  }

  render(): string {
    const template = Handlebars.compile(chatItemTemplate);
    return template({
      ...this.props,
      compiledBadge: this.props.badge.render(),
    });
  }
}
