import Handlebars from 'handlebars';
import {chatMenuTemplate} from './ChatMenu.handlebars';
import './ChatMenu.scss';
import {Component} from '../../components/Component';
import {ChatItem} from '../../components/ChatItem';
import {Badge} from '../../components/Badge';
import {SearchBar} from '../../components/SearchBar';

export class ChatMenu extends Component {
  constructor(props) {
    super({
      props,
      profileInfoOpened: props.profileInfoOpened,
      chats: props.chats?.map((el) => new ChatItem({
        ...el,
        badge: new Badge(el.badge),
      })),
      searchBar: new SearchBar(props.searchBar),
    });
  }

  render(): string {
    const compiledChats = {};
    let compiledSearchBar = {};
    if (!this.props.profileInfoOpened) {
      for (const [key, value] of Object.entries(this.props.chats)) {
        compiledChats[key] = value.render();
      }
      compiledSearchBar = this.props.searchBar.render();
    }
    const template = Handlebars.compile(chatMenuTemplate);
    return template({
      ...this.props,
      compiledChats,
      compiledSearchBar,
    });
  }
}
