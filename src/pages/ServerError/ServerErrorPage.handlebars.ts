export const serverErrorTemplate = `
   {{log this}}
  <section class="server_error" data-id="{{__id}}">
    <p class="server_error__code">500</p>
    <p class="server_error__message">Мы уже фиксим</p>
    <a href="/main.html" class="screen-href">
      {{{childNodes.buttons.backToChatsButton}}}
    </a>
  </section>
`;
