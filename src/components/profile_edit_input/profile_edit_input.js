import Handlebars from 'handlebars';
import {profileEditInputTemplate} from './profile_edit_input.handlebars';
import './profile_edit_input.scss'

export const compiledProfileEditInput = Handlebars.compile(profileEditInputTemplate);
