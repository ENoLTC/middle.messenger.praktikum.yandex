import Handlebars from 'handlebars';
import {chatEmptyTemplate} from './chat_empty.handlebars';
import './chat_empty.scss'

export const compiledChatEmpty = Handlebars.compile(chatEmptyTemplate);
