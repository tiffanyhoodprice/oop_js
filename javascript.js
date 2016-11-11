//prototypical inheritance to connect Mammal and Person

function Mammal(age) {
  this.hair = true;
  this.blood = "warm";
  this.age = age;
}

function Person(name, nationality, age) {
  Mammal.call(this, age)
  this.name = name;
  this.nationality = nationality;
}

//in ES6

// //class Mammal {
//   constructor(age) {
//     this.hair = true;
//     this.age = age;
//   }
// } 

//class Person extends Mammal{
//   constructor(name, nationality, age) {
//     super(age);
//     this.name = name;
//     this.nationality = nationality;
//   }
// }

Person.prototype = new Mammal();
//this is not a class, but acts like a class. It's a person factory
//things given from beginning, put inside a constructor. But when prototypes good with methods.

Person.prototype.secondNationality = function(purpleHippo) {
  this.secondNationality = purpleHippo;
}

var john = new Person("John Miller", "German", 23);
john.secondNationality = "French";
console.log(john);
var sally = new Person("Sally Ride", "American", 45);
console.log(sally);



var clickBoxOne = (function() {
  var colors = ["red", "blue", "yellow"];
  var i = 0;
  return function() {
    // for(var i=0; i<colors.length; i++) {
      document.getElementById('boxOne').style.background = colors[i%3]
        i++;     
    // }
  }
})();

var clickBoxTwo = (function() {
  var colors = ["orange", "green", "black"];
  var i = 0;
  return function() {
    // for(var i=0; i<colors.length; i++) {
      document.getElementById('boxTwo').style.background = colors[i%3]
        i++;     
    // }
  }
})();
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

function Account(firstName, lastName, openingBalance) {
  Person.call(this, firstName, lastName)
  // this.firstName = firstName;
  // this.lastName = lastName;
  this.balance = openingBalance;
  this.status = "open"
}

 Account.prototype.closeAccount = function() {
    this.balance = 0;
    this.status = "closed";
  };

var accounts = [];

function createAccount() {
  var firstName = document.getElementById('firstName');
  var lastName = document.getElementById('lastName');
  var openingBalance = document.getElementById('openingBalance');
  var account = new Account(firstName.value, lastName.value, openingBalance.value); // need to create constructor

  accounts.push(account);
  firstName.value = "";
  lastName.value = "";
  openingBalance.value = "";
}

window.accounts = accounts;


