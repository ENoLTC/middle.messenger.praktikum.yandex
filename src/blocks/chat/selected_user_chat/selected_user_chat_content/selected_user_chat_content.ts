import Handlebars from 'handlebars';
import {selectedUserChatContentTemplate} from './selected_user_chat_content.handlebars';
import './selected_user_chat_content.scss'

export const compiledSelectedUserChatContent = Handlebars.compile(selectedUserChatContentTemplate);

