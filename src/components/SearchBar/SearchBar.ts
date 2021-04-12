import Handlebars from 'handlebars';
import {searchBarTemplate} from './SearchBar.handlebars';
import './SearchBar.scss';
import {Component} from '../Component';

export class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    Handlebars.registerHelper({
      log(something) {
        console.log(something);
      },
    });
  }

  render(): string {
    const template = Handlebars.compile(searchBarTemplate);
    return template(this.props);
  }
}
