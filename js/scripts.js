// var userMass = parseInt(prompt("Enter your weight(lbs): "));
// var userHeight = parseInt(prompt("Enter your height(inches): "));


var bmiIndex = function(mass, height) {
  return mass / (height**2) * 703;
};


$(document).ready(function() {
  $(".input-group").submit(function(event){
    event.preventDefault();
    var mass = parseInt($("#userMass").val());
    var height = parseInt($("#userHeight").val());
    alert(bmiIndex(mass, height));
  });
});
