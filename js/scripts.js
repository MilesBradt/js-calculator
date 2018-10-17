// Business Logic

// Write a function that calculates Body Mass Index
var bmiIndex = function(mass, height) {
  return mass / (height**2) * 703;
};
//Write a function that converts temperature between celsius and fahrenheit
var celsuisIndex = function(celsuis) {
  return (celsuis * 9/5) + 32;
};

var fahrenheitIndex = function(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
};

//Write functions to be used by a cooking app that convert between units

var gallonstoLiter = function(gallons) {
  return (gallons * 3.785);
};

var milesToKilometers = function(miles) {
  return (miles * 1.60934);
};



// User interface
$(document).ready(function() {
  $(".bmi").submit(function(event){
    event.preventDefault();
    var mass = parseInt($("#userMass").val());
    var height = parseInt($("#userHeight").val());
    // alert(bmiIndex(mass, height));
    $('.output').text("Your BMI is " + bmiIndex(mass, height));
  });

   $(".celsius").submit(function(event){
     event.preventDefault();
     var celsius = parseInt($("#userCelsius").val());
     $('.outputCelsius').text("The temperature is " + celsuisIndex(celsius)) + " in Fahrenheit";
   });

   $(".fahrenheit").submit(function(event){
     event.preventDefault();
     var fahrenheit = parseInt($("#userFahrenheit").val());
     $('.outputFahrenheit').text("The temperature is " + fahrenheitIndex(fahrenheit)) + " in Celsius";
   });

  $(".liters").submit(function(event){
    event.preventDefault();
    var inputGallon = parseInt($("#userGallon").val());
    $(".outputGallon").text(gallonstoLiter(inputGallon) + " in Liters")
  });

  $(".kilometers").submit(function(event){
    event.preventDefault();
    var inputMile = parseInt($("#userKilometers").val());
    $('.outputKilometers').text(milesToKilometers(inputMile) + " in kilometers")
  });
});
