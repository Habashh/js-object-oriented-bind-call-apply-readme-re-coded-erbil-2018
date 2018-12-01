function greet() {
  document.write(`my name is ${this.name}, hi!`);
}
 
greet();

let person = {
    name: 'Bob',
    greet: greet
};
 
person.greet();

function greet() {
    document.write(`my name is ${this.name}, hi!`);
}
 
let sally = { name: 'Sally' };
 
greet.call(sally);
greet.apply(sally);

function greet(customerOne, customerTwo) {
    document.write(`Hi ${customerOne} and ${customerTwo}, my name is ${this.name}!`);
}

let sally = { name: 'Sally' };
 
function greet(customer) {
    document.write(`Hi ${customer}, my name is ${this.name}!`);
}
 
let newGreet = greet.bind(sally); 
// newGreet is context-bound to sally
 
newGreet('Bob');
// Hi Bob, my name is Sally!
 
greet('Bob');
// Hi Bob, my name is !

class Event {
    constructor(title, keywords) {
        this.title = title;
        this.keywords = keywords;
    }
}
 
class User {
    constructor(name, interests) {
        this.name = name;
        this .interests = interests;
    }
 
   matchInterests(event) {
  return event.keywords.some(word => this.interests.includes(word));
}
}
 
let billy = new User('billy', ['music', 'art', 'movies']);
let freeMusic = new Event('Free Music Show', ['music', 'free', 'outside']);
 
billy.matchInterests(freeMusic);