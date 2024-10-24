// // 1-MISOL KELTIRISH
function User(name, age, weight) {
  this.name = name;
  this.age = age;
  this.weight = weight;
}
let user = new User("John", 23, 70);
console.log(user);
// // 2-MISOL KELTIRISH
function car(name, year, color, horsePower) {
  this.name = name;
  this.year = year;
  this.color = color;
  this.horsePower = horsePower;
}
let car1 = new car("Mercedes", 2020, "black", 500);
console.log(car1);
// // 3-MISOL KELTIRISH
function telephone(brand, model, battery, price) {
  this.brand = brand;
  this.model = model;
  this.battery = battery;
  this.price = price;
}
let phone = new telephone("Samsung", "Galaxy S24", "5,000 mAh", "1.500$");
console.log(phone);
// // 3-MISOL KELTIRISH
function student(name, age, major) {
    this.name = name;
    this.age = age;
    this.major = major;
}
let student1 = new student("John", 29, 'IT');
console.log(student1);
// // 4-MISOL KELTIRISH
function myDesktop(brand, processor) {
  this.brand = brand;
  this.processor = processor;
}
let desktop1 = new Desktop("Dell", "Core i5");
console.log(desktop1);
// // 5-MISOL KELTIRISH
function myCountry(name, capital, population) {
  this.name = name;
  this.capital = capital;
  this.population = population;
}
let country1 = new myCountry("Uzbekistan", "Tashkent", "35mln");
console.log(country1);
// // // 5 ta class ga oid misol yozish
// // 1-MISOL KELTIRISH
class User {
  constructor(name, age, weight) {
    this.name = name;
    this.age = age;
    this.weight = weight;
  }
}
let user = new User("John", 23, 70);
console.log(user);
// // 2-MISOL KELTIRISH
class Car {
  constructor(name, year, color, horsePower) {
    this.name = name;
    this.year = year;
    this.color = color;
    this.horsePower = horsePower;
  }
}
let car1 = new Car("Mercedes", 2020, "black", 500);
console.log(car1);
// // 3-MISOL KELTIRISH
class Telephone {
  constructor(brand, model, battery, price) {
    this.brand = brand;
    this.model = model;
    this.battery = battery;
    this.price = price;
  }
}
let phone = new Telephone("Samsung", "Galaxy S24", "5,000 mAh", "1.500$");
console.log(phone);
// // 4-MISOL KELTIRISH
class Student {
  constructor(name, age, major) {
    this.name = name;
    this.age = age;
    this.major = major;
  }
}
let student1 = new Student("John", 29, "IT");
console.log(student1);
// // 5-MISOL KELTIRISH
class Country {
  constructor(name, capital, population) {
    this.name = name;
    this.capital = capital;
    this.population = population;
  }
}
let country1 = new Country("Uzbekistan", "Tashkent", "35mln");
console.log(country1);
// // // Massiv va obyektlar
// 1-SAVOL JAVOBI
const people = [
  { name: "Ali", age: 17 },
  { name: "O'ktam", age: 18 },
  { name: "Sardor", age: 19 },
];
function students() {
  people.forEach(function (value) {
    console.log(value.name, value.age);
  });
}
students();
// 2-SAVOL JAVOBI
const product = [
  { nom: "Apple", narx: 100 },
  { nom: "Pear", narx: 150 },
  { nom: "Banana", narx: 200 },
];
function increasePrice() {
  let sum = [];
  for (const key of product) {
    let price = key.narx * 1.2;
    sum.push({ nom: key.nom, narx: price });
  }
  return sum;
}
console.log(increasePrice());
// 3-SAVOL JAVOBI
const students = [
  { ism: "Dilorom", yosh: 20 },
  { ism: "Shahrizoda", yosh: 17 },
  { ism: "Akbar", yosh: 19 },
];
function filterStudents() {
  let sel = [];
  for (const key of students) {
    if (key.yosh > 18) {
      sel.push(key);
    }
  }
  return sel;
}
console.log(filterStudents());
// 4-SAVOL JAVOBI
const kitob = [
  { nom: "Kitob A", muallif: "Said Ahmad" },
  { nom: "Kitob B", muallif: "Zokir Khoshimov" },
  { nom: "Kitob C", muallif: "Murodjon Abduqodirov" },
];
function bookRes() {
  let res = [];
  for (const book of kitob) {
    const key = book.muallif.toUpperCase();
    res.push({ nom: book.nom, muallif: key });
  }
  return res;
}
console.log(bookRes());
// 5-SAVOL JAVOBI
const xodim = [
  { ism: "Rashid", ishHaqi: 3000 },
  { ism: "Dilshod", ishHaqi: 2500 },
  { ism: "Farhod", ishHaqi: 4000 },
];
function res() {
  for (const key of xodim) {
    key.ishHaqi = Math.trunc(key.ishHaqi * 1.1);
  }
  console.log(xodim);
}
console.log(res());
// 6-SAVOL JAVOBI
const students = [
  { ism: "Jasur", yosh: 21 },
  { ism: "Sardorbek", yosh: 22 },
  { ism: "Azizbek", yosh: 20 },
];
function addPrefix() {
  for (const key of students) {
    key.ism = "Mr. " + key.ism;
  }
}
addPrefix();
console.log(students);
// 7-SAVOL JAVOBI
const automobile = [
  { nom: "Tesla", tur: "elektr" },
  { nom: "Toyota", tur: "benzin" },
  { nom: "Nissan Leaf", tur: "elektr" },
];
let res = [];
for (const model of automobile) {
  if (model.tur == "elektr") {
    res.push(model);
  }
}
console.log(res);
// 8-SAVOL JAVOBI
const user = [
  { ism: "Aziz", email: "aziz@example.com" },
  { ism: "Nodir", email: "nodir@example.com" },
  { ism: "Malika", email: "malika@example.com" },
];
function returnData(user) {
  let res = [];
  for (const key of user) {
    res.push({ ism: key.ism, email: key.email });
  }
  return res;
}
console.log(returnData(user));
// 9-SAVOL JAVOBI
const product = [
  { nom: "Televizor", narx: 500 },
  { nom: "Konditsioner", narx: 700 },
  { nom: "Butler", narx: 300 },
];
function longProductSearch(product) {
  let longProduct = product[0];
  for (const key of product) {
    if (key.narx > longProduct.narx) {
      longProduct = key;
    }
  }
  return longProduct;
}
console.log(longProductSearch(product));
// 10-SAVOL JAVOBI
const student = [
  { ism: "Zarina", ball: 85 },
  { ism: "Doston", ball: 90 },
  { ism: "Gulbahor", ball: 95 },
];
function equalization(student) {
  const res = student.reduce((sum, student) => sum + student.ball, 0);
  const studentNum = student.length;
  const sum = res / studentNum;
  for (const key of student) {
    key.ball = sum;
  }
  return student;
}
console.log(equalization(student));
// // // String metodiga oid masalalar
// 1-SAVOL JAVOBI
const toLowerCase = (str) => {
  let res = str.toLowerCase();
  return res;
};
console.log(toLowerCase("HELLO"));
// 2-SAVOL JAVOBI
function strLength(str) {
  let res = str.length;
  return res;
}
console.log(strLength("Hello"));
// 4-SAVOL JAVOBI
function resStr(str) {
  return str.length > 10 ? str.slice(0, 10) : str;
}
console.log(resStr("Hello world"));
// 6-SAVOL JAVOBI
function indexStr(str) {
  return str.charAt(5);
}
console.log(indexStr("world!"));
function incJS(str) {
  return str.includes("JavaScript");
}
console.log(incJS("JavaScript"));