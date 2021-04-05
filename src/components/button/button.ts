import Handlebars from 'handlebars';
import {buttonTemplate} from './button.handlebars';
import './button.scss'

export const compiledButton = Handlebars.compile(buttonTemplate);
