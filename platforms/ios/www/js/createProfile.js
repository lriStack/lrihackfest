/**
 * Created by andremcdonald on 14-10-29.
 */

document.addEventListener('deviceready', deviceReady, false);

function deviceReady() {
    initHandlers();
}


function initHandlers(){
    $("#submitBtn").on("touchend", function(){
        $("#list").show();
    });
}

