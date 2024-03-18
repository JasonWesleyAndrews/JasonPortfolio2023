

// mobile nav show/hide //

$("#mobileNav").on("click", function() {
  if ($(".subNav").first().is(":hidden")) {
    $(".subNav").slideDown("medium");
    $(".grayBG").fadeIn("medium");
    $('html, body').css({
      overflow: 'hidden',
    });
    document.getElementById("mobileNav").innerHTML = "X";

  } else {
    $(".subNav").slideUp("medium");
    $(".grayBG").fadeOut("medium");
    $('html, body').css({
      overflow: 'auto',
    });
    document.getElementById("mobileNav").innerHTML = "Menu";
  }
});
//old mobile nav code//
/*
$("#mobileNav").on("click", function() {
    if ( $(".subNav").first().is( ":hidden" ) ) {
      $(".subNav").slideDown("medium");
      $(".grayBG").fadeIn("medium");
      $('html, body').css({
        overflow: 'hidden',
    })
      document.getElementById("mobileNav").innerHTML = "X";
      
    } else {
      $(".subNav").slideUp("medium");
      $(".grayBG").fadeOut("medium");
      $('html, body').css({
        overflow: 'auto',  
    })
      document.getElementById("mobileNav").innerHTML = "Menu";
    }
  });

  function myFunction(x) {
    if (x.matches) {
      $(".subNav").slideUp("medium");
      $(".grayBG").fadeOut("medium");
      
      document.getElementById("mobileNav").innerHTML = "Menu";
    } 
  }
  var x = window.matchMedia("(min-width: 600px)")
  myFunction(x)
  x.addListener(myFunction)
*/

   //carousel //

  let currentIndex = 0;

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  function showSlide(index) {
    const wrapper = document.querySelector('.carousel-wrapper');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    if (index >= totalItems) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = totalItems - 1;
    } else {
      currentIndex = index;
    }

    const transformValue = -currentIndex * 100 + '%';
    wrapper.style.transform = 'translateX(' + transformValue + ')';
  }

 