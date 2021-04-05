import Handlebars from 'handlebars';
import {inputTemplate} from './input.handlebars';
import './input.scss'

export const compiledInput = Handlebars.compile(inputTemplate);
