$(document).ready(function(){
    var display = ""
    var a, b, operator, result = "", previousdisplay = ""

    $(".number").click(function(){
        console.log("number clicked");        
        var text = $(this).text();
        display +=  text
        updatedisplay();
    })

    $("#clear").click(function(){
        console.log("clear clicked");        
        previousdisplay = display
        display = ""
        updatedisplay();
    })

    $(".operator").click(function(){
        operator = this.id;
        console.log(operator + " clicked");  
        a = display
        display = ""
        updatedisplay();
    })
    
    $("#equals").click(function(){
        console.log("equals clicked");
        b = display
        switch(operator){
            case "plus":
            result = Number(a) + Number(b)
            break;

            case "multiply":
            result = Number(a) * Number(b)
            break;

            case "divide":
            result = Number(a) / Number(b)
            break;

            case "minus":
            result = Number(a) - Number(b)
            break;

            case "percent":
            result = (Number(a)/100) * Number(b)
            break;
            
            case "powerofy":
            result = Math.pow(Number(a), Number(b))
            
        }
         display = previousdisplay = result  
         updatedisplay();
    })

    $("#invert").click(function(){
        console.log("invert clicked");        
        display =  -display
        updatedisplay();
    })

    $("#square").click(function(){
        console.log("square root clicked");        
        display = Math.sqrt(display)
        updatedisplay();
    })
 
    
    $("#answer").click(function(){
        console.log("answer clicked");        
        display = previousdisplay
        updatedisplay();
    })
    
        $("#cubed").click(function(){
        console.log("cube root clicked");        
        display = Math.cbrt(display)
        updatedisplay();
    })
  
    $("#poweroftwo").click(function(){
        console.log("square clicked");        
        display = Math.pow(display, 2)
        updatedisplay();
    })
  
  
    $("#powerofthree").click(function(){
        console.log("cube clicked");        
        display = Math.pow(display, 3)
        updatedisplay();
    })
   
    function updatedisplay(){
        console.log("display = " + display);

       $("#display").text(display);

    }
    
})