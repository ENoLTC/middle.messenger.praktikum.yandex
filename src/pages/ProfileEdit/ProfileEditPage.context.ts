export const context = {
  profile: {
    isEditing: false,
    inputs: {
      email: {
        type: 'email',
        name: 'email',
        labelName: 'Почта',
        value: 'pochta@yandex.ru',
        required: true,
        isValid: true,
        classes: {
          container: [''],
          input: [],
          label: [],
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
    },
  },
  chatMenu: {
    profileInfoOpened: true,
  },
};
