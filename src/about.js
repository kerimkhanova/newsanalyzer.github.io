import "./style/about.css";

function sliderInitialization() {
    let Flickity = require('flickity');
    let flkty = new Flickity('.commits__carousel', {
        freeScroll: true,
        wrapAround: true,
        initialIndex: 0,
        groupCells: true,
    });
}
sliderInitialization();