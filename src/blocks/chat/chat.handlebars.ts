export const chatTemplate = `
  <section class="workspace">
    {{> chat_menu this.context}}
    <section class="chat-content">
      {{> (chatContentSelector)}}
    </section>
  </section>
`
