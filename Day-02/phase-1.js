//basic
        //Reacting to model state
        scope.$watch("calculator.basic", function(newValue, oldValue){
            $("#txtBasic").val(calculator.basic);
        });
        //Reacting to UI actions
        $("#txtBasic").change(function(){
            scope.$apply(function(){
                scope.calculator.basic = this.value;
            }.bind(this));
        });
        
        //hra
        scope.$watch("calculator.hra", function(newValue, oldValue){
            $("#txtHra").val(calculator.hra);
        });
        //Reacting to UI actions
        $("#txtHra").change(function(){
            scope.$apply(function(){
                scope.calculator.hra = this.value;
            }.bind(this));
        });
        
        //da
        scope.$watch("calculator.da", function(newValue, oldValue){
            $("#txtDa").val(calculator.da);
        });
        //Reacting to UI actions
        $("#txtDa").change(function(){
            scope.$apply(function(){
                scope.calculator.da = this.value;
            }.bind(this));
        });
        
        
        //tax
        scope.$watch("calculator.tax", function(newValue, oldValue){
            $("#rangeTax").val(calculator.tax);
        });
        //Reacting to UI actions
        $("#rangeTax").change(function(){
            scope.$apply(function(){
                scope.calculator.tax = this.value;
            }.bind(this));
        });

 //tax 'span'
        scope.$watch("calculator.tax", function(newValue, oldValue){
            $("#spanTax").html(calculator.tax);
        });
        
 //salary
        scope.$watch("calculator.salary", function(newValue, oldValue){
            $("#divResult").html(calculator.salary);
        });

   //button
        $("#btnCalculate").click(function(){
            scope.$apply(function(){
                calculator.calculate();
            })
        });