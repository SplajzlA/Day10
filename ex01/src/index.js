// Only change the code below this line
var myPet = {
    species: "Jack Russel Terrier",
    name: "Milo",
    leg: 4,
    friends: ["Stanley" , "Tina"]
}
function myFunction (myObj){
    return myObj;
}
// Only change the code above this line
console.log(myFunction(myPet));
module.exports = { myPet, myFunction};