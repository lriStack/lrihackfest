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



function getRecommendedProductsFromCategory(category) {
    GetProducts(value.name + "*", "(customerReviewAverage%3E4&customerReviewCount>10)", apiKey, "addToProductList");
};


function addToProductList(products) {
    //TODO: Kyle - Use this function to render the product list

};