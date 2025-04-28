const person = {
  name: "Rajiul",
  age: 25,
  address: {
    city: "Dhaka",
    location: "Mirpur",
  },
};

person.address.country = "Bangladesh";
const location = person["address"]["location"];
person.address.country = "China";


const personKey = Object.keys(person)
const addressKey = Object.keys(person.address)
const { name, age } = person;
const personName = person.name;
const personName2 = person["name"];
const twoArraySum = [...addressKey ,...personKey]

console.log(twoArraySum);
