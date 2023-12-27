function loadSlideCollapse(){
  // footer slideup and slidedown
  if(window.innerWidth < 990){
    var slideCollapse = document.getElementsByClassName("slidecollapse");
    var i;
    for (i = 0; i < slideCollapse.length; i++) {
      slideCollapse[i].addEventListener("click", function() {
        var content = this.nextElementSibling;
        
        // Close all other sections
        for (var j = 0; j < slideCollapse.length; j++) {
          if (slideCollapse[j] !== this) {
            slideCollapse[j].classList.remove("active");
            slideCollapse[j].nextElementSibling.style.display = "none";
          }
        }

        this.classList.toggle("active");

        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }
  }
}
$(document).ready(function(){
  //  header and footer load
  loadHeaderAndFooter();

  // header megamenu
  if(window.innerWidth < 999){
    $('.nav-link').click(function() {
        $('.dropdown-menu').slideToggle();
    });
    }else{
        $('.dropdown-menu').show();
    }

    // slick slider
    $('.logoSlider').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      arrows: false,
      dots: false,
      speed: 3000,
      pauseOnHover: false,
      cssEase:'linear',
      responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 4
        }
      }, {
        breakpoint: 520,
        settings: {
          slidesToShow: 3
        }
      }]
    });
})
// Function to load the header content
function loadHeader() {
  $.ajax({
      url: "header.html",
      type: "GET",
      success: function(data) {
          $("#header").html(data);
      }
  });
}
// Function to load the footer content
function loadFooter() {
  $.ajax({
      url: "footer.html",
      type: "GET",
      success: function(data) {
          $("#footer").html(data);
      }
  });
}
// Function to load the header and footer
function loadHeaderAndFooter() {
  loadHeader();
  loadFooter();
}