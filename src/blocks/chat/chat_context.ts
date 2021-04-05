export const context = {
  active_screen: 'chat_empty',
  profile_info_opened: false,
  active_chat_id: null,
  selected_chat: null,
  chats: [
    {
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
    },
    {
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
    },
    {
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
    },
    {
      name: 'Club',
      userId: 4,
      lastMessage: 'Cool!',
      lastMessageTimeSent: 'Tu',
      newMessages: null,
      isChatSelected: false,
      chat: [],
    },
    {
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
    },
  ],
  search_bar: {
    type: 'text',
    name: 'chat_search',
    placeholder: 'Поиск',
    classes: {
      container: [],
      searchBar: [],
    },
  },
  profile_edit: {
    isEditing: false,
    inputs: {
      email: {
        type: 'text',
        name: 'email',
        labelName: 'Почта',
        value: 'pochta@yandex.ru',
        required: true,
        isValid: true,
        classes: {
          container: [''],
          input: [],
          label: [],
        }
      },
      login: {
        type: 'text',
        name: 'login',
        labelName: 'Логин',
        value: 'ivanivanov',
        required: true,
        isValid: true,
        classes: {
          container: [''],
          input: [],
          label: [],
        }
      },
      first_name: {
        type: 'text',
        name: 'first_name',
        labelName: 'Имя',
        value: 'Ivan',
        required: true,
        isValid: true,
        classes: {
          container: [''],
          input: [],
          label: [],
        }
      },
      second_name: {
        type: 'text',
        name: 'second_name',
        labelName: 'Фамилия',
        value: 'Ivanov',
        required: true,
        isValid: true,
        classes: {
          container: [''],
          input: [],
          label: [],
        }
      },
      display_name: {
        type: 'text',
        name: 'display_name',
        labelName: 'Имя в чате',
        value: 'Ivan_1338',
        required: true,
        isValid: true,
        classes: {
          container: [''],
          input: [],
          label: [],
        }
      },
      phone: {
        type: 'phone',
        name: 'phone',
        labelName: 'Телефон',
        value: '+79099673030',
        required: true,
        isValid: true,
        classes: {
          container: [''],
          input: [],
          label: [],
        }
      },
    },
    buttons: {
      submit: {
        type: 'button',
        name: 'profile_change',
        buttonText: 'Изменить данные',
        classes: ['button_text-like', 'button_profile-change', 'button_text-blue'],
      },
      signIn: {
        type: 'button',
        name: 'password_change',
        buttonText: 'Изменить пароль',
        classes: ['button_text-like', 'button_profile-change', 'button_text-blue'],
      },
      logout: {
        type: 'button',
        name: 'logout',
        buttonText: 'Выйти',
        classes: ['button_text-like', 'button_profile-change', 'button_text-red'],
      },
    }
  }
};
