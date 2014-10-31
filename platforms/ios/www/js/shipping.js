/**
 * Created by andremcdonald on 14-10-30.
 */
document.addEventListener('deviceready', deviceReady, false);

function deviceReady() {

    // navigator.splashscreen.hide();

    initHandlers();
    var test = " Learning Toys";

    getRecommendedProductsByReviewAverageAndCount(test)
}

var apiKey = "s3mse6zmaersezz8nz62sjtz";
var source   = $("#giftTemplate").html();
var template = Handlebars.compile(source);

function initHandlers() {


    var context = {client:[{
        FirstName: "Natalie", LastName: "Pan",
        Address: "123 Seaport",
        ImageUrl: "test.jpg",
        Prodtitle:"iPhone 6",
        ProductId: "ISBN 123"
    },
        {
        FirstName: "Andre", LastName: "McD",
        Address: "333 Boston",
        ImageUrl: "test.jpg",
        Prodtitle:"Tablet",
        ProductId: "ISBN 1234"}]
    };




    $('#shipButton').on('click',function(){



        $('#shippingList').addClass('hidden');

       $('#shippingConfirm').removeClass('hidden');
    });
    $("#returnToStart").on("click",function(){
        document.location = "createProfile.html";
    });
}



function getRecommendedProductsByReviewAverageAndCount(category) {
    //GetProducts("(description=" + category + "*" + "&", "customerReviewAverage%3E4&customerReviewCount>10)", apiKey, "addToProductList",1);
    GetProducts("", "", apiKey, "addToProductList", 1);
};

function getRecommendedProductsByDateRange(category) {
    var today = new Date();
    var todayString = today.toISOString();

    var trailingChars = 5;
    var releaseDate = todayString.substr(0, now.length - trailingChars)

    GetProducts("(description=" + category + "*" + ")", "(releaseDate>"+releaseDate+")", apiKey, "addToProductList",1);
};

function addToProductList(products) {
    //template(products);

    var html = JSON.stringify(products.products);



    $('#datasomething').text(html);
};