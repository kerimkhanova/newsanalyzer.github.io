export function slider() {
    let Flickity = require('flickity');
    let flkty = new Flickity('.commits__carousel', {
        freeScroll: true,
        wrapAround: true,
        initialIndex: 0,
        groupCells: true,
    });
}
