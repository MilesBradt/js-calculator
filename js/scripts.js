
// User input without jquery

// var userMass = parseInt(prompt("Enter your weight(lbs): "));
// var userHeight = parseInt(prompt("Enter your height(inches): "));

// Write a function that calculates Body Mass Index
var bmiIndex = function(mass, height) {
  return mass / (height**2) * 703;
};

//Write a function that converts temperature between celsius and fahrenheit



//Write functions to be used by a cooking app that convert between units



$(document).ready(function() {
  $(".input-group").submit(function(event){
    event.preventDefault();
    var mass = parseInt($("#userMass").val());
    var height = parseInt($("#userHeight").val());
    // alert(bmiIndex(mass, height));
    $('.output').text("Your BMI is " + bmiIndex(mass, height));
  });
});
