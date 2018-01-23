"use strict";

///////////////////////////// scroll to top button ////////////////////////////
// When the user scrolls down 20px from the top of the document, show the button
// button HTML is located on the FOOTER template.
window.onscroll = function() {
    scrollFunction();
    scrollSticky();
    ribbonFunction();
};

function scrollFunction() {
    var myB = document.getElementById("myBtn");
    myB.style.display = "none";
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        if (myB) {
            myB.style.display = "block";
        }
    } else { 
        if (myB) {
            myB.style.display = "none";
        }
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    $('html, body').animate({ scrollTop: 0 }, 'easeInOutExpo', function() {});

}


function scrollSticky() {
    console.log($(window).scrollTop());
    if ($(window).scrollTop() > 294) {
        $('#sticky-nav-wrapper').addClass('navbar-fixed-top');
        $('#body').addClass('scrollAdjust');
    }

    if ($(window).scrollTop() < 295) {
        $('#sticky-nav-wrapper').removeClass('navbar-fixed-top');
        $('#body').removeClass('scrollAdjust');
    }

}


function ribbonFunction() {
       var myB = document.getElementById("ribbon");
    myB.style.display = "none";
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        if (myB) {
            myB.style.display = "block";
        }
    } else {
        if (myB) {
            myB.style.display = "none";
        }
    }
}