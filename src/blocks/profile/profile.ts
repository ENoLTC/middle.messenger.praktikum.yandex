import Handlebars from 'handlebars';
import {profileEditTemplate} from './profile.handlebars';
import './profile.scss';
import {compiledButton} from '../../components/button/index';
import {compiledProfileEdit} from '../profile_edit/index';
import {compiledProfileEditInput} from '../../components/profile_edit_input/index';
import {compiledChatMenu} from '../chat_menu/';
import {compiledChatItem} from '../../components/chat_item/';
import {compiledSearchBar} from '../../components/search_bar';
import {context} from './profile_context';

const template = Handlebars.compile(profileEditTemplate);
Handlebars.registerHelper({
  log: function(something) {
    console.log(something);
  },
});
Handlebars.registerPartial({
  'button': compiledButton,
  'profile_edit': compiledProfileEdit,
  'profile_edit_input': compiledProfileEditInput,
  'chat_menu': compiledChatMenu,
  'chat_item': compiledChatItem,
  'search_bar': compiledSearchBar,
});

const main = document.querySelector('.main');
export const compiledProfile = template(context);
main.innerHTML = compiledProfile;
