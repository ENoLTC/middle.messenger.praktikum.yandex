export const buttonTemplate = `
  <button
    type={{type}}
    name={{name}}
    class="button{{#each classes}} {{this}}{{/each}}">
    {{buttonText}}
  </button>
`
