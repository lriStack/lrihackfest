navigator.splashscreen.hide();


document.addEventListener('deviceready', deviceReady, false);

function deviceReady() {
    initHandlers();
}


function initHandlers(){

    $('#createProfileBtn').click(function() {

        alert('sd');
        //slide to page

        //navigator.pages.flip('createProfile.html');


        setTimeout(function() {
            window.location = "createProfile.html";
        }, 50);

        nativetransitions.flip(duration, direction);
    });
}









