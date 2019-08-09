// // describe("FizzBuzz", function(){
// //     it ("should return the string 1 for number 1", function(){
// //         expect(fizzBuzzTranslate(1)).toEqual("1");
// //     })
// // })


// it("Should find jQuery", function(){
//     expect($).not.toBeNull();
// })

// // it("Should content input", function(){
// //     setFixtures('<div id="rangeslider"></div>');
// //     var range = $("#rangeslider");
// //     range.myrangeslider();
// //     expect(range).toContainElement('input');
// // })

// // it("Should content output", function(){
// //     setFixtures('<div id="rangeslider"></div>');
// //     var range = $("#rangeslider");
// //     range.myrangeslider();
// //     expect(range).toContainElement('output');
// // })


// // it("Check attributes", function(){
// //     setFixtures('<input id="inputsl"></input>');
// //     var input = $("#inputsl");
// //     input.myrangeslider();
// //     expect(input).toHaveAttr('value');
// //     expect(input).toHaveAttr('max');
// //     expect(input).toHaveAttr('min');
// //     expect(input).toHaveAttr('step');
// //     expect(input).toHaveAttr('type', 'range');
// // })



// // it("Should content input", function(){
// //     setFixtures('<div id="rangeslider"></div>');
// //     var range = $("#ranges;");
// //     range.myrangeslider();
// //     expect(range).toContainElement('input');
// // })


// it("Should content init function", function(){
//     var func = function initslider(){};
//     expect(func).not.toBeNull();
// })

// // it("Should content addbutton function", function(){
// //     var addbutton = function addbutton(){};
// //     var range = $("#rangeslider");
// //     addbutton.myrangeslider();
// //     expect(addbutton).not.toBeNull();
// // })

// it("focuses the search input field when the page loads", function() {
//     setFixtures("<div id='range'></div>");
//     var range = $("#range");
//     range.myrangeslider();
//     expect(range).not.toBeNull();;
//     // expect(range).toHaveClass('range__between');
//   });

describe("An interactive slider", function() {
    // it("'s text area should not contain any text before pressing the button", function() {
    //     expect(Page.textArea).toBeEmpty();
    // });

    // it("should contain a text area div", function() {
    //     expect(Page.textArea).toBe('div#textArea');
    // });
    beforeEach(function() {
        setFixtures('<div id="slider__toggle" class="div">X</div>');
    });

    it("should append a div containing a random string to the text area when clicking the button", function() {
        var clickEvent = spyOnEvent($('#slider__toggle'), 'click');
        $('#slider__toggle').click();
        expect('click').toHaveBeenTriggeredOn("#slider__toggle");
       
        //expect(clickEvent).toHaveBeenTriggered();()

        // expect($('div.addedText:last')).not.toBeEmpty();
    });
});


// describe('Testing the functionality, this is the checklist', ()=>{
//     it('should add an item', ()=>{
//       let todo = new ToDo();
//       let item = {
//        title: "get milk",
//        complete: false
//      }
//       const done = todo.addTodo(item)
//       expect(todo.getItems().length).toBe(1);
//     })
//   })