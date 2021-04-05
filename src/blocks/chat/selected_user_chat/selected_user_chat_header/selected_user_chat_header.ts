import Handlebars from 'handlebars';
import {selectedUserChatHeaderTemplate} from './selected_user_chat_header.handlebars';
import './selected_user_chat_header.scss'

export const compiledSelectedUserChatHeader = Handlebars.compile(selectedUserChatHeaderTemplate);
