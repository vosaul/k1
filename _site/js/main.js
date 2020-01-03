$(document).ready(function() {
  // left sidebar switcher
  $(".choice").click(function() {
    var choice = $(this).data("type");
    var target = ".post_" + choice;
    $(".choice").removeClass("active");
    $(this).addClass("active");
    $(".pal").hide();
    $(target).show();
    console.log(target);
  });
/*
     $(".tipue_search_icon").click(function() {
      console.log(".tipue_search_icon");
      $(".tipue_search_close").toggleClass("hidden");
      $(".tipue_search_right").toggleClass("hidden");
      $(".tipue_search_icon").toggleClass("hidden");
      $(".search_box").toggleClass("invisible");
    });
    
   $(".tipue_search_close").click(function() {
      console.log(".tipue_search_close");
      $(".tipue_search_close").toggleClass("hidden");
      $(".tipue_search_right").toggleClass("hidden");
      $(".tipue_search_icon").toggleClass("hidden");
      $(".search_box").toggleClass("invisible");
    });
*/
  // right sidebar scroll position indicftor
  // Cache selectors
  var lastId,
    top_header = $(".top_header");
  (leftMenu = $("#page_nav")),
    (leftMenuHeight = top_header.outerHeight() + 1),
    // All list items
    (menuItems = leftMenu.find(".in_link")),
    // Anchors corresponding to menu items
    (scrollItems = menuItems.map(function() {
      var item = $($(this).attr("href"));
      //console.log(item);
      if (item.length) {
        return item;
      }
    }));
  // Bind click handler to menu items
  // so we can get a fancy scroll animation
  menuItems.click(function(e) {
    var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top - leftMenuHeight + 1;
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
    var fromTop = $(this).scrollTop() + leftMenuHeight;
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
        .end()
        .filter("a[href='#" + id + "']")
        .addClass("active");
    }
  });
});
