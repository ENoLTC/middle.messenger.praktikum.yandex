export const profileEditInputTemplate = `
  <div class="profile-edit-input__container{{#each classes.container}} {{this}}{{/each}}">
    <input
      type={{type}}
      name={{name}}
      id={{name}}
      value={{value}}
      {{#if required}}required{{/if}}
      {{#unless isEditing}}readonly{{/unless}}
      class="profile-edit-input__input{{#each classes.input}} {{this}}{{/each}}" />
    <label for={{name}} class="profile-edit-input__label{{#each classes.label}} {{this}}{{/each}}">
      {{labelName}}
    </label>
  </div>
`
