console.log("hello world");

function fizzBuzzTranslate(input) {
  console.log("q");
  return "1";
}

$("p").css("background-color");


(function($) {
  var defaults = {
    doublerange: false
  }
  $.fn.myrangeslider = function(options) {

  var config = $.extend({}, defaults, options);
  var doublerange = config.doublerange;
  initslider("rangeslider", "range", "range__button_1", "range__button_2");

function addButton(){
  var btn2 = document.createElement("button");
  btn2.id = "btn2";
  btn2.className = "range__button_2";
  if(doublerange){
  range.appendChild(btn2);
}
  else{
    console.log("error");
  }
}
addButton();
function initslider(sl, btw, btn1, input1, btn2) {
  var slider = document.getElementById(sl);
  var between = document.getElementById(btw); 
  var button1 = document.getElementById(btn1); 
  var inpt1 = document.getElementById(input1); 
/*     var button2 = document.getElementById(btn2);    */

  button1.onmousedown = function(evt) {       
      var sliderCoords = getCoords(slider);
      var betweenCoords = getCoords(between); 
      var buttonCoords1 = getCoords(button1);
/*         var buttonCoords2 = getCoords(button2); */
/*         var shiftX2 = evt.pageX - buttonCoords2.left;  */
      var shiftX1 = evt.pageX - buttonCoords1.left;
    
      document.onmousemove = function(evt) {
          var left1 = evt.pageX - shiftX1 - sliderCoords.left;
          var right1 = slider.offsetWidth - button1.offsetWidth;
          if (left1 < 0) left1 = 0;
          if (left1 > right1) left1 = right1;
          button1.style.marginLeft = left1 + 'px';                      
        
    /*       shiftX2 = evt.pageX - buttonCoords2.left; 
          var left2 = evt.pageX - shiftX2 - sliderCoords.left;
          var right2 = slider.offsetWidth - button2.offsetWidth;             */
/*              
                       if (left1 > left2)
            {
              between.style.width = (left1-left2) + 'px';
              between.style.marginLeft = left2 + 'px';
            }
                       else
            {
              between.style.width = (left2-left1) + 'px';
              between.style.marginLeft = left1 + 'px';
            } */
          
      };
      document.onmouseup = function() {
          document.onmousemove = document.onmouseup = null;
      };
      return false;
  };
  
/*  button2.onmousedown = function(evt) {       
      var sliderCoords = getCoords(slider);
      var betweenCoords = getCoords(between); 
      var buttonCoords1 = getCoords(button1);
      var buttonCoords2 = getCoords(button2);
      var shiftX2 = evt.pageX - buttonCoords2.left; 
      var shiftX1 = evt.pageX - buttonCoords1.left;
    
      document.onmousemove = function(evt) {
          var left2 = evt.pageX - shiftX2 - sliderCoords.left;
          var right2 = slider.offsetWidth - button2.offsetWidth;
          if (left2 < 0) left2 = 0;
          if (left2 > right2) left2 = right2;
          button2.style.marginLeft = left2 + 'px';                      
        
          shiftX1 = evt.pageX - buttonCoords1.left; 
          var left1 = evt.pageX - shiftX1 - sliderCoords.left;
          var right1 = slider.offsetWidth - button1.offsetWidth;            
           
          if (left1 > left2)
            {
              between.style.width = (left1-left2) + 'px';
              between.style.marginLeft = left2 + 'px';
            }
          else
            {
              between.style.width = (left2-left1) + 'px';
              between.style.marginLeft = left1 + 'px';
            }
          
      };
      document.onmouseup = function() {
          document.onmousemove = document.onmouseup = null;
      };
      return false;
  }; */
  
  button1.ondragstart = function() {
      return false;
  };
/*     button2.ondragstart = function() {
      return false;
  }; */

  function getCoords(elem) {
      var box = elem.getBoundingClientRect();
      return {
          top: box.top + pageYOffset,
          left: box.left + pageXOffset
      };
  }  
 
}
    // var node = document.createElement("div");
    // node.id = "id666b"
    // node.style.width = "400px";
    // node.className = "range__between"// Create a <li> node
    // document.getElementById("id666").append(node);

    // var button11 = document.createElement('button');
    // button11.id = "id6661"
    // button11.className = "range__button_1";
    // button11.style.marginLeft = "0px";
    // document.getElementById("id666b").append(button11);

    // var button22 = document.createElement('button');
    // button22.id = "id6662"
    // button22.className = "range__button_2"; 
    // document.getElementById("id666b").append(button22);

    
    // setTimeout(init2slider("id666", "id666b", "id6661", "id6662"), 0);
    // setTimeout(init2slider("rangeslider", "range", "range__button_1", "range__button_2"), 0);

    // function init2slider(idX, btwX, btn1X, btn2X) {
    //   var slider = document.getElementById(idX);
    //   var between = document.getElementById(btwX);
    //   var button1 = document.getElementById(btn1X);
    //   var button2 = document.getElementById(btn2X);

    //   button1.onmousedown = function(evt) {
    //     var sliderCoords = getCoords(slider);
    //     var betweenCoords = getCoords(between);
    //     var buttonCoords1 = getCoords(button1);
    //     var buttonCoords2 = getCoords(button2);
    //     var shiftX2 = evt.pageX - buttonCoords2.left;
    //     var shiftX1 = evt.pageX - buttonCoords1.left;

    //     document.onmousemove = function(evt) {
    //       var left1 = evt.pageX - shiftX1 - sliderCoords.left;
    //       var right1 = slider.offsetWidth - button1.offsetWidth;
    //       if (left1 < 0) left1 = 0;
    //       if (left1 > right1) left1 = right1;
    //       button1.style.marginLeft = left1 + "px";

    //       shiftX2 = evt.pageX - buttonCoords2.left;
    //       var left2 = evt.pageX - shiftX2 - sliderCoords.left;
    //       var right2 = slider.offsetWidth - button2.offsetWidth;

    //       if (left1 > left2) {
    //         between.style.width = left1 - left2 + "px";
    //         between.style.marginLeft = left2 + "px";
    //       } else {
    //         between.style.width = left2 - left1 + "px";
    //         between.style.marginLeft = left1 + "px";
    //       }
    //     };
    //     document.onmouseup = function() {
    //       document.onmousemove = document.onmouseup = null;
    //     };
    //     return false;
    //   };

    //   button2.onmousedown = function(evt) {
    //     var sliderCoords = getCoords(slider);
    //     var betweenCoords = getCoords(between);
    //     var buttonCoords1 = getCoords(button1);
    //     var buttonCoords2 = getCoords(button2);
    //     var shiftX2 = evt.pageX - buttonCoords2.left;
    //     var shiftX1 = evt.pageX - buttonCoords1.left;

    //     document.onmousemove = function(evt) {
    //       var left2 = evt.pageX - shiftX2 - sliderCoords.left;
    //       var right2 = slider.offsetWidth - button2.offsetWidth;
    //       if (left2 < 0) left2 = 0;
    //       if (left2 > right2) left2 = right2;
    //       button2.style.marginLeft = left2 + "px";

    //       shiftX1 = evt.pageX - buttonCoords1.left;
    //       var left1 = evt.pageX - shiftX1 - sliderCoords.left;
    //       var right1 = slider.offsetWidth - button1.offsetWidth;

    //       if (left1 > left2) {
    //         between.style.width = left1 - left2 + "px";
    //         between.style.marginLeft = left2 + "px";
    //       } else {
    //         between.style.width = left2 - left1 + "px";
    //         between.style.marginLeft = left1 + "px";
    //       }
    //     };
    //     document.onmouseup = function() {
    //       document.onmousemove = document.onmouseup = null;
    //     };
    //     return false;
    //   };

    //   button1.ondragstart = function() {
    //     return false;
    //   };
    //   button2.ondragstart = function() {
    //     return false;
    //   };

    //   function getCoords(elem) {
    //     var box = elem.getBoundingClientRect();
    //     return {
    //       top: box.top + pageYOffset,
    //       left: box.left + pageXOffset
    //     };
    //   }
    // }
    // var sliderElem = document.getElementById('slider');
    // var thumbElem = sliderElem.children[0];

    // thumbElem.onmousedown = function(e) {
    //   var thumbCoords = getCoords(thumbElem);
    //   var shiftX = e.pageX - thumbCoords.left;
    //   // shiftY здесь не нужен, слайдер двигается только по горизонтали

    //   var sliderCoords = getCoords(sliderElem);

    //   document.onmousemove = function(e) {
    //     //  вычесть координату родителя, т.к. position: relative
    //     var newLeft = e.pageX - shiftX - sliderCoords.left;

    //     // курсор ушёл вне слайдера
    //     if (newLeft < 0) {
    //       newLeft = 0;
    //     }
    //     var rightEdge = sliderElem.offsetWidth - thumbElem.offsetWidth;
    //     if (newLeft > rightEdge) {
    //       newLeft = rightEdge;
    //     }

    //     thumbElem.style.left = newLeft + 'px';
    //   }

    //   document.onmouseup = function() {
    //     document.onmousemove = document.onmouseup = null;
    //   };

    //   return false; // disable selection start (cursor change)
    // };

    // thumbElem.ondragstart = function() {
    //   return false;
    // };

    // function getCoords(elem) { // кроме IE8-
    //   var box = elem.getBoundingClientRect();

    //   return {
    //     top: box.top + pageYOffset,
    //     left: box.left + pageXOffset
    //   };

    // }
  };

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