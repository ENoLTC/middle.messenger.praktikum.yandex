export const inputTemplate = `
  <input
    data-id={{__id}}
    type={{type}}
    name={{name}}
    id={{name}}
    value="{{value}}"
    placeholder={{name}}
    {{#if required}}required{{/if}}
    class="input{{#each classes.input}} {{this}}{{/each}}" />
`;
