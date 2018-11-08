console.log("Javascript loaded!");
$(function(){
  console.log("JQuery loaded!");
});

// Newsletter hiding
$(function() {
  $('.close-btn').click(function() {
    $('.footer').addClass("footer-top-padding");
    $('.newsletter-form').hide();
  });
});

// Hamburger toggling and sidenav opening
$(function() {
  var el = $('#hamburger');
  $(el).click(function() {
    if(!el.hasClass('is-active')) {
      el.addClass('is-active');
      $('body').css({ "background-color": "rgba(0,0,0,0.4)", "overflow": "hidden" });
      $('.nav-container').css({ "left" : "0" });
    }
    else {
      el.removeClass('is-active');
      $('body').css({ "background-color": "rgba(0,0,0,0)", "overflow": "unset" });
      $('.nav-container').css({ "left" : "-15em" });
    }
  });
});

// Account sidenav opening
$(function() {
  var el = $('.account');
  $(el).click(function() {
    if(!el.hasClass('is-active')) {
      el.addClass('is-active');
      $('body').css({ "background-color": "rgba(0,0,0,0.4)", "overflow": "hidden" });
      $('.login-container').css({ "right" : "0" });
    }
    else {
      el.removeClass('is-active');
      $('body').css({ "background-color": "rgba(0,0,0,0)", "overflow": "unset" });
      $('.login-container').css({ "right" : "-15em" });
    }
  });
});

// Sticky footer switch
window.addEventListener('load', function(){
  // console.log(document.body.clientHeight);
  // console.log(window.innerHeight);
  $('.nav-container').css("height", window.innerHeight);
  if(document.body.clientHeight < window.innerHeight) {
    $('footer').addClass("sticky-footer");
  }
});
