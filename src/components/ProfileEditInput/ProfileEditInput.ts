import Handlebars from 'handlebars';
import {profileEditInputTemplate} from './ProfileEditInput.handlebars';
import './ProfileEditInput.scss';
import {Component} from '../Component';

export class ProfileEditInput extends Component {
  constructor(props) {
    super('div', undefined, props);
  }

  render(): string {
    const template = Handlebars.compile(profileEditInputTemplate);
    return template(this.props);
  }
}
