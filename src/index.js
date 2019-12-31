import "./style/style.css";

import { result0, result6 } from "./script/dates/dates.js";
import { ApiNews, newsCard } from "./script/apiNews/apiNews.js";

// Переменные

const searchMainContent = document.querySelector('.search__main');
const searchInput = document.querySelector(".search__text-input");
const searchButton = document.querySelector(".search__button");
const apiKey = "ec8967bf37af46bfb6470ea036f25c76";
const cardsLocalStorage = localStorage.getItem('cards');
const keywordLocalStorage = localStorage.getItem('keyword');

// Функции

function newLocalStorage() {
    if (JSON.parse(cardsLocalStorage) !== null) {
        searchInput.value = keywordLocalStorage;
        newsCard.moreButtonListener();
        newsCard.readout(JSON.parse(cardsLocalStorage));
    }
};
newLocalStorage();

function validationTextInput() {

    event.preventDefault();
    const errorMessage = document.createElement('span');

    if (searchInput.value.length > 0) {

        errorMessage.remove();
        const getNews = new ApiNews(`https://newsapi.org/v2/everything?q=${searchInput.value}&apiKey=${apiKey}&pageSize=100&from=${result0}&to=${result6}&language=ru`);
        getNews.getInfo(searchInput.value);

    } else {

        errorMessage.classList.add('error-message');
        errorMessage.textContent = "Нужно ввести ключевое слово";
        searchMainContent.append(errorMessage);
    }
}

// Лиссенеры
searchButton.addEventListener("click", validationTextInput);

searchInput.addEventListener("input", function () {
    searchInput.classList.add('search__text-input_entered');
});
