export const signinTemplate = `
  <section class="signin">
    <h1 class="signin__title">Регистрация</h1>
    <form class="signin__form" name="signin_form">
      <div class="signin__inputs">
        {{#each this.inputs}}
          {{> input this}}
        {{/each}}
      </div>
      <a href="/main.html" class="screen-href">{{> button this.buttons.submit}}</a>
    </form>
    <a href="/index.html" class="screen-href">{{> button this.buttons.login}}</a>
  </section>
`
