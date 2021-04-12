import Handlebars from 'handlebars';
import {profileEditTemplate} from './ProfileEditPage.handlebars';
import './ProfileEditPage.scss';
import {context as ProfileEditPageContext} from './ProfileEditPage.context';
import {Component} from '../../components/Component';
import {Main} from '../Main';
import {Screens} from '../Main/Main.context';
import {render} from '../../utils/renderDOM';
import {ChatMenu} from '../ChatMenu';
import {Profile} from '../Profile';
import {Button} from '../../components/Button';
import {ProfileEditInput} from '../../components/ProfileEditInput';

export class ProfileEditPage extends Component {
  constructor(props: any) {
    super({
      ...props,
      childNodes: {
        profile: new Profile({
          isEditing: false,
          inputs: {
            email: new ProfileEditInput(props.profile.inputs.email),
            login: new ProfileEditInput(props.profile.inputs.login),
            first_name: new ProfileEditInput(props.profile.inputs.first_name),
            second_name: new ProfileEditInput(props.profile.inputs.second_name),
            display_name: new ProfileEditInput(props.profile.inputs.display_name),
            phone: new ProfileEditInput(props.profile.inputs.phone),
          },
          buttons: {
            submit: new Button(props.profile.buttons.submit),
            signIn: new Button(props.profile.buttons.signIn),
            logout: new Button(props.profile.buttons.logout),
          },
        }),
        chatMenu: new ChatMenu(props.chatMenu),
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
    const template = Handlebars.compile(profileEditTemplate);
    return template({
      ...this.props,
      childNodes: {
        chatMenu: this.props.childNodes.chatMenu.render(),
        profile: this.props.childNodes.profile.render(),
      },
    });
  }
}

const main = new Main({
  activeScreen: Screens.PROFILE_EDIT,
  screens: {
    [Screens.PROFILE_EDIT]: new ProfileEditPage(ProfileEditPageContext),
  },
});
render('body', main);
