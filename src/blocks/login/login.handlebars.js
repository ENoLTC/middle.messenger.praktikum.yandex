export const loginTemplate = `
  <section class="login">
    <h1 class="login__title">Вход</h1>
    <form name="login_form" class="login__form">
      <div class="login__inputs">
        {{> input this.context.inputs.login}}
        {{> input this.context.inputs.password}}
      </div>
      <a href="/main.html" class="screen-href">
        {{> button this.context.buttons.submit}}
      </a>
    </form>
    <a href="/signin.html" class="screen-href">
      {{> button this.context.buttons.signIn}}
    </a>
  </section>
`
