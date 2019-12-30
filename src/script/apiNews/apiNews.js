import { NewsCardList } from "../NewsCardList/NewsCardList.js";

export const newsCard = new NewsCardList();

export class ApiNews {
    constructor(url) {
        this.url = url;
    }
    getInfo(searchEnteredText) {
        newsCard.notFoundClose();
        newsCard.remove();
        newsCard.preloader();
        newsCard.moreButtonRemoveListener();

        fetch(this.url)

            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                return Promise.reject(`Ошибка: ${response.status}`);
            })
            .then(json => {

                if (json.totalResults == 0 || json.articles.length == 0) {
                    newsCard.notFound();
                } else {
                    localStorage.setItem('keyword', searchEnteredText);
                    localStorage.setItem('totalResults', JSON.stringify(json.totalResults));
                    newsCard.addToStorage(json.articles);
                    newsCard.moreButtonListener();
                }

            })
            .catch(json => {
                newsCard.remove();
                newsCard.renderError(json);
                localStorage.removeItem('cards');
            })
            .finally(() => {
                newsCard.preloaderClose();
            })

    }
}