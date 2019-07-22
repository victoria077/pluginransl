console.log('hello world')

function fizzBuzzTranslate(input){
    console.log('q');
    return "1";
}

$("p").css("background-color");



(function($){
   $.fn.myrangeslider = function(){
    var sliderElem = document.getElementById('slider');
    var thumbElem = sliderElem.children[0];

    thumbElem.onmousedown = function(e) {
      var thumbCoords = getCoords(thumbElem);
      var shiftX = e.pageX - thumbCoords.left;
      // shiftY здесь не нужен, слайдер двигается только по горизонтали

      var sliderCoords = getCoords(sliderElem);

      document.onmousemove = function(e) {
        //  вычесть координату родителя, т.к. position: relative
        var newLeft = e.pageX - shiftX - sliderCoords.left;

        // курсор ушёл вне слайдера
        if (newLeft < 0) {
          newLeft = 0;
        }
        var rightEdge = sliderElem.offsetWidth - thumbElem.offsetWidth;
        if (newLeft > rightEdge) {
          newLeft = rightEdge;
        }

        thumbElem.style.left = newLeft + 'px';
      }

      document.onmouseup = function() {
        document.onmousemove = document.onmouseup = null;
      };

      return false; // disable selection start (cursor change)
    };

    thumbElem.ondragstart = function() {
      return false;
    };

    function getCoords(elem) { // кроме IE8-
      var box = elem.getBoundingClientRect();

      return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
      };

    }
   }




    // var defaults= {
    //     min: 11,
    //     max: 100,
    //     step: 10,
    //     value: " "
    // };
    // $.fn.myrangeslider = function(options){
    //     var config= $.extend({}, defaults, options);
    //     this.append('<input id="inputsl"/>');
    //     this.append('<output id="output"/>');
    //     $("input").attr("type","range");
    //     $("input").attr("min",config.min);
    //     $("input").attr("max",config.max);
    //     $("input").attr("step",config.step);
    //     $("input").attr("value", config.value);
    //     $("#output").html($("input").val());
    //     $("input").on('input', function(){
    //         console.log(inputsl.value);
    //         output.value = inputsl.value;
    //     })
    //     return this; }
})(jQuery);