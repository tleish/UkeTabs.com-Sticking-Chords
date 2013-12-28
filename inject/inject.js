(function( $ ) {

  var ukutabs_sticky_chords = (function () {
    var $area_for_scroll;
    var $chord_div;
    var $floating_chord_div;

    var init = function(){
      $area_for_scroll = $("#area_for_scroll");
      $chord_div = $area_for_scroll.find(".chord").parent();
      create_floating_div();
      show_hide_div();
    }

    var create_floating_div = function(){
      $floating_chord_div = $chord_div.clone();
      $floating_chord_div.addClass("sticky-chords");
      $area_for_scroll.append($floating_chord_div);
    }

    var chord_div_offset_top = function(){
      return $chord_div.offset()["top"];
    }

    var content_bottom = function(){
      var $cont = $("#cont");
      var top = $cont.offset()["top"];
      var height = $cont.height();
      return top + height;
    }

    var show_hide_div = function(){
      var top = chord_div_offset_top();
      var bottom = content_bottom() - $floating_chord_div.height();
      $floating_chord_div.hide();
      window_scroll_binding(top, bottom);
    }

    var window_scroll_binding = function(top, bottom){
      $(window).bind('scroll', function() {
        var scroll_top = $(window).scrollTop();
        if (scroll_top > top && scroll_top < bottom) {
          $floating_chord_div.show();
        } else {
          $floating_chord_div.hide();
        }
      });
    }

    return {
      init: init
    };
  })();

  $( document ).ready(function() {
    ukutabs_sticky_chords.init();
  });

})( jQuery );