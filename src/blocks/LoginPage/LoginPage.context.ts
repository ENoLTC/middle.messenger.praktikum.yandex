import {Input} from '../../components/Input';
import {Button} from '../../components/Button';

export const context = {
  inputs: {
    login: new Input({
      type: 'text',
      name: 'login',
      labelName: 'Логин',
      labelInvalidText: 'Неверный логин',
      required: true,
      isValid: true,
      classes: {
        container: ['input-container_login'],
        input: [],
        label: [],
      },
    }),
    password: new Input({
      type: 'password',
      name: 'password',
      labelName: 'Пароль',
      labelInvalidText: 'Неверный пароль',
      required: true,
      isValid: true,
      classes: {
        container: ['input-container_password'],
        input: [],
        label: [],
      },
    }),
  },
  buttons: {
    submit: new Button({
      type: 'submit',
      name: 'login_button',
      buttonText: 'Авторизоваться',
      classes: ['button_primary'],
    }),
    signIn: new Button({
      type: 'button',
      name: 'login_form',
      buttonText: 'Нет аккаунта',
      classes: ['button_text-like'],
    }),
  },
};
