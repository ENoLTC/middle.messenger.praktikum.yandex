import Handlebars from 'handlebars';
import {selectedUserChatFooterTemplate} from './selected_user_chat_footer.handlebars';
import './selected_user_chat_footer.scss'

export const compiledUserChatFooter = Handlebars.compile(selectedUserChatFooterTemplate);
