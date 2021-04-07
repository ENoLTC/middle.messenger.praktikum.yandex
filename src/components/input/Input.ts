import Handlebars from 'handlebars';
import {inputTemplate} from './Input.handlebars';
import './Input.scss';
import {Component} from '../Component';

export class Input extends Component {
  constructor(props) {
    super('div', undefined, props);
  }

  render(): string {
    console.log(this.props)
    const template = Handlebars.compile(inputTemplate);
    return template({...this.props});
  }
}
