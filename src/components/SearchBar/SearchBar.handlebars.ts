import searchSVG from '../../../static/assets/icons/search.svg';

export const searchBarTemplate = `
  <div
    data-id="{{__id}}"
    class="search-bar{{#each this.classes.container}} {{this}}{{/each}}">
    <input
      type={{this.type}}
      name={{this.name}}
      id={{this.name}}
      required
      class="search-bar__input{{#each this.classes.searchBar}} {{this}}{{/each}}" />
    <label for={{this.name}} class="search-bar__label">
      <img src=${searchSVG} class="search-bar__icon" /> {{this.placeholder}}
    </label>
  </div>
`;
