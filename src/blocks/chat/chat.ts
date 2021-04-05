import Handlebars from 'handlebars';
import {chatTemplate} from './chat.handlebars';
import './chat.scss';
import {compiledInput} from '../../components/input/index';
import {compiledButton} from '../../components/button/index';
import {compiledBadge} from '../../components/badge/index';
import {compiledChatMenu} from '../chat_menu/index';
import {compiledChatItem} from '../../components/chat_item/index';
import {compiledSearchBar} from '../../components/search_bar/index';
import {compiledChatEmpty} from '../../blocks/chat/chat_empty/index';
import {compiledSelectedUserChat} from '../chat/selected_user_chat/index';
import {compiledSelectedUserChatHeader} from '../chat/selected_user_chat/selected_user_chat_header/index';
import {compiledUserChatFooter} from '../chat/selected_user_chat/selected_user_chat_footer/index';
import {compiledSelectedUserChatContent} from '../chat/selected_user_chat/selected_user_chat_content/index';
import {compiledProfileEdit} from '../profile_edit/index';
import {compiledProfileEditInput} from '../../components/profile_edit_input/index';
import {context} from './chat_context';

const template = Handlebars.compile(chatTemplate);
Handlebars.registerHelper({
  log: function(something) {
    console.log(something);
  },
  chatContentSelector: function() {
   return context.active_screen;
  },
});
Handlebars.registerPartial({
  'chat_menu': compiledChatMenu,
  'chat_item': compiledChatItem,
  'search_bar': compiledSearchBar,
  'input': compiledInput,
  'button': compiledButton,
  'badge': compiledBadge,
  'chat_empty': compiledChatEmpty,
  'selected_user_chat': compiledSelectedUserChat,
  'selected_user_chat_header': compiledSelectedUserChatHeader,
  'selected_user_chat_footer': compiledUserChatFooter,
  'selected_user_chat_content': compiledSelectedUserChatContent,
  'profile_edit': compiledProfileEdit,
  'profile_edit_input': compiledProfileEditInput,
});

const main = document.querySelector('.main');
export let compiledChat;

function renderTemplate() {
  compiledChat = template({context});
  main.innerHTML = compiledChat;
  const chatItem = document.querySelectorAll('.chat-item');
  const stopEditingButton = document.querySelector('.button_stop-editing');

  chatItem.forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const id = Number(el.getAttribute('id'));
      const selectedChat = context.chats.find(el => el.userId === id);

      if (id === context.active_chat_id) {
        context.active_chat_id = null;
        context.selected_chat = null;
        context.active_screen = 'chat_empty';
        selectedChat.isChatSelected = false;
        context.chats = context.chats.map(el =>
          el.userId === id
            ? selectedChat
            : {...el, isChatSelected: false}
        )
      } else {
        context.active_chat_id = id;
        context.selected_chat = context.chats.find(el => el.userId === id);
        context.active_screen = 'selected_user_chat';
        selectedChat.isChatSelected = true;
        context.chats = context.chats.map(el =>
          el.userId === id
            ? selectedChat
            : {...el, isChatSelected: false}
        )
      }
      renderTemplate();
    })
  });

  stopEditingButton.addEventListener('click', (e) => {
    e.preventDefault();
    context.profile_info_opened = false;
    context.active_screen =  context.active_chat_id ? 'selected_user_chat' : 'chat_empty';
    renderTemplate();
  });
}

renderTemplate();
