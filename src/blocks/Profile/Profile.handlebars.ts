import avatarSVG from '../../../static/assets/icons/picture.svg';

export const profileTemplate = `
  <section class="profile" data-id="{{__id}}">
    <div class="profile__avatar">
      <img class="profile__avatar-image" src=${avatarSVG} id="avatar" />
      <button class="profile__avatar-button" type="button">Поменять аватар</button>
    </div>
    <h2 class="profile__name">Иван</h2>
    <div class="profile__info">
      {{#each compiledInputs}}
        {{{this}}}
      {{/each}}
    </div>
    <div class="profile__buttons">
      {{#each compiledButtons}}
        {{{this}}}
      {{/each}}
    </div>
  </section>
`;
