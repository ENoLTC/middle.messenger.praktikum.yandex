export const inputWithFloatingLabelTemplate = `
  <div
    data-id={{__id}}
    class="input-container{{#each classes.container}} {{this}}{{/each}}">
    {{{input}}}
    <label for={{name}} class="label{{#each classes.label}} {{this}}{{/each}}">{{labelName}}</label>
    {{#unless isValid}}<label for={{name}} class="label label_invalid">{{labelInvalidText}}</label>{{/unless}}
  </div>
`;
