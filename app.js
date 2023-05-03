let age = 39;
let userName = "Bojan";
let hobbies = ["Sports", "Cooking", "Reading"];

let job = {
  title: "Developer",
  place: "New York",
  salary: "50000",
};

let totalAdultYears;

function calculateAdultYears(userAge) {
  let result;
  result = userAge - 18;
  return result;
}

totalAdultYears = calculateAdultYears(age);
console.log(totalAdultYears);

age = 56;
totalAdultYears = calculateAdultYears(age);

console.log(totalAdultYears);

let person = {
  name: "Bojan", //Property
  greet() {
    //Method
    console.log("Hello!");
  }
};

person.greet();

