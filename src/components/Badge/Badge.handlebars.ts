export const badgeTemplate = `
  <div
    data-id="{{__id}}"
    class="badge{{#each classes}} {{this}}{{/each}}">
    {{newMessages}}
  </div>
`;
