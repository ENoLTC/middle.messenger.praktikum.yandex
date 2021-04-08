import {Button} from '../../components/Button';
import {ProfileEditInput} from '../../components/ProfileEditInput';
import {Profile} from '../Profile';
import {ChatMenu} from '../ChatMenu';

export const context = {
  profile: new Profile({
    isEditing: false,
    inputs: {
      email: new ProfileEditInput({
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
      }),
      login: new ProfileEditInput({
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
      }),
      first_name: new ProfileEditInput({
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
      }),
      second_name: new ProfileEditInput({
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
      }),
      display_name: new ProfileEditInput({
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
      }),
      phone: new ProfileEditInput({
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
      }),
    },
    buttons: {
      submit: new Button({
        type: 'button',
        name: 'profile_change',
        buttonText: 'Изменить данные',
        classes: ['button_text-like', 'button_profile-change', 'button_text-blue'],
      }),
      signIn: new Button({
        type: 'button',
        name: 'password_change',
        buttonText: 'Изменить пароль',
        classes: ['button_text-like', 'button_profile-change', 'button_text-blue'],
      }),
      logout: new Button({
        type: 'button',
        name: 'logout',
        buttonText: 'Выйти',
        classes: ['button_text-like', 'button_profile-change', 'button_text-red'],
      }),
    },
  }),
  chatMenu: new ChatMenu({
    profileInfoOpened: true,
  }),
};
