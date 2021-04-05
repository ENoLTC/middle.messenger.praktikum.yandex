import Handlebars from 'handlebars';
import {chatMenuTemplate} from './chat_menu.handlebars';
import './chat_menu.scss'

export const compiledChatMenu = Handlebars.compile(chatMenuTemplate);
