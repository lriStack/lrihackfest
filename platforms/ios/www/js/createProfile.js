/**
 * Created by andremcdonald on 14-10-29.
 */



document.addEventListener('deviceready', deviceReady, false);

function deviceReady() {

    navigator.splashscreen.hide();

    initHandlers();
}


cateData = [];

function displayCategories(categoryData) {

    console.log(categoryData);

    cateData = categoryData;
}


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






