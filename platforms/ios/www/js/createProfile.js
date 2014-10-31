/**
 * Created by andremcdonald on 14-10-29.
 */



document.addEventListener('deviceready', deviceReady, false);

function deviceReady() {

   // navigator.splashscreen.hide();

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


        var apiKey = "s3mse6zmaersezz8nz62sjtz";

        GetCategories("", "", apiKey, "displayCategories");
//
//        //        if (listFlag === 0) {
//                $('body').append(template(cateData));
//        //        }
//        //


        //list of clients
        var refreshClients = function () {
            $.when(cateData).done(showAllParentCat);
        };
        var showAllParentCat = function (templateInput) {
            var source;
            var template;
            var path = 'Templates/categoryList.html'
            $.ajax({
                url: path,
                cache: true,
                success: function (data) {
                    source = data;
                    template = Handlebars.compile(source);
                    $('#cateContainer').html(template(templateInput));
                }
            });
        };

        $(function () {

            refreshClients();
        });




        var values = [];
        $('.categoryGrp').click(function (el) {
            values.push($(this).attr('value'));
            var str = values.join(", ");
            //alert(str);
            localStorage.catList = str;
        });


    }

//    function getRecommendedProductsFromCategory() {
//        var categories = cateData.categories;
//
//        $.each(categories, function(index, value) {
//            GetRecommendedProducts(value.name + "*", "", apiKey, "addToProductList");
//        });
//
//
//    };



//    alert("sdfs");



    $('#createProfileNextBtn').on('click',function(){
        location = "preference.html";

    });

    //MAKE ONLOAD
    $('#getData').click(function(){
            yourInterests();
            listFlag = 1;

    });

    $('#preferenceNextBtn').click(function(){
        location = "billing.html";
    });

    $("#submitBtn").on("click", function () {
        location = "confirmation.html";

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


    $("#returnToStart").on("click",function(){
        document.location = "createProfile.html";
    });


    $("#shippingDepartment").on("click",function(){
        document.location = "productSurprize.html";
    });




}






