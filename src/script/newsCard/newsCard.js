import { transformateDate } from "../dates/dates.js";

const cardsContainer = document.querySelector('.results__cards');
const searchInput = document.querySelector(".search__text-input");
const searchButton = document.querySelector(".search__button");
const resultstSection = document.querySelector(".results");
const resultsMoreButton = document.querySelector(".results__more");
const notFoundSection = document.querySelector(".not-found");
const preloaderSection = document.querySelector(".preloader");
const notFoundTextMain = document.querySelector('.not-found__text-main');
const notFoundText = document.querySelector('.not-found__text');

// Создание карточки с новостями
export class Card {

    constructor() {

        this.addToStorage = this.addToStorage.bind(this);
        this.renderCards = this.renderCards.bind(this);
        this.readout = this.readout.bind(this);
        this.remove = this.remove.bind(this);
        this.preloader = this.preloader.bind(this);
        this.renderError = this.renderError.bind(this);
        this.notFoundClose = this.notFoundClose.bind(this);

    }

    readout(cards) {

        this.cards = cards;
        if (this.cards.length === 0) {
            this.notFound();
        } else if (this.cards.length > 3) {
            this.notFoundClose();
            resultstSection.classList.add('results_is-opened');
            this.create(this.cards.splice(0, 3));
            resultsMoreButton.classList.remove('results__more_hide');
        } else {
            resultstSection.classList.add('results_is-opened');
            resultsMoreButton.classList.add('results__more_hide');
            this.moreButtonRemoveListener();
            this.create(this.cards);
        }
    }

    renderCards() {
        this.readout(this.cards);
    }

    moreButtonListener() {
        resultsMoreButton.addEventListener('click', this.renderCards);
    }

    moreButtonRemoveListener() {
        resultsMoreButton.removeEventListener('click', this.renderCards);
    }

    create(cards) {

        cards.forEach(function (elem) {
            const cardItem = document.createElement("a");
            cardItem.classList.add('card');
            cardItem.setAttribute('href', elem.url);
            cardsContainer.append(cardItem);

            const cardImage = document.createElement("div");
            cardImage.classList.add('card__image');
            cardImage.setAttribute(`style`, `background-image: url(${elem.urlToImage})`);
            cardItem.append(cardImage);

            const cardDate = document.createElement("span");
            cardDate.classList.add('card__date');
            cardDate.textContent = transformateDate(new Date(elem.publishedAt));
            cardItem.append(cardDate);

            const cardTitle = document.createElement("h4");
            cardTitle.classList.add('card__title');
            cardTitle.textContent = elem.title;
            cardItem.append(cardTitle);

            const cardText = document.createElement("p");
            cardText.classList.add('card__text');
            cardText.textContent = elem.description;
            cardItem.append(cardText);

            const cardSource = document.createElement("p");
            cardSource.classList.add('card__source');
            cardSource.textContent = elem.source.name;
            cardItem.append(cardSource);

            return cardItem;
        });

    }

    remove() {
        localStorage.clear();
        this.moreButtonRemoveListener();
        while (cardsContainer.firstChild) {
            cardsContainer.removeChild(cardsContainer.firstChild);
        }
        resultstSection.classList.remove('results_is-opened');
        resultsMoreButton.classList.add('results__more_hide');
    }

    preloader() {
        preloaderSection.classList.add('preloader_is-opened');
        searchButton.setAttribute('disabled', true);
        searchInput.setAttribute('disabled', true);
        this.notFoundClose();
    }

    preloaderClose() {
        preloaderSection.classList.remove('preloader_is-opened');
        searchButton.removeAttribute('disabled', true);
        searchInput.removeAttribute('disabled', true);
    }

    notFound() {
        notFoundSection.classList.add('not-found_is-opened');
        localStorage.clear();
    }

    notFoundClose() {
        notFoundSection.classList.remove('not-found_is-opened');
    }

    addToStorage(cards) {
        localStorage.setItem('cards', JSON.stringify(cards));
        this.readout(cards);
    }

    renderError(error) {

        this.notFound();
        notFoundTextMain.textContent = `${error}`;
        notFoundText.textContent = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.';
    }
}