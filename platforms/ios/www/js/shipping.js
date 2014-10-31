/**
 * Created by andremcdonald on 14-10-30.
 */
document.addEventListener('deviceready', deviceReady, false);

function deviceReady() {

    // navigator.splashscreen.hide();

    initHandlers();
}


function initHandlers() {



    var source   = $("#giftTemplate").html();
    var template = Handlebars.compile(source);

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


    var html = template(context);


    $('#list').html(html);

    $('#shipButton').on('click',function(){
        $('#shippingList').addClass('hidden');

       $('#shippingConfirm').removeClass('hidden');
    });
    $("#returnToStart").on("click",function(){
        document.location = "createProfile.html";
    });
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
    template(products);
};