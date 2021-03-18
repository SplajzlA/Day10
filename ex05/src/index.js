// Create school object here
var school = {
    name: "Arena",
    location: "Sarajevo",
    established: 2020
}
// End of school object
function myFunction (name){
// Only change the code below this line
school.name = "Paragon";
return school;
// Only change the code above this line
}
console.log(myFunction("Paragon"));
myFunction ("Paragon");
module.exports = { school, myFunction};