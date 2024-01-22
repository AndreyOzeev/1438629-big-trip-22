import AbstractView from '../framework/view/abstract-view.js';

const createFilterTypeTemplate = (filters) => filters.reduce(
  (markup, { type, isChecked, isDisabled }) => `${markup}
    <div class="trip-filters__filter">
      <input id="filter-${type}" class="trip-filters__filter-input visually-hidden" type="radio" name="trip-filter" value="${type}" ${isChecked ? 'checked' : ''}
      ${isDisabled ? 'disabled' : ''}>
      <label class="trip-filters__filter-label" for="filter-${type}">${type}</label>
    </div>`, ''
);


const createListFilterTemplate = (filters) =>
  `<form class="trip-filters" action="#" method="get">
    ${createFilterTypeTemplate(filters)}
    <button class="visually-hidden" type="submit">Accept filter</button>
  </form>`;


export default class ListFilterView extends AbstractView {
  #items = [];

  constructor({items}) {
    super();
    this.#items = items;

  }

  get template() {
    return createListFilterTemplate(this.#items);
  }
}
