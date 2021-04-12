import Handlebars from 'handlebars';
import {badgeTemplate} from './Badge.handlebars';
import './Badge.scss';
import {Component} from '../Component';

export class Badge extends Component {
  constructor(props) {
    super(props);
  }

  render(): string {
    const template = Handlebars.compile(badgeTemplate);
    return template(this.props);
  }
}
