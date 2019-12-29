import "./style/analyzer.css";

import { formatDate, months, transformateDate } from "./script/dates/dates.js";


let subtitleResult = document.querySelector('.analytics-main__subtitle_result');
let mainNumber = document.getElementById('newsOfWeek');
let cards = JSON.parse(localStorage.getItem('cards'));
let summaryNumberOfWeek = 0;
let summaryNumber = document.getElementById('summaryNumber');
let tableMonth = document.querySelector('.analytics-result__table-month');
let dates = [];
let results = [];

for (let i = 0; i < 7; i++) {
    dates.push(new Date());
    dates[i].setDate(dates[i].getDate() - i);
    results.push(formatDate(dates[i]));
    document.getElementById(`day${i + 1}`).textContent = results[i];
};

cards.forEach(function (elem) {
    summaryNumberOfWeek += elem.title.split(`${localStorage.getItem('keyword')}`).length - 1;
    summaryNumberOfWeek += elem.title.split(`${localStorage.getItem('keyword')[0].toUpperCase() + localStorage.getItem('keyword').slice(1)}`).length - 1;
});

subtitleResult.textContent = `«${localStorage.getItem('keyword').toUpperCase()}»`;
mainNumber.textContent = JSON.parse(localStorage.getItem('totalResults'));
summaryNumber.textContent = summaryNumberOfWeek;
tableMonth.textContent = months[dates[0].getMonth()];

dates.forEach(function (elem, i) {
    let numOfReferences = 0;
    cards.forEach(function (card) {
        if (transformateDate(new Date(card.publishedAt)) == (transformateDate(elem))) {
            numOfReferences += card.title.split(localStorage.getItem('keyword')).length - 1;
            let bigLetter = localStorage.getItem('keyword')[0].toUpperCase() + localStorage.getItem('keyword').slice(1);
            numOfReferences += card.title.split(bigLetter).length - 1;

        }
    })
    document.getElementById(`graphNumber${i + 1}`).textContent = numOfReferences;
    if (summaryNumberOfWeek == 0) {
        document.getElementById(`graph${i + 1}`).setAttribute(`style`, `width: 0%`);
        document.getElementById(`graphNumber${i + 1}`).textContent = '';
    }
    else {
        document.getElementById(`graph${i + 1}`).setAttribute(`style`, `width: ${numOfReferences}%`);
    }

})