import Handlebars from 'handlebars';
import {selectedUserChatHeaderTemplate} from './SelectedUserChatHeader.handlebars';
import './SelectedUserChatHeader.scss';
import {Component} from '../../../../components/Component';

export class SelectedUserChatHeader extends Component {
  constructor(props: any) {
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
    const template = Handlebars.compile(selectedUserChatHeaderTemplate);
    return template(this.props);
  }
}
