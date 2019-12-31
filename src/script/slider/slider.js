import "../../vendor/flickity.css";
import Flickity from 'flickity';

export function slider() {
    const flkty = new Flickity('.commits__carousel', {
        freeScroll: true,
        wrapAround: true,
        initialIndex: 0,
        groupCells: true,
    });
    console.log(flkty)
};
