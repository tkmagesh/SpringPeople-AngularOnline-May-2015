describe("greetController", function(){

    beforeEach(module("myApp.greet"));

    it("Should have the name initialized to an empty string", inject(function($controller){
        var scope = {};
        $controller("greetController", {$scope : scope});

        expect(scope.name).toBe('');

    }));
     it("Should have the greetMsg initialized to an empty string", inject(function($controller){
        var scope = {};
        $controller("greetController", {$scope : scope});

        expect(scope.greetMsg).toBe('');

    }));
     it("Should populate the greetMsg when greeted", inject(function($controller){
        //Arrange
         var scope = {};
        var expectedResult = "Hi Magesh, Have a nice day!";

        //Act
        $controller("greetController", {$scope : scope});
        scope.name = "Magesh";
        scope.greet();

        //Assert
        expect(scope.greetMsg).toBe(expectedResult);

    }));
})
