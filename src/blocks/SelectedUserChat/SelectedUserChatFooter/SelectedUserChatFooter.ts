import Handlebars from 'handlebars';
import {selectedUserChatFooterTemplate} from './SelectedUserChatFooter.handlebars';
import './SelectedUserChatFooter.scss';
import {Component} from '../../../components/Component';

export class SelectedUserChatFooter extends Component {
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
    const template = Handlebars.compile(selectedUserChatFooterTemplate);
    return template(this.props);
  }
}
