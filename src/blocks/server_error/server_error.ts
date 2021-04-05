import Handlebars from 'handlebars';
import {serverErrorTemplate} from './server_error.handlebars';
import './server_error.scss';
import {compiledButton} from '../../components/button/index';
import {context} from './server_error_context';

const template = Handlebars.compile(serverErrorTemplate);
Handlebars.registerPartial({
  'button': compiledButton,
})


const main = document.querySelector('.main');
export const compiledServerError = template(context);
main.innerHTML = compiledServerError;
