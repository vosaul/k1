$(document).ready(function() {
  // left sidebar switcher
  $(".choice").click(function() {
    var choice = $(this).data("type");
    var target = ".post_" + choice;
    $(".choice").removeClass("active");
    $(this).addClass("active");
    $(".pal").hide();
    $(target).show();
  });

  $(".post_toggler").click(function() {
    $(".post_toggler span").toggle();
    $(".filters").toggle();
    $(".post_all").toggle();
    $(".oal").hide();
  });

  $(".page_toggler").click(function() {
    $(".page_toggler span").toggle();
    $(".page_nav").toggle();
  });

  $(".in_link").click(function() {
    $(".page_toggler span").toggle();
    $(".page_nav").toggle();
  });
/*
  var myElement = document.getElementById('search_box');
  if (window.addEventListener) {
    // Normal browsers
    myElement.addEventListener('DOMSubtreeModified', contentChanged, false);
  } else
    if (window.attachEvent) {
      // IE
      myElement.attachEvent('DOMSubtreeModified', contentChanged);
    }

  function contentChanged() {
    // this function will run each time the content of the DIV changes
  }


     $(".tipue_search_icon").click(function() {
      $(".tipue_search_close").toggleClass("hidden");
      $(".tipue_search_right").toggleClass("hidden");
      $(".tipue_search_icon").toggleClass("hidden");
      $(".search_box").toggleClass("invisible");
    });
    
   $(".tipue_search_close").click(function() {
      $(".tipue_search_close").toggleClass("hidden");
      $(".tipue_search_right").toggleClass("hidden");
      $(".tipue_search_icon").toggleClass("hidden");
      $(".search_box").toggleClass("invisible");
    });
*/
  // right sidebar scroll position indictor
  // Cache selectors
  var lastId,
    top_header = $(".top_header");
  (rightMenu = $("#page_nav")),
    (rightMenuHeight = top_header.outerHeight() + 1),
    // All list items
    (menuItems = rightMenu.find("a")),
    // Anchors corresponding to menu items
    (scrollItems = menuItems.map(function() {
      var item = $($(this).attr("href"));
      if (item.length) {
        return item;
      } menuItems
    }));
  // Bind click handler to menu items
  // so we can get a fancy scroll animation
  menuItems.click(function(e) {
    var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top - rightMenuHeight + 1;
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: offsetTop
        },
        850
      );
    e.preventDefault();
  });
  // Bind to scroll
  $(window).scroll(function() {
    // Get container scroll position
    var fromTop = $(this).scrollTop() + rightMenuHeight;
    // Get id of current scroll item
    var cur = scrollItems.map(function() {
      if ($(this).offset().top < fromTop) return this;
    });
    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";
    if (lastId !== id) {
      lastId = id;
      // Set/remove active class
      menuItems
      .removeClass("active")
      .filter("a[href='#" + id + "']")
      .addClass("active");
    }
  });
});
