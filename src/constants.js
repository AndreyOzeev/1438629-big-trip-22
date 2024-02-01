const START_ID_COUNTER = 1;
const MAX_IMAGES_COUNT = 5;
const MAX_PRICE_VALUE = 200;
const MAX_PRICE_OFFER = 40;
const MILLISECONDS_IN_MINUTES = 60000;
const SECONDS_IN_MINUTES = 60;
const HOURS_IN_DAY = 12;

const EVENTS_TYPES = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];
const DATE_FORMAT = {
  DAY_MONTH: 'D MMM',
  MONTH_DAY: 'MMM DD',
  HOUR_MINUTES: 'HH:MM',
  DAY_MONTH_YEAR: 'DD/MM/YY[&nbsp;]HH:mm',
  MINUTES_WITH_POSTFIX: 'mm[M]',
  HOUR_MINUTES_WITH_POSTFIX: 'HH[H] mm[M]',
  DAY_HOUR_MINUTES_WITH_POSTFIX: 'DD[D] HH[H] mm[M]'
};
const DURATIONS = {
  HOUR: 5,
  DAY: 3,
  MINUTE: 59
};
const DESCRIPTIONS = [
  'This is a first place',
  'This is a second place',
  'This is a third place',
  'This is a third fourth',
];
const CITIES = [
  'Moscow',
  'Yoshkar-Ola',
  'Saint Petersburg',
  'Kirov',
  'Kazan',
  'Paris'
];

const OFFER_COUNT = {
  MIN: 0,
  MAX: 4
};

const OFFERS_TITLE = [
  'Offer title 1',
  'Offer title 2',
  'Offer title 3',
  'Offer title 4',
  'Offer title 5',
  'Offer title 6',
];

const FILTERS_TYPE = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past'
};

const USER_ACTION = {
  UPDATE_POINT: 'UPDATE_POINT',
  DELETE_POINT: 'DELETE_POINT',
  CREATE_POINT: 'CREATE_POINT',
};

const UPDATE_TYPE = {
  PATCH: 'PATCH',
  MINOR: 'MINOR',
  MAJOR: 'MAJOR',
  INIT: 'INIT',
};

const MODE = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

const EDIT_TYPE = {
  EDITING: 'EDITING',
  CREATING: 'CREATING',
};

const POINT_EMPTY = {
  basePrice: 0,
  dateFrom: null,
  dateTo: null,
  destination: null,
  isFavorite: false,
  offer: null,
  type: EVENTS_TYPES[0],
};

const SORT_TYPES = {
  DAY: 'day',
  EVENT: 'event',
  TIME: 'time',
  PRICE: 'price',
  OFFER: 'offer'
};

const ENABLED_SORT_TYPES = {
  [SORT_TYPES.DAY]: true,
  [SORT_TYPES.EVENT]: false,
  [SORT_TYPES.TIME]: true,
  [SORT_TYPES.PRICE]: true,
  [SORT_TYPES.OFFER]: false,
};

const EMPTY_LIST_MESSAGE = {
  EVERYTHING: 'Click New Event to create your first point',
  FUTURE: 'There are no future events now',
  PRESENT: 'There are no present events now',
  PAST: 'There are no past events now'
};

const METHOD = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE',
};

const SOURCE_URL = {
  POINTS: 'points',
  OFFERS: 'offers',
  DESTINATIONS: 'destinations',
}

export {
  START_ID_COUNTER,
  DESCRIPTIONS,
  CITIES,
  MAX_IMAGES_COUNT,
  EVENTS_TYPES,
  OFFERS_TITLE,
  MAX_PRICE_VALUE,
  MAX_PRICE_OFFER,
  DATE_FORMAT,
  MILLISECONDS_IN_MINUTES,
  SECONDS_IN_MINUTES,
  HOURS_IN_DAY,
  FILTERS_TYPE,
  DURATIONS,
  OFFER_COUNT,
  MODE,
  SORT_TYPES,
  ENABLED_SORT_TYPES,
  USER_ACTION,
  UPDATE_TYPE,
  EMPTY_LIST_MESSAGE,
  EDIT_TYPE,
  POINT_EMPTY,
  METHOD,
  SOURCE_URL
};
