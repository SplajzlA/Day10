// Only change the code below this line
var myFood = {
    vegetable: "carrot",
    fruit: "orange",
    drink: "water"
 }
 function myFunction (myObj){
 var vegetableValue = myObj["vegetable"];
 var fruitValue = myObj["fruit"];
 var drinkValue = myObj["drink"];
 return {vegetableValue, fruitValue, drinkValue};
 }
 // Only change the code above this line
 console.log(myFunction(myFood));
 module.exports = myFunction(myFood);