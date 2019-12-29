import { slider } from "../slider/slider.js";
import { Commit } from "../commit/commit.js";

const commitCards = new Commit();

export class ApiCommit {
    constructor(url) {
        this.url = url;
    }
    getInfoCommit() {
        fetch(this.url)
            .then(res => {
                return res.json();
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