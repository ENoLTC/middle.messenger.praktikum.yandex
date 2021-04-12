import moreSVG from '../../../../../static/assets/icons/more.svg';

export const selectedUserChatHeaderTemplate = `
  <header class="chat__header" data-id="{{__id}}">
    <div class="chat__header__user">
      <div class="chat__header__user__avatar">
        <img class="chat__header__user__avatar__image" src="" />
      </div>
      <h3 class="chat__header__user__name">{{name}}</h3>
    </div>
    <button class="chat__header__button-more">
      <img class="chat__header_button-more__icon" src=${moreSVG} />
    </button>
  </header>
`;
