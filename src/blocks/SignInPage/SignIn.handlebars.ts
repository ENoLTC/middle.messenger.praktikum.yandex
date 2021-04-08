export const signInTemplate = `
  <section class="signin">
    <h1 class="signin__title">Регистрация</h1>
    <form class="signin__form" name="signin_form">
      <div class="signin__inputs">
        {{#each this.compiled.inputs}}
          {{{this}}}
        {{/each}}
      </div>
      <a href="/main.html" class="screen-href">{{{this.compiled.buttons.submitButton}}}</a>
    </form>
    <a href="/index.html" class="screen-href">{{{this.compiled.buttons.loginButton}}}</a>
  </section>
`;
