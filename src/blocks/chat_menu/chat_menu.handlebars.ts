import arrowLeftSVG from '../../../static/assets/icons/arrow-left.svg';
import chevronRight from '../../../static/assets/icons/chevron-right.svg';

export const chatMenuTemplate = `
  <section class="chats-menu {{#if profile_info_opened}}chats-menu-hidden{{/if}}">
    <div class="chats-menu__header">
      <a href="/profile.html" class="screen-href">
        <p class="profile-button">
          Профиль <img src=${chevronRight} class="profile-button__chevron" alt="profile-editing" />
        </p>
      </a>
      {{> search_bar this.search_bar}}
    </div>
    <ul class="chats-menu__chats-list">
      {{#each this.chats}}
        {{> chat_item this}}
      {{/each}}
    </ul>
    <a href="/main.html" class="screen-href">
      <button type="button" class="button button_stop-editing">
        <img src=${arrowLeftSVG} alt="arrow-left" />
      </button>
    </a>
  </section>
`
