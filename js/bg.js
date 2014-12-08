var IMGS = {
    /* Alpi */
    'secteur4': ['alpi_001.jpg', 'alpi_002.jpg'],
    /* Escalade */
    'secteur3': ['escalade_001.jpg', 'escalade_002.jpg', 'escalade_003.jpg', 'escalade_004.jpg'],
    /* Hiver */
    'secteur5': ['hiver_001.jpg', 'hiver_002.jpg']
}
var PATH = '/squelettes/img_bg/';

var randomProperty = function (obj) {
    var keys = Object.keys(obj)
    return obj[keys[ keys.length * Math.random() << 0]];
};

var load_bg = function() {
    if (window.innerWidth < 700) {
        return;
    }
    var bclass = document.body.classList[0];
    var bg_imgs = [];

    for (var key in IMGS) {
        if (key == bclass) {
            bg_imgs = IMGS[key];
            break;
        }
    }
    
    if (bg_imgs.length == 0) {
        bg_imgs = randomProperty(IMGS);
    }

    var img = bg_imgs[ bg_imgs.length * Math.random() << 0];

    document.body.style.backgroundImage="url('" + PATH + img + "')";
}

window.onload = load_bg;
