export const notFoundTemplate = `
  <section class="not_found" data-id="{{__id}}">
    <p class="not_found__code">404</p>
    <p class="not_found__message">Не туда попали</p>
    <a href="/main.html" class="not_found_link">
      {{{childNodes.buttons.backToChatsButton}}}
    </a>
  </section>
`;
