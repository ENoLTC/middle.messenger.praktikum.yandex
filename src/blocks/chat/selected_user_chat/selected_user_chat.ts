import Handlebars from 'handlebars';
import {selectedUserChatTemplate} from './selected_user_chat.handlebars';
import './selected_user_chat.scss'

export const compiledSelectedUserChat = Handlebars.compile(selectedUserChatTemplate);
