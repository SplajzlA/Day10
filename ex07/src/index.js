function myFunction (propName) {
// Only change code below this line
var lion = {
    name:"Simba",
    legs:4,
    tales:1,
    roar: "roar-roar"
}

delete lion ["roar"];
return lion;
// Only change code above this line
}
console.log(myFunction("roar"));
myFunction ("roar");
module.exports = myFunction;