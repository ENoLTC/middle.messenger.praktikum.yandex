import Handlebars from 'handlebars';
import {inputWithFloatingLabelTemplate} from './InputWithFloatingLabel.handlebars';
import './InputWithFloatingLabel.scss';
import {Component} from '../Component';
import {Input} from '../Input';

export class InputWithFloatingLabel extends Component {
  constructor(props) {
    super(props);
  }

  render(): string {
    const template = Handlebars.compile(inputWithFloatingLabelTemplate);
    console.log(this.props);
    return template({
      ...this.props,
      input: this.props.childNodes.input.render(),
    });
  }
}
