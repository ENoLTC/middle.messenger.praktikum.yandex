import Handlebars from 'handlebars';
import {searchBarTemplate} from './search_bar.handlebars';
import './search_bar.scss'

export const compiledSearchBar = Handlebars.compile(searchBarTemplate);
