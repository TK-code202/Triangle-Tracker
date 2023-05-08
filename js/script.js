//User Interface Logic 
$(document).ready(function() {
    $(".formOne").submit(function(event) {
        const inputOne = parseFloat($("input#length1").val());
        const inputTwo = parseFloat($("input#length2").val());
        const inputThree = parseFloat($("input#length3").val());

        if ((inputOne + inputTwo <= inputThree) || (inputTwo + inputThree  <= inputOne) || (inputOne + inputThree  <= inputTwo) ){
            $(".formOne").hide();
            $(".triangleFour").show(1000);
        } else if (inputOne === inputTwo && inputTwo === inputThree && inputOne === inputThree ) {
            $(".formOne").hide();
            $(".triangleOne").show(1000);
        } else if ((inputOne === inputTwo) || (inputTwo === inputThree) || (inputOne === inputThree) ) {
            $(".formOne").hide();
            $(".triangleTwo").show(1000);
        }  else if ((inputOne != inputTwo) || (inputTwo != inputThree) || (inputOne != inputThree) ) {
            $(".formOne").hide();
            $(".triangleThree").show(1000);
        } 

        $(".dimensions").show();
        $(".number1").text(inputOne);
        $(".number2").text(inputTwo);
        $(".number3").text(inputThree);
        event.preventDefault();
    });
});