import Handlebars from 'handlebars';
import {selectedUserChatTemplate} from './SelectedUserChat.handlebars';
import './SelectedUserChat.scss';
import {Component} from '../../../components/Component';

export class SelectedUserChat extends Component {
  constructor(props: any) {
    super('section', 'chat', props);
  }

  componentDidMount() {
    Handlebars.registerHelper({
      log(something) {
        console.log(something);
      },
    });
  }

  render(): string {
    const template = Handlebars.compile(selectedUserChatTemplate);
    return template({
      ...this.props,
      compiledSelectedUserChatHeader: this.props.selectedUserChatHeader.render(),
      compiledSelectedUserChatContent: this.props.selectedUserChatContent.render(),
      compiledSelectedUserChatFooter: this.props.selectedUserChatFooter.render(),
    });
  }
}
