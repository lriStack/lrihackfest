/**
 * Created by andremcdonald on 14-10-30.
 */



document.addEventListener('deviceready', deviceReady, false);

function deviceReady() {

    navigator.splashscreen.hide();

    initHandlers();
}


cateData = [];
recommendedProducts = [];

function displayCategories(categoryData) {

    console.log(categoryData);

    cateData = categoryData;
}

function addToProductList(products) {
    $.merge(products, recommendedProducts);
};


function initHandlers() {


    var listFlag = 0;

    function yourInterests() {

        var source = $("#yourInterestsList").html();
        var template = Handlebars.compile(source);
        var apiKey = "s3mse6zmaersezz8nz62sjtz";

        GetCategories("", "", apiKey, "displayCategories");

        //        if (listFlag === 0) {
                $('body').append(template(cateData));
        //        }
        //


        var values = [];
        $('.categoryGrp').click(function (el) {
            values.push($(this).attr('value'));
            var str = values.join(", ");
            //alert(str);
            localStorage.catList = str;
        });


    }

    function getRecommendedProductsFromCategory() {
        var categories = cateData.categories;

        $.each(categories, function(index, value) {
            GetRecommendedProducts(value.name + "*", "", apiKey, "addToProductList");
        });


    };







    $("#submitBtn").on("click", function () {
        $("#pickList").show();
        yourInterests();
        listFlag = 1;

    });

    $("#suprizeBtn").on("click",function(){
        document.location = "productSurprize.html";
    });


}

function setchoices() {


}






