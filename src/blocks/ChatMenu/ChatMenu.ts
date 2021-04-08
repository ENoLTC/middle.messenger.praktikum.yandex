import Handlebars from 'handlebars';
import {chatMenuTemplate} from './ChatMenu.handlebars';
import './ChatMenu.scss';
import {Component} from '../../components/Component';

export class ChatMenu extends Component {
  constructor(props) {
    super('section', 'chat-menu', props);
  }

  render(): string {
    const compiledChats = {};
    let compiledSearchBar = {};
    if (!this.props.profileInfoOpened) {
      for (const [key, value] of Object.entries(this.props.chats)) {
        compiledChats[key] = value.render();
      }
      compiledSearchBar = this.props.searchBar.render();
      console.log(compiledSearchBar)
    }
    const template = Handlebars.compile(chatMenuTemplate);
    return template({
      ...this.props,
      compiledChats,
      compiledSearchBar,
    });
  }
}
