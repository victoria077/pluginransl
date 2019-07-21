describe("FizzBuzz", function(){
    it ("should return the string 1 for number 1", function(){
        expect(fizzBuzzTranslate(1)).toEqual("1");
    })
})


it("Should find jQuery", function(){
    expect($).not.toBeNull();
})

it("Should content input", function(){
    setFixtures('<div id="rangeslider"></div>');
    var range = $("#rangeslider");
    range.myrangeslider();
    expect(range).toContainElement('input');
})

it("Should content output", function(){
    setFixtures('<div id="rangeslider"></div>');
    var range = $("#rangeslider");
    range.myrangeslider();
    expect(range).toContainElement('output');
})

