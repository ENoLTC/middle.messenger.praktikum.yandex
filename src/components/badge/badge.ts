import Handlebars from 'handlebars';
import {badgeTemplate} from './badge.handlebars';
import './badge.scss'

export const compiledBadge = Handlebars.compile(badgeTemplate);
