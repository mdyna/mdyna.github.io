(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });


  // Fetch github releases API and render download buttons
  $(document).ready(
    $.get('https://api.github.com/repos/psybork/dyna/releases', function (data) {
      function getExtensionName(name) {
        var split = name.split('.');
        return split[split.length - 1];
      }

      function isExtensionValid(extension) {
        var SUPPORTED_EXTENSIONS = ['deb', 'exe', 'AppImage'];
        return SUPPORTED_EXTENSIONS.indexOf(extension) !== -1;
      }

      function buttonHTML(link, name, icon) {
        var buttonMarkup =
        '<a class="btn btn-xl btn-outline-light" href="' + link + '">'
        + name + ' ' + icon
      + '</a>'
      return buttonMarkup;
      }

      if (data && data[0]) {
        var version = data[0].tag_name;
        var releases = data[0].assets;


        var newHTML = '<h3>Download now<br>' + '<i class="fas fa-download mr-2"></i>' + version + '</h3>';
        newHTML += '<div>';
        for (var i = 0; i < releases.length; i ++) {
          var release = releases[i];
          var releaseExtension = getExtensionName(release.name);
          var releaseLink = release.browser_download_url;
          var releaseIcon = releaseExtension === 'exe' ? '<i class="fab fa-windows"></i>'  : '<i class="fab fa-linux"></i>';

          if (isExtensionValid(releaseExtension)) {
            newHTML += buttonHTML(releaseLink, release.name, releaseIcon);
          }
        }
        newHTML += '</div>';

        $('.download-buttons').html(newHTML);
      }
    })
  )

  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 80
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Modal popup$(function () {
  $('.portfolio-item').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#username',
    modal: true
  });
  $(document).on('click', '.portfolio-modal-dismiss', function(e) {
    e.preventDefault();
    $.magnificPopup.close();
  });

  // Floating label headings for the contact form
  $(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
      $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
      $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
      $(this).removeClass("floating-label-form-group-with-focus");
    });
  });

})(jQuery); // End of use strict
