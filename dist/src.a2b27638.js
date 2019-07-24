// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/index.js":[function(require,module,exports) {
console.log("hello world");

function fizzBuzzTranslate(input) {
  console.log("q");
  return "1";
}

$("p").css("background-color");

(function ($) {
  $.fn.myrangeslider = function () {
    initslider("rangeslider", "range", "range__button_1", "range__button_2");

    function initslider(sl, btw, btn1, input1, btn2) {
      var slider = document.getElementById(sl);
      var between = document.getElementById(btw);
      var button1 = document.getElementById(btn1);
      var inpt1 = document.getElementById(input1);
      /*     var button2 = document.getElementById(btn2);    */

      button1.onmousedown = function (evt) {
        var sliderCoords = getCoords(slider);
        var betweenCoords = getCoords(between);
        var buttonCoords1 = getCoords(button1);
        /*         var buttonCoords2 = getCoords(button2); */

        /*         var shiftX2 = evt.pageX - buttonCoords2.left;  */

        var shiftX1 = evt.pageX - buttonCoords1.left;

        document.onmousemove = function (evt) {
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

        document.onmouseup = function () {
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


      button1.ondragstart = function () {
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
    } // var node = document.createElement("div");
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

  }; // var defaults= {
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
},{}],"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56767" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map