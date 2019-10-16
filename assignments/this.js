/* The four principles of "this";
* in your own words. explain the four principles for the "this" keyword below.
*
* 1. When called in global scope 'this' will be the window/console object
* 2. When calling a function, the object before the dot is 'this'
* 3. When a constructor function is used 'this' is the new object
* 4. When 'call' or 'apply' are used 'this' is explicitly defined in the parameters
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function saySomething(something) {
    console.log(this);
    return something;
};

saySomething("this demonstrates window binding");

// Principle 2

// code example for Implicit Binding

const myInfo = {
    name: "Taylor",
    age: 26,
    location: "Las Vegas",
    introduce: function() {
        console.log(`Hi, my name is ${this.name}, I am ${this.age} years old, and I live in ${this.location}.`)
    }
};

myInfo.introduce();

// Principle 3

// code example for New Binding

function Person(name, age, location) {
    this.name = name,
    this.age = age,
    this.location = location,
    this.introduce = function() {
        console.log(`Hi, my name is ${this.name}, I am ${this.age} years old, and I live in ${this.location}.`)
    }
};

const zach = new Person('Zach', 27, 'Laramie');
zach.introduce();

// Principle 4

// code example for Explicit Binding

const man = {
    fullName: function(city, state) {
      console.log(`${this.firstName} ${this.lastName} lives in ${city}, ${state}`);
    }
  }
  const man1 = {
    firstName:"John",
    lastName: "Doe"
  }
  man.fullName.call(man1, "Denver", "Colorado");