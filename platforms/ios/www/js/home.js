
document.addEventListener('deviceready', deviceReady, false);

function deviceReady() {
    initHandlers();
}


function initHandlers(){

    $('#createProfileBtn').on('touchend',function() {
        //slide to page

//        navigator.pages.slideToPage('createProfile.html');

        document.location = "createProfile.html";
    });
}









