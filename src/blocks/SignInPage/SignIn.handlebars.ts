export const signInTemplate = `
  <section class="signin" data-id="{{__id}}">
    <h1 class="signin__title">Регистрация</h1>
    <form class="signin__form" name="signin_form">
      <div class="signin__inputs">
        {{#each childNodes.inputs}}
          {{{this}}}
        {{/each}}
      </div>
      <a href="/main.html" class="screen-href">{{{childNodes.buttons.submitButton}}}</a>
    </form>
    <a href="/index.html" class="screen-href">{{{childNodes.buttons.loginButton}}}</a>
  </section>
`;
