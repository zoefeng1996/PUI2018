

function cheetah(name, age) {
  this.name = name;
  this.age = age;
  this.type = “cheetah”;
  this.image = “cheetah.jpg”;
}

function leopard(name, age) {
  this.name = name;
  this.age = age;
  this.type = “leopard”;
  this.image = “leopard.jpg”;
}

function lion(name, age) {
  this.name = name;
  this.age = age;
  this.type = “lion”;
  this.image = “lion.jpg”;
}


var animals = [new cheetah(), new leopard(), new lion()];
var names = ["Aa", "Bb", "Cc", "Dd", "Ee", "Ff", "Gg", "Hh", "Ii"];

function getRandomIndex(maxIndex) {
  return Math.floor(Math.random() * maxIndex);
}

function generateRandomAnimal() {
  var randomIdx = getRandomIndex(animals.length);
  var randomAnimal = animals[randomIdx];

  if (randomAnimal instanceof cheetah) 
  {
    return new cheetah(generateRandomName(), generateRandomAge());
  } 
  else if (randomAnimal instanceof leopard) 
  {
    return new leopard(generateRandomName(), generateRandomAge());
  } 
  else if (randomAnimal instanceof lion) 
  {
    return new lion(generateRandomName(), generateRandomAge());
  }
}


function generateRandomName() {
  var randomIdx = getRandomIndex(names.length);
  return names[randomIdx];
}

// generates a random age from 0 to 5
function generateRandomAge() {
  var randomIdx = getRandomIndex(5);
  return randomIdx;
}

/*** Document Load ****/
$(document).ready(function() {

  // generate a random animal when the document opens
  var animal = generateRandomAnimal();
  // update the page based on the animal properties
  $("#animal-properties").text(animal.name + "  " + animal.age + "years old");
  $("#animal-img").attr("src", animal.image);

});