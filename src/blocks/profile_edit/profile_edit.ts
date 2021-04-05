import Handlebars from 'handlebars';
import {profileEditTemplate} from './profile_edit.handlebars';
import './profile_edit.scss'

export const compiledProfileEdit = Handlebars.compile(profileEditTemplate);
