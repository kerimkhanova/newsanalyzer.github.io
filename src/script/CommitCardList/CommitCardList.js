import { transformateDate } from "../dates/dates.js";

const commitsCarousel = document.querySelector('.commits__carousel');

export class CommitCardList {

    commitCards(cards) {
        cards.forEach(function (el) {

            const commitsCarouselCell = document.createElement('div');
            commitsCarouselCell.classList.add('commits__carousel-cell');
            commitsCarousel.append(commitsCarouselCell);

            const commitsCard = document.createElement('a');
            commitsCard.classList.add('commits-card');
            commitsCard.setAttribute('href', el.html_url);
            commitsCarouselCell.append(commitsCard);

            const commitsCardDate = document.createElement('span');
            commitsCardDate.classList.add('commits-card__date');
            commitsCardDate.textContent = transformateDate(new Date(el.commit.committer.date));
            commitsCard.append(commitsCardDate);

            const commitsCardAboutAuthor = document.createElement('div');
            commitsCardAboutAuthor.classList.add('commits-card__about-author');
            commitsCard.append(commitsCardAboutAuthor);

            const commitsCardCommitsImage = document.createElement('div');
            commitsCardCommitsImage.classList.add('commits-card__commits-image');
            commitsCardCommitsImage.setAttribute(`style`, `background-image: url(${el.author.avatar_url})`);
            commitsCardAboutAuthor.append(commitsCardCommitsImage);

            const commitsCardCommitsAuthor = document.createElement('div');
            commitsCardCommitsAuthor.classList.add('commits-card__commits-author');
            commitsCardAboutAuthor.append(commitsCardCommitsAuthor);

            const commitsCardAuthorName = document.createElement('p');
            commitsCardAuthorName.classList.add('commits-card__author-name');
            commitsCardAuthorName.textContent = el.commit.committer.name;
            commitsCardCommitsAuthor.append(commitsCardAuthorName);

            const commitsCardAuthorEmail = document.createElement('p');
            commitsCardAuthorEmail.classList.add('commits-card__author-email');
            commitsCardAuthorEmail.textContent = el.commit.committer.email;
            commitsCardCommitsAuthor.append(commitsCardAuthorEmail);

            const commitsCardText = document.createElement('p');
            commitsCardText.classList.add('commits-card__text');
            commitsCardText.textContent = el.commit.message;
            commitsCard.append(commitsCardText);
        })
    }

    errorMessage(message) {
        commitsCarousel.textContent = message;
    }
}