$(document).ready(function() {
  // left sidebar switcher
  $(".choice").click(function() {
    var choice = $(this).data("type");
    var target = ".post_" + choice;
    console.log(target);
    $(".choice").removeClass("active");
    $(this).addClass("active");
    $(".pal").hide();
    $(target).show();
  });

  $(".post_toggler").click(function() {
    $(this).toggleClass("change");
    $(".filters").toggle();
    if ($(".page_nav:visible").length) {
      $(".page_toggler span").toggle();
      $(".page_nav").toggle();
      $(".page_toggler").toggleClass("change");
    };
    $(".left_sidebar").toggle();
    $(".post_all, .filters").toggle();
  });

  $(".page_toggler").click(function() {
    if ($(".filters:visible").length) {
      $(".triangle::after").toggle();
      $(".filters, .pal").hide();
      $(".post_toggler").toggleClass("change");
    };
    $(this).toggleClass("change");
    $(".page_nav").toggle();
  });

  $(".in_link").click(function() {
    $(".page_toggler span").toggle();
    if (screen.width < 1000) {
    $(".page_nav").toggle();
    };
  });

  $(".search_toggler").click(function() {
    $(".search_toggler").toggle();
    $(".tipue_search_right ").toggle();
  });

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
