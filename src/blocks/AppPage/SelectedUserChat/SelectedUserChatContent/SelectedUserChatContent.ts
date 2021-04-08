import Handlebars from 'handlebars';
import {selectedUserChatContentTemplate} from './SelectedUserChatContent.handlebars';
import './SelectedUserChatContent.scss';
import {Component} from '../../../../components/Component';

export class SelectedUserChatContent extends Component {
  constructor(props: any) {
    super('header', 'chat-header', props);
  }

  componentDidMount() {
    Handlebars.registerHelper({
      log(something) {
        console.log(something);
      },
    });
  }

  render(): string {
    const template = Handlebars.compile(selectedUserChatContentTemplate);
    return template(this.props);
  }
}
