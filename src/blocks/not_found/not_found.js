import Handlebars from 'handlebars';
import {notFoundTemplate} from './not_found.handlebars';
import './not_found.scss';
import {compiledButton} from '../../components/button/index';
import {context} from './not_found_context';

const template = Handlebars.compile(notFoundTemplate);
Handlebars.registerPartial({
  'button': compiledButton,
})

const main = document.querySelector('.main');
export const compiledNotFound = template(context);
main.innerHTML = compiledNotFound;
