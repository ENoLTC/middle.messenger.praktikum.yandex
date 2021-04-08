import {ChatMenu} from '../ChatMenu';
import {ChatEmpty} from './ChatEmpty';
import {SelectedUserChat} from './SelectedUserChat';
import {SearchBar} from '../../components/SearchBar';
import {SelectedUserChatHeader} from './SelectedUserChat/SelectedUserChatHeader';
import {SelectedUserChatContent} from './SelectedUserChat/SelectedUserChatContent';
import {SelectedUserChatFooter} from './SelectedUserChat/SelectedUserChatFooter';
import {ChatItem} from "../../components/ChatItem";
import {Badge} from "../../components/Badge";

export enum ChatActiveScreens {
  EMPTY = 'chat_empty',
  SELECTED_USER_CHAT = 'selected_user_chat',
}

export const context = {
  activeScreen: ChatActiveScreens.EMPTY,
  activeChatId: '',
  selectedChat: [],
  chatEmpty: new ChatEmpty({}),
  selectedUserChat: new SelectedUserChat({
    selectedUserChatHeader: new SelectedUserChatHeader({
      name: '',
    }),
    selectedUserChatContent: new SelectedUserChatContent({
      chat: [],
    }),
    selectedUserChatFooter: new SelectedUserChatFooter({}),
  }),
  chatMenu: new ChatMenu({
    profileInfoOpened: false,
    chats: [
      new ChatItem({
        name: 'Andrey',
        userId: 1,
        lastMessage: 'Cool!',
        lastMessageTimeSent: '10:49',
        newMessages: 1,
        isChatSelected: false,
        chat: [
          {
            dateSent: '19 Nov',
            timeSent: '11:23',
            incoming: true,
            content: 'Yo! It\'s nice to see you!',
          },
          {
            dateSent: '19 Nov',
            timeSent: '11:23',
            incoming: false,
            content: 'WTF',
          },
          {
            dateSent: '19 Nov',
            timeSent: '11:25',
            incoming: true,
            content: 'Cool!',
          },
        ],
        badge: new Badge({newMessages: 1}),
        events: {
          click: [() => console.log('123')],
        },
      }),
      new ChatItem({
        name: 'Antony',
        userId: 2,
        lastMessage: 'Hello!',
        lastMessageTimeSent: '12:00',
        newMessages: 4,
        isChatSelected: false,
        chat: [
          {
            dateSent: '19 Nov',
            timeSent: '11:23',
            incoming: true,
            content: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой. Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
          },
          {
            dateSent: '19 Nov',
            timeSent: '11:23',
            incoming: true,
            content: 'Чел',
          },
          {
            dateSent: '19 Nov',
            timeSent: '11:28',
            incoming: true,
            content: 'Hello!',
          },
          {
            dateSent: '19 Nov',
            timeSent: '11:23',
            incoming: true,
            content: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой. Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
          },
          {
            dateSent: '19 Nov',
            timeSent: '11:23',
            incoming: true,
            content: 'Чел',
          },
          {
            dateSent: '19 Nov',
            timeSent: '11:28',
            incoming: true,
            content: 'Hello!',
          },
        ],
        badge: new Badge({newMessages: 4}),
      }),
      new ChatItem({
        name: '1, 2, 3',
        userId: 3,
        lastMessage: 'You: Lets go!',
        lastMessageTimeSent: 'Mo',
        newMessages: null,
        isChatSelected: false,
        chat: [
          {
            dateSent: '19 Nov',
            timeSent: '11:23',
            incoming: false,
            content: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
          },
          {
            dateSent: '19 Nov',
            timeSent: '11:23',
            incoming: false,
            content: 'ipisumipisumipisumipisumipisum ipisumipisumipisum ipisumipisumipisumipisumipisum ipisumipisumipisum ipisumipisumipisumipisumipisum ipisumipisumipisumipisumipisumipisumipisumipisum ipisumipisumipisum ',
          },
          {
            dateSent: '19 Nov',
            timeSent: '11:23',
            incoming: false,
            content: 'Lets go!',
          },
        ],
        badge: new Badge({newMessages: null}),
      }),
      new ChatItem({
        name: 'Club',
        userId: 4,
        lastMessage: 'Cool!',
        lastMessageTimeSent: 'Tu',
        newMessages: null,
        isChatSelected: false,
        chat: [],
        badge: new Badge({newMessages: null}),
      }),
      new ChatItem({
        name: 'Stas',
        userId: 5,
        lastMessage: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
        lastMessageTimeSent: 'May 1 2020',
        newMessages: null,
        isChatSelected: false,
        chat: [
          {
            dateSent: '19 Nov',
            timeSent: '11:23',
            incoming: false,
            content: 'Yo! It\'s nice to see you!',
          },
          {
            dateSent: '19 Nov',
            timeSent: '11:23',
            incoming: true,
            content: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
          },
        ],
        badge: new Badge({newMessages: null}),
      }),
    ],
    searchBar: new SearchBar({
      type: 'text',
      name: 'chat_search',
      placeholder: 'Поиск',
      classes: {
        container: [],
        searchBar: [],
      },
    }),
  }),
};
