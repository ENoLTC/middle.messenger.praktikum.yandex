import Handlebars from 'handlebars';
import {signinTemplate} from './signin.handlebars';
import './signin.scss'
import {compiledInput} from '../../components/input/input';
import {compiledButton} from '../../components/button/button';
import {context} from './signin_context';

const template = Handlebars.compile(signinTemplate);
Handlebars.registerPartial({
  'input': compiledInput,
  'button': compiledButton,
});
Handlebars.registerHelper({
  log: function(something) {
    console.log(something);
  },
});

const main = document.querySelector('.main');
export const compiledRegister = template(context);
main.innerHTML = compiledRegister;

const signInForm = document.querySelector('.signin__form');
signInForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const formValues = {};
  for(let [name, value] of formData) {
    formValues[name] = value;
  }
  console.log(formValues);
  window.location = '/main.html';
});
