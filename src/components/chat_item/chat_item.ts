import Handlebars from 'handlebars';
import {chatItemTemplate} from './chat_item.handlebars';
import './chat_item.scss'

export const compiledChatItem = Handlebars.compile(chatItemTemplate);
