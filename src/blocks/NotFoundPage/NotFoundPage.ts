import Handlebars from 'handlebars';
import {notFoundTemplate} from './NotFoundPage.handlebars';
import './NotFoundPage.scss';
import {compiledButton} from '../../components/Button/index';
import {context} from './NotFoundPage.context';

const template = Handlebars.compile(notFoundTemplate);
Handlebars.registerPartial({
  'button': compiledButton,
})

const main = document.querySelector('.main');
export const compiledNotFound = template(context);
main.innerHTML = compiledNotFound;
