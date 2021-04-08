import {context as LoginContext} from '../LoginPage/LoginPage.context';
import {context as SignInContext} from '../SignInPage/SignIn.context';
import {context as AppContext} from '../AppPage/App.context';
import {context as ProfileEditContext} from '../Profile/Profile.context';
import {LoginPage} from '../LoginPage';
import {SignInPage} from '../SignInPage';

export enum Screens {
  LOGIN = 'login',
  SIGNIN = 'signin',
  APP = 'app',
  PROFILE_EDIT = 'profile_edit',
}

// export const context = {
//   activeScreen: Screens.SIGININ,
//   screens: {
//     [Screens.LOGIN]: new LoginPage(LoginContext),
//     [Screens.SIGNIN]: new SignInPage(SignInContext),
//     [Screens.APP]: {
//       props: AppContext,
//     },
//     [Screens.PROFILE_EDIT]: {
//       props: ProfileEditContext,
//     },
//   },
// };

// export type MainContextInterface = ReturnType<typeof context>;
