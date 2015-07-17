/*
  ...........YOUR MISSION...........

  Make me a sandwich.
  
  1. Create a Sandwich object.
  2. Create 6 keys on the object all defaulted to a value of false
     a. pickle: false
     b. lettuce: false
     c. tomato: false
     d. ketchup: false
     e. mustard: false
     f. mayo: false
  3. Create different functions where each one can change the value of only one of the keys on a Sandwich object to "true".
  4. Create a function named "makeMeASandwich".
  5. That function should take 6 arguments - one for each condiment on the sandwich.
  6. If any of those 6 argument values are true, put that condiment on the sandwich.
  7. Write to the document something like this...
    "My sandwich has pickle, ketchup, mustard on it"
*/

var picklesP = prompt("Would you like pickles?");
var lettuceP = prompt("Lettuce?");
var tomatoP = prompt("Tomato?");
var ketchupP = prompt("Ketchup?");
var mustardP = prompt("Mustard?");
var mayoP = prompt("Mayo?");

var onSandwich = [];

var sandwich = {
pickle: false,
lettuce: false,
tomato: false,
ketchup: false,
mustard: false,
mayo: false
};

  function pickles() {
      sandwich.pickle = true; 
  };

  function lettuce () {
      sandwich.lettuce = true; 
  };

  function tomato () {
      sandwich.tomato = true; 
  };

  function ketchup () {
      sandwich.ketchup = true; 
  };

  function mustard () {
      sandwich.mustard = true; 
  };

  function mayo () {
      sandwich.mayo = true;  
  };


function makeMeASandwich (Pickle, Lettuce, Tomato, Ketchup, Mustard, Mayo) {
  
    if (Pickle.toLowerCase() === "yes") {
      pickles();
      onSandwich.push("pickles");
    };
    if (Lettuce.toLowerCase() === "yes") {
      lettuce();
      onSandwich.push("lettuce");
    };
    if (Tomato.toLowerCase() === "yes") {
      tomato();
      onSandwich.push("tomato");
    };
    if (Ketchup.toLowerCase() === "yes") {
      ketchup();
      onSandwich.push("ketchup");
    };
    if (Mustard.toLowerCase() === "yes") {
      mustard();
      onSandwich.push("mustard");
    };
    if (Mayo.toLowerCase() === "yes") {
      mayo();
      onSandwich.push("mayo");
    };
    
    return sandwich;
 };

var order = makeMeASandwich(picklesP, lettuceP, tomatoP, ketchupP, mustardP, mayoP);
var ingredients = onSandwich.join(", ");
var sandwichEl = document.getElementById("sandwich")
sandwichEl.innerHTML = ("My sandwich has " + ingredients + ".");




