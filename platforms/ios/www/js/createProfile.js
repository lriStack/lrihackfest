/**
 * Created by andremcdonald on 14-10-29.
 */

document.addEventListener('deviceready', deviceReady, false);

function deviceReady() {
    initHandlers();
}


function initHandlers() {


    var listFlag = 0;


    function yourInterests() {
        var source = $("#yourInterestsList").html();
        var template = Handlebars.compile(source);

        var data = {
            yourLikes: [
                {
                    CategoryType: "Camera"
                },
                {
                    CategoryType: "Smart Phone"

                },
                {
                    CategoryType: "Tablet"
                },
                {
                    CategoryType: "Computer"
                }
            ]
        };

        if (listFlag === 0) {
            $('body').append(template(data));
        }
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






