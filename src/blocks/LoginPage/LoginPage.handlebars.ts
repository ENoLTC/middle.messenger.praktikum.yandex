export const loginTemplate = `
  <h1 class="login__title">Вход</h1>
  <form name="login_form" class="login__form">
    <div class="login__inputs">
      {{{loginInput}}}
      {{{passwordInput}}}
    </div>
    <a href="/main.html" class="screen-href">
      {{{submitButton}}}
    </a>
  </form>
  <a href="/signin.html" class="screen-href">
    {{{signInButton}}}
  </a>
`;
