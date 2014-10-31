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
categoryPageCount = 1;
apiKey = "s3mse6zmaersezz8nz62sjtz";

function displayCategories(categoryData) {

    console.log(categoryData);

    //Recursive until all are loaded
    if(categoryData !== undefined && categoryData.categories.length > 0) {

        //Log utility
        $.each(categoryData.categories, function(index, value) {
            console.log(JSON.stringify(categoryData.categories[index]));
            //insert to orchestrate
            callOrchestrateInsert(categoryData.categories[index]);
        });

        $.merge(cateData, categoryData.categories);
        categoryPageCount++;
        setTimeout(function() {GetCategories("", "", apiKey, "displayCategories", categoryPageCount)}, 1000);
    }
    else {
        //Load is finished
        $('body').append(template(cateData));
    }
}

function addToProductList(products) {
    $.merge(products, recommendedProducts);
};


function initHandlers() {


    var listFlag = 0;

    function yourInterests() {

        var source = $("#yourInterestsList").html();
        var template = Handlebars.compile(source);


        setTimeout(function() {GetCategories("", "", apiKey, "displayCategories", categoryPageCount)}, 1000);

        //        if (listFlag === 0) {

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

    function getRecommendedProductsFromCategory(category) {
        GetProducts(value.name + "*", "(customerReviewAverage%3E4&customerReviewCount>10)", apiKey, "addToProductList");
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



function callOrchestrateInsert(data) {

    var urlToCall = "http://localhost:8888/OrchestrateImport/insertCategory.php";
    var dataToSend = new Object();

 /*   dataToSend.id = data.id;

    dataToSend.name = data.name;
    */

    dataToSend.data = data;

    //var dataString = JSON.stringify(dataToSend);
    var dataString = JSON.stringify(data);

    $.ajax({ // ajax call starts
        url: urlToCall,
        data: dataString,
        type: "POST",
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        success: function(response) {
            console.log(response);
        },
        error: function(jqXHR, textStatus, errorThrown ) {
            console.log(textStatus);
        }
    });

}

function setchoices() {


}






