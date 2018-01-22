"use strict";

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



$(document).ready(function() {
  //change the integers below to match the height of your upper dive, which I called
  //banner.  Just add a 1 to the last number.  console.log($(window).scrollTop())
  //to figure out what the scroll position is when exactly you want to fix the nav
  //bar or div or whatever.  I stuck in the console.log for you.  Just remove when
  //you know the position.
  $(window).scroll(function () {

    console.log($(window).scrollTop());

    if ($(window).scrollTop() > 200) {
      $('#wwrapper').addClass('navbar-fixed-top');
    }

    if ($(window).scrollTop() < 201) {
      $('#wwrapper').removeClass('navbar-fixed-top');
    }
  });
});
