export const buttonTemplate = `
  <button
    data-id={{__id}}
    type={{type}}
    name={{name}}
    class="button{{#each classes}} {{this}}{{/each}}">
    {{buttonText}}
  </button>
`;
