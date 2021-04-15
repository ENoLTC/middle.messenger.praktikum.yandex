export const context = {
  inputs: {
    login: {
      type: 'text',
      name: 'loginInput',
      labelName: 'Логин',
      labelInvalidText: 'Неверный логин',
      required: true,
      isValid: true,
      classes: {
        container: ['input-container_login'],
        input: [],
        label: [],
      },
      value: '',
    },
    password: {
      type: 'password',
      name: 'passwordInput',
      labelName: 'Пароль',
      labelInvalidText: 'Неверный пароль',
      required: true,
      isValid: true,
      classes: {
        container: ['input-container_password'],
        input: [],
        label: [],
      },
      value: '',
    },
  },
  buttons: {
    submit: {
      type: 'submit',
      name: 'login_button',
      buttonText: 'Авторизоваться',
      classes: ['button_primary'],
    },
    signIn: {
      type: 'button',
      name: 'login_form',
      buttonText: 'Нет аккаунта',
      classes: ['button_text-like'],
    },
  },
  title: 'Вход',
};
