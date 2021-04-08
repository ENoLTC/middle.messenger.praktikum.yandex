import Handlebars from 'handlebars';
import {profileEditTemplate} from './ProfileEditPage.handlebars';
import './ProfileEditPage.scss';
import {context as ProfileEditPageContext} from './ProfileEditPage.context';
import {Component} from '../../components/Component';
import {Main} from '../Main';
import {Screens} from '../Main/Main.context';
import {render} from '../../utils/renderDOM';

export class ProfileEditPage extends Component {
  constructor(props: any) {
    super('section', 'login', props);
  }

  componentDidMount() {
    Handlebars.registerHelper({
      log(something) {
        console.log(something);
      },
    });
  }

  render(): string {
    const template = Handlebars.compile(profileEditTemplate);
    const renderedTemplate = template({
      ...this.props,
      chatMenu: this.props.chatMenu.render(),
      profile: this.props.profile.render(),
    });
    return renderedTemplate;
  }
}

const main = new Main({
  activeScreen: Screens.PROFILE_EDIT,
  screens: {
    [Screens.PROFILE_EDIT]: new ProfileEditPage(ProfileEditPageContext),
  },
});
render('body', main);
