export const inputTemplate = `
  <div
    data-id={{__id}}
    class="input-container{{#each classes.container}} {{this}}{{/each}}">
    <input
      type={{type}}
      name={{name}}
      id={{name}}
      placeholder={{name}}
      {{#if required}}required{{/if}}
      class="input{{#each classes.input}} {{this}}{{/each}}" />
    <label for={{name}} class="label{{#each classes.label}} {{this}}{{/each}}">{{labelName}}</label>
    {{#unless isValid}}<label for={{name}} class="label label_invalid">{{labelInvalidText}}</label>{{/unless}}
  </div>
`
