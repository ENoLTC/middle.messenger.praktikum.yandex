import {Input} from '../../components/Input';
import {Button} from '../../components/Button';

export const context = {
  inputs: {
    email: new Input({
      type: 'email',
      name: 'email',
      labelName: 'Почта',
      labelInvalidText: 'Неверный формат почты',
      required: true,
      isValid: true,
      classes: {
        container: ['input-container_signin'],
        input: [],
        label: [],
      },
    }),
    login: new Input({
      type: 'text',
      name: 'login',
      labelName: 'Логин',
      labelInvalidText: 'Неверный логин',
      required: true,
      isValid: true,
      classes: {
        container: ['input-container_password'],
        input: [],
        label: [],
      },
    }),
    name: new Input({
      type: 'text',
      name: 'first_name',
      labelName: 'Имя',
      labelInvalidText: 'Имя должно содержать',
      required: true,
      isValid: true,
      classes: {
        container: ['input-container_password'],
        input: [],
        label: [],
      },
    }),
    surname: new Input({
      type: 'text',
      name: 'second_name',
      labelName: 'Фамилия',
      labelInvalidText: 'Фамилия должна содержать',
      required: true,
      isValid: true,
      classes: {
        container: ['input-container_password'],
        input: [],
        label: [],
      },
    }),
    phone: new Input({
      type: 'phone',
      name: 'phone',
      labelName: 'Телефон',
      labelInvalidText: 'Неверный формат номера телефона',
      required: true,
      isValid: true,
      classes: {
        container: ['input-container_password'],
        input: [],
        label: [],
      },
    }),
    password: new Input({
      type: 'password',
      name: 'password',
      labelName: 'Пароль',
      labelInvalidText: '',
      required: true,
      isValid: true,
      classes: {
        container: ['input-container_password'],
        input: [],
        label: [],
      },
    }),
    password_confirm: new Input({
      type: 'password',
      name: 'password_confirm',
      labelName: 'Пароль (ещё раз)',
      labelInvalidText: 'Пароли не совпадают',
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
      name: 'signin_button',
      buttonText: 'Зарегистрироваться',
      classes: ['button_primary'],
    }),
    login: new Button({
      type: 'button',
      name: 'signin_form',
      buttonText: 'Войти',
      classes: ['button_text-like'],
      events: {
        click: [() => console.log('123')],
      }
    }),
  },
};
