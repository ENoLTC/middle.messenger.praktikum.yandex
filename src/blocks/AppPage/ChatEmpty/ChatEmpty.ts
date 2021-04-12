import Handlebars from 'handlebars';
import {chatEmptyTemplate} from './ChatEmpty.handlebars';
import './ChatEmpty.scss';
import {Component} from '../../../components/Component';

export class ChatEmpty extends Component {
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
    const template = Handlebars.compile(chatEmptyTemplate);
    return template(this.props);
  }
}
