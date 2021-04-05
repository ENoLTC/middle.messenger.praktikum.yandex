import avatarSVG from '../../../static/assets/icons/picture.svg';

export const profileEditTemplate = `
  <section class="profile">
    <div class="profile__avatar">
      <img class="profile__avatar-image" src=${avatarSVG} id="avatar" />
      <button class="profile__avatar-button" type="button">Поменять аватар</button>
    </div>
    <h2 class="profile__name">Иван</h2>
    <div class="profile__info">
      {{#each this.inputs}}
        {{> profile_edit_input this}}
      {{/each}}
    </div>
    <div class="profile__buttons">
      {{#each this.buttons}}
        {{> button this}}
      {{/each}}
    </div>
  </section>
`
