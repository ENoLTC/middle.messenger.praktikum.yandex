export const selectedUserChatContentTemplate = `
  <section class="chat__messages">
    {{#each this}}
      <h5 class="chat__message-date">{{dateSent}}</h5>
      <article
        class="chat__article {{#if incoming}}chat__article-incoming{{else}}chat__article-outcoming{{/if}}">
        {{content}}
        <small class="chat__article__time">{{timeSent}}</small>
      </article>
    {{/each}}
  </section>
`
