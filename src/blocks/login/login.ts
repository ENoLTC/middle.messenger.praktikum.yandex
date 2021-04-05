import Handlebars from 'handlebars';
import {loginTemplate} from './login.handlebars';
import './login.scss'
import {compiledInput} from '../../components/input/index';
import {compiledButton} from '../../components/button/index';

import {context} from './login_context';

const template = Handlebars.compile(loginTemplate);
Handlebars.registerPartial({
  'input': compiledInput,
  'button': compiledButton,
});
Handlebars.registerHelper({
  log: function(something) {
    console.log(something);
  },
})

const main = document.querySelector('.main');
export const compiledLogin = template({context});
main.innerHTML = compiledLogin;

const loginForm = document.querySelector('.login__form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  console.log({
    login: formData.get('login'),
    password: formData.get('password'),
  })
  window.location = '/main.html';
});
