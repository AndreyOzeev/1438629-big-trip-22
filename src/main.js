import HeaderPresenter from './presenter/header-presenter.js';
import MainPresenter from './presenter/main-presenter.js';
import './mock/destination.js';
import DestinationModel from './model/destintaion-model.js';
import EventPointsModel from './model/event-points-model.js';
import OffersModel from './model/offers-model.js';
import MockService from './service/mock-service.js';

//header
const headerTripMainContainer = document.querySelector('.trip-main');
const headerFilterContainer = document.querySelector('.trip-controls__filters');
//main
const mockService = new MockService();
const tripEventsContainer = document.querySelector('.trip-events');
const destinationModel = new DestinationModel(mockService);
const eventPointsModel = new EventPointsModel(mockService);
const offersModel = new OffersModel(mockService);
const headerPresenter = new HeaderPresenter({
  headerTripInfo: headerTripMainContainer, headerListFilter: headerFilterContainer
});
const mainPresenter = new MainPresenter({
  tripContainer: tripEventsContainer,
  destinationModel,
  eventPointsModel,
  offersModel,
});


headerPresenter.init();
mainPresenter.init();
