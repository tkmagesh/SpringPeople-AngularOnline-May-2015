describe("my app", function(){
    beforeEach(function(){
        browser.get('index.html#/greet');
    });
    it("should have the name textbox emtpy", function(){
        var txtName = element(by.model("name"));
        var contents = txtName.getAttribute("value");
        expect(contents).toBe('');
    });
    it("should have the greetMsg div emtpy", function(){
        var divGreetMsg = element(by.binding("greetMsg"));
        var contents = divGreetMsg.getText();
        expect(contents).toBe('');
    });
    it("Should greet the user when greeted", function(){
        element(by.model("name")).sendKeys("Magesh");
        element(by.buttonText("Greet")).click();
        var msg = element(by.binding("greetMsg")).getText();
        expect(msg).toBe("Hi Magesh, Have a nice day!");
    });
});
