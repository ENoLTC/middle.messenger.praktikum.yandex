import Handlebars from 'handlebars';
import {buttonTemplate} from './Button.handlebars';
import './Button.scss';
import {Component} from '../Component';

export class Button extends Component {
  constructor(props) {
    super(props);
  }

  render(): string {
    const template = Handlebars.compile(buttonTemplate);
    return template(this.props);
  }
}
