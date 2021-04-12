import Handlebars from 'handlebars';
import {profileEditInputTemplate} from './ProfileEditInput.handlebars';
import './ProfileEditInput.scss';
import {Component} from '../Component';
import {AnyObject} from '../Component/Component';

export class ProfileEditInput extends Component {
  constructor(props: AnyObject) {
    super(props);
  }

  render(): string {
    const template = Handlebars.compile(profileEditInputTemplate);
    return template(this.props);
  }
}
