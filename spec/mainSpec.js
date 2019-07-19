describe("FizzBuzz", function(){
    it ("should return the string 1 for number 1", function(){
        expect(fizzBuzzTranslate(1)).toEqual("1");
    })
})


it("Should find jQuery", function(){
    expect($).not.toBeNull();
})

it("Should display a nice message when no comments", function(){
    setFixtures("<div id='comments'></div>");
    var comments = $("#comments");
    comments.jQComments();
    expect(comments.html()).toBe("Be the first one...")
})