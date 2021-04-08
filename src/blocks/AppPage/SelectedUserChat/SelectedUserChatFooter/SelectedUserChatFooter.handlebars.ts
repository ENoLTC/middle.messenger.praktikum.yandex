import pinSVG from '../../../../../static/assets/icons/pin.svg';
import sendSVG from '../../../../../static/assets/icons/arrow-right.svg';

export const selectedUserChatFooterTemplate = `
  <footer class="chat__footer">
    <button class="chat__footer__button-pin">
      <img class="chat__footer__button-pin__icon" src=${pinSVG} />
    </button>
    <input class="chat__footer__input" name="message" placeholder="Сообщение" />
    <button class="chat__footer__button-send">
      <img class="chat__footer__button-send__icon" src=${sendSVG} />
    </button>
  </footer>
`;
