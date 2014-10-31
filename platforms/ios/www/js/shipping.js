/**
 * Created by andremcdonald on 14-10-30.
 */
document.addEventListener('deviceready', deviceReady, false);

function deviceReady() {

    // navigator.splashscreen.hide();

    initHandlers();
}


function initHandlers() {

      alert('test');
}



function getRecommendedProductsByReviewAverageAndCount(category) {
    GetProducts(value.name + "*", "(customerReviewAverage%3E4&customerReviewCount>10)", apiKey, "addToProductList");
};

function getRecommendedProductsByDateRange(category) {
    var today = new Date();
    var todayString = today.toISOString();

    var trailingChars = 5;
    var releaseDate = todayString.substr(0, now.length - trailingChars)

    GetProducts(value.name + "*", "(releaseDate>"+releaseDate+")", apiKey, "addToProductList");
};

function addToProductList(products) {
    //TODO: Kyle - Use this function to render the product list

};