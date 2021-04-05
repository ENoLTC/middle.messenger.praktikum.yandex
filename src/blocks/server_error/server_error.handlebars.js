export const serverErrorTemplate = `
  <section class="server_error">
    <p class="server_error__code">500</p>
    <p class="server_error__message">Мы уже фиксим</p>
    <a href="/main.html" class="screen-href">
      {{> button this.buttons.backToChats}}
    </a>
  </section>
`
