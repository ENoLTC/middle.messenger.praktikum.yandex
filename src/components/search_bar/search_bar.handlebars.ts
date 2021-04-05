import searchSVG from '../../../static/assets/icons/search.svg';

export const searchBarTemplate = `
  <div class="search-bar{{#each classes.container}} {{this}}{{/each}}">
    <input 
      type={{type}}
      name={{name}}
      id={{name}}
      required
      class="search-bar__input{{#each classes.searchBar}} {{this}}{{/each}}" />
    <label for={{name}} class="search-bar__label">
      <img src=${searchSVG} class="search-bar__icon" /> {{placeholder}}
    </label>
  </div>
`
