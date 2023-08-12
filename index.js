

// mobile nav show/hide //

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

  //header hide on scroll //
  




  
    var prevScrollPos = window.pageYOffset;
    var header = document.getElementById("header");

    window.onscroll = function() {
      if (window.innerWidth > 600){
      var currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        header.style.top = "0";
      } else {
        header.style.top = "-65px";
      }
      prevScrollPos = currentScrollPos;
    }
    };

    /*
    if (window.scrollY === 0)

    if (window.innerWidth > 600)
    */