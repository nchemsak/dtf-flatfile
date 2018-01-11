"use strict";

function add(a, b) {
    return a + b;
}
console.log("add(5, 12): ", add(5, 12));

///////////////////////////// scroll to top button ////////////////////////////
// When the user scrolls down 20px from the top of the document, show the button
// button HTML is located on the FOOTER template.
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var myB = document.getElementById("myBtn");
    myB.style.display = "none";
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        if (myB) {
           myB.style.display= "block";
        }
    } else {
        if (myB) {
            myB.style.display = "none";
        }
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
     $('html, body').animate({ scrollTop: 0 }, 'easeInOutExpo', function () {
    });

}
