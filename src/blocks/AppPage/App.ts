import Handlebars from 'handlebars';
import {appTemplate} from './App.handlebars';
import './App.scss';
import {ChatActiveScreens, context as AppContext} from './App.context';
import {Component} from '../../components/Component';
import {Main} from '../Main';
import {Screens} from '../Main/Main.context';
import {render} from '../../utils/renderDOM';
import {ChatEmpty} from './ChatEmpty';
import {SelectedUserChat} from './SelectedUserChat';
import {SelectedUserChatHeader} from './SelectedUserChat/SelectedUserChatHeader';
import {SelectedUserChatContent} from './SelectedUserChat/SelectedUserChatContent';
import {SelectedUserChatFooter} from './SelectedUserChat/SelectedUserChatFooter';
import {ChatMenu} from '../ChatMenu';
import {ChatItem} from '../../components/ChatItem';
import {Badge} from '../../components/Badge';
import {SearchBar} from '../../components/SearchBar';

export class App extends Component {
  constructor(props: any) {
    super({
      ...props,
      childNodes: {
        chatEmpty: new ChatEmpty(props.chatEmpty),
        selectedUserChat: new SelectedUserChat(props.selectedUserChat),
        chatMenu: new ChatMenu(props.chatMenu),
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

  decideChatContent() {
    switch (this.props.activeScreen) {
      case ChatActiveScreens.EMPTY:
        return this.props.childNodes.chatEmpty.render();
      case ChatActiveScreens.SELECTED_USER_CHAT:
        return this.props.childNodes.selectedUserChat.render();
      default:
        return this.props.childNodes.chatEmpty.render();
    }
  }

  render(): string {
    const template = Handlebars.compile(appTemplate);
    return template({
      ...this.props,
      chatMenu: this.props.childNodes.chatMenu.render(),
      chatContent: this.decideChatContent(),
    });
  }
}

const main = new Main({
  activeScreen: Screens.APP,
  screens: {
    [Screens.APP]: new App(AppContext),
  },
});
render('body', main);

// function renderTemplate() {
//   const chatItem = document.querySelectorAll('.chat-item');
//   const stopEditingButton = document.querySelector('.button_stop-editing');
//
//   chatItem.forEach((el) => {
//     el.addEventListener('click', (e) => {
//       e.preventDefault();
//       const id = Number(el.getAttribute('id'));
//       const selectedChat = context.chats.find((el) => el.userId === id);
//
//       if (id === context.active_chat_id) {
//         context.active_chat_id = null;
//         context.selected_chat = null;
//         context.active_screen = 'chat_empty';
//         selectedChat.isChatSelected = false;
//         context.chats = context.chats.map((el) => (el.userId === id
//           ? selectedChat
//           : {...el, isChatSelected: false}));
//       } else {
//         context.active_chat_id = id;
//         context.selected_chat = context.chats.find((el) => el.userId === id);
//         context.active_screen = 'selected_user_chat';
//         selectedChat.isChatSelected = true;
//         context.chats = context.chats.map((el) => (el.userId === id
//           ? selectedChat
//           : {...el, isChatSelected: false}));
//       }
//       renderTemplate();
//     });
//   });
//
//   stopEditingButton.addEventListener('click', (e) => {
//     e.preventDefault();
//     context.profile_info_opened = false;
//     context.active_screen = context.active_chat_id ? 'selected_user_chat' : 'chat_empty';
//     renderTemplate();
//   });
// }
