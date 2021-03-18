// Only change the code below this line
var myChlotes = {
   hat: "Fedora",
   shirt: "Nike",
   shoes: "Converse"
}
function myFunction (myObj){
var hatValue = myObj.hat;
var shirtValue = myObj.shirt;
var shoesValue = myObj.shoes;
return { hatValue, shirtValue, shoesValue};
}
// Only change the code above this line
console.log(myFunction(myChlotes));
module.exports = myFunction( myChlotes );