var BMI = function(weight, height) {
    var inputtedHeight =height * height; 
    return weight/inputtedHeight
    }
    var weight = parseInt(prompt("Enter your weight in kgs"));
    var height = parseFloat(prompt("Enter your height in meters"));
    var result = BMI( weight, height)
    alert ("Your BMI is " + result);