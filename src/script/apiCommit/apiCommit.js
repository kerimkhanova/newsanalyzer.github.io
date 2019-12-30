import { slider } from "../slider/slider.js";
import { CommitCardList } from "../CommitCardList/CommitCardList.js";

const commitCards = new CommitCardList();

export class ApiCommit {
    constructor(url) {
        this.url = url;
    }
    getInfoCommit() {
        fetch(this.url)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .then(json => {
                if (json.length > 0) {
                    commitCards.commitCards(json);
                    slider();
                    return json;
                } else {
                    return Promise.reject(json = "Ни одного коммита еще не оставлено.")
                }

            })
            .catch(error => {
                commitCards.errorMessage(error);
            });

    }
}