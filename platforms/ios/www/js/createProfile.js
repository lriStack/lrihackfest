/**
 * Created by andremcdonald on 14-10-29.
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








    $('#createProfileNextBtn').on('click', function(){

        yourInterests();
        listFlag = 1;
        $('#preferenceView').removeClass('hidden');
        $('#signUpView').addClass('hidden');

    });


    $('#preferenceNextBtn').on('click', function(){
        $('#billingView').removeClass('hidden');
        $('#preferenceView').addClass('hidden');

    });

    $("#submitBtn").on("click", function () {
        $('#confirmView').removeClass('hidden');
        $('#billingView').addClass('hidden');
        $('#sentEmail').text($('#email').val());
    });

    var $billingAddressWrapper = $('#billingAddressWrapper');

    $('#needBillingChkBox').on(' change', function(){

        if($billingAddressWrapper.hasClass('hidden')){
            $billingAddressWrapper.removeClass('hidden');
        }else{
            $billingAddressWrapper.addClass('hidden');
        }
    });

        $("#suprizeBtn").on("click",function(){
            document.location = "productSurprize.html";
        });

}

function setchoices() {


}






