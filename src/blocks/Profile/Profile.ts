import Handlebars from 'handlebars';
import {profileTemplate} from './Profile.handlebars';
import './Profile.scss';
import {Component} from '../../components/Component';
import {AnyObject} from '../../components/Component/Component';

export class Profile extends Component {
  constructor(props: AnyObject) {
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
    const compiledInputs = {};
    const compiledButtons = {};
    for (const [key, value] of Object.entries(this.props.inputs)) {
      compiledInputs[key] = value.render();
    }
    for (const [key, value] of Object.entries(this.props.buttons)) {
      compiledButtons[key] = value.render();
    }
    const template = Handlebars.compile(profileTemplate);
    return template({
      ...this.props,
      compiledInputs,
      compiledButtons,
    });
  }
}
