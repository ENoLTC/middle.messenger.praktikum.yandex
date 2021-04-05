export const selectedUserChatTemplate = `
  <section class="chat">
    {{> selected_user_chat_header this.context.selected_chat.name}}
    {{> selected_user_chat_content this.context.selected_chat.chat}}
    {{> selected_user_chat_footer}}
  </section>
`
