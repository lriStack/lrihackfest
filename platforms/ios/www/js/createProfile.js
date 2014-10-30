/**
 * Created by andremcdonald on 14-10-29.
 */

//navigator.splashscreen.hide();

document.addEventListener('deviceready', deviceReady, false);

function deviceReady() {
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


    }





    var values = [];
    $('.categoryGrp').click(function (el) {
        //console.log($(this).attr('checked'));
        //$('#result').append($(this).attr('value') + ',');
        values.push($(this).attr('value'));
        var str = values.join(", ");
//        alert(str);
        localStorage.catList = str;
    });


    $("#submitBtn").on("click", function () {
        $("#pickList").show();
        yourInterests();
        listFlag = 1;

    });


}

function setchoices() {


}






