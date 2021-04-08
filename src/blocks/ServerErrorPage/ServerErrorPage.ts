import Handlebars from 'handlebars';
import {serverErrorTemplate} from './ServerErrorPage.handlebars';
import './ServerErrorPage.scss';
import {compiledButton} from '../../components/Button/index';
import {context} from './ServerErrorPage.context';

const template = Handlebars.compile(serverErrorTemplate);
Handlebars.registerPartial({
  'button': compiledButton,
})


const main = document.querySelector('.main');
export const compiledServerError = template(context);
main.innerHTML = compiledServerError;
