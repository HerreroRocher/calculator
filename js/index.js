$(document).ready(function(){
    var display = ""
    var a, b, operator, result = "", previousdisplay = "", operand = ""

    $(".number").click(function(){
        console.log("number clicked");        
        var text = $(this).text();
        operand +=  text
        display = operand
        updatedisplay();
    })

    $("#clear").click(function(){
        console.log("clear clicked");        
        previousdisplay = display
        display = "0"
        operand = ""
        updatedisplay();
    })

    $(".operator").click(function(){
        operator = this.id;
        console.log(operator + " clicked");  
        a = operand
        operand = ""
        updatedisplay(200);
    })
    
    $("#equals").click(function(){
        console.log("equals clicked");
        b = operand
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
        updatedisplay(400);
    })
 
    
    $("#answer").click(function(){
        console.log("answer clicked");        
        display = previousdisplay
        updatedisplay();
    })
    
        $("#cubed").click(function(){
        console.log("cube root clicked");        
        display = Math.cbrt(display)
        updatedisplay(400);
    })
  
    $("#poweroftwo").click(function(){
        console.log("square clicked");        
        display = Math.pow(display, 2)
        updatedisplay(300);
    })
  
  
    $("#powerofthree").click(function(){
        console.log("cube clicked");        
        display = Math.pow(display, 3)
        updatedisplay(300);
    })
   
    function updatedisplay(delay){
        console.log("display = " + display);
        if (typeof delay === "undefined"){
            $("#display").text(display);
        }
        else{
            console.log("Delay = " + delay)
            $("#display").text("");
            setTimeout(function(){
                $("#display").text(display);
            },delay)

        }


    }
    
})