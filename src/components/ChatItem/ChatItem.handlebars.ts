export const chatItemTemplate = `
  <li class="chat-item{{#if isChatSelected}} chat-item_selected{{/if}}" id={{userId}}>
    <div class="chat-item__avatar">
      <img src="" />
    </div>
    <div class="chat-item__info">
      <div class="chat-item__header">
        <h4 class="chat-item__user-name">{{name}}</h4>
        <span class="chat-item__last-message-time">{{lastMessageTimeSent}}</span>
      </div>
      <div class="chat-item__content">
        <p class="chat-item__last-message">{{lastMessage}}</p>
        {{#if newMessages}}
          {{{compiledBadge}}}
        {{/if}}
    </div>
    </div>
  </li>
`
