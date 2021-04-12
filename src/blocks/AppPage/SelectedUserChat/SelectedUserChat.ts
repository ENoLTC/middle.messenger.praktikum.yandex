import Handlebars from 'handlebars';
import {selectedUserChatTemplate} from './SelectedUserChat.handlebars';
import './SelectedUserChat.scss';
import {Component} from '../../../components/Component';
import {SelectedUserChatHeader} from './SelectedUserChatHeader';
import {SelectedUserChatContent} from './SelectedUserChatContent';
import {SelectedUserChatFooter} from './SelectedUserChatFooter';

export class SelectedUserChat extends Component {
  constructor(props: any) {
    super({
      ...props,
      childNodes: {
        selectedUserChatHeader: new SelectedUserChatHeader(props.selectedUserChatHeader),
        selectedUserChatContent: new SelectedUserChatContent(props.selectedUserChatContent),
        selectedUserChatFooter: new SelectedUserChatFooter(props.selectedUserChatFooter),
      },
    });
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
      compiledSelectedUserChatHeader: this.props.childNodes.selectedUserChatHeader.render(),
      compiledSelectedUserChatContent: this.props.childNodes.selectedUserChatContent.render(),
      compiledSelectedUserChatFooter: this.props.childNodes.selectedUserChatFooter.render(),
    });
  }
}
