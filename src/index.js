console.log('hello world')

function fizzBuzzTranslate(input){
    return "1";
}

$("p").css("background-color");


(function($){
    var defaults= {
        min: 11,
        max: 100,
        step: 10,
        value: " "
    };
    $.fn.myrangeslider = function(options){
        var config= $.extend({}, defaults, options);
        this.append('<input id="inputsl"/>');
        this.append('<output id="output"/>');
        $("input").attr("type","range");
        $("input").attr("min",config.min);
        $("input").attr("max",config.max);
        $("input").attr("step",config.step);
        $("input").attr("value", config.value);
        $("#output").html($("input").val());
        $("input").on('input', function(){
            console.log(inputsl.value);
            output.value = inputsl.value;
        })
        return this; }
})(jQuery);