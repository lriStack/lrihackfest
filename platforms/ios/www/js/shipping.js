/**
 * Created by andremcdonald on 14-10-30.
 */
document.addEventListener('deviceready', deviceReady, false);

function deviceReady() {

    // navigator.splashscreen.hide();

    initHandlers();
}


function initHandlers() {

    $("#returnToStart").on("click",function(){
        document.location = "createProfile.html";
    });
}



function getRecommendedProductsByReviewAverageAndCount(category) {
    GetProducts(value.name + "*", "(customerReviewAverage%3E4&customerReviewCount>10)", apiKey, "addToProductList");
};


function getRecommendedProductsByDateRange(category) {
    GetProducts(value.name + "*", "(customerReviewAverage%3E4&customerReviewCount>10)", apiKey, "addToProductList");
};

function addToProductList(products) {
    //TODO: Kyle - Use this function to render the product list

};