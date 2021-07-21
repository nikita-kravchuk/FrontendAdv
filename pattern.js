// Factory

// var Factory = function () {
//   this.createEmployee = function (type) {
//     var employee;

//     if (type === "fulltime") {
//       employee = new FullTime();
//     } else if (type === "parttime") {
//       employee = new PartTime();
//     } else if (type === "temporary") {
//       employee = new Temporary();
//     } else if (type === "contractor") {
//       employee = new Contractor();
//     }

//     employee.type = type;

//     employee.say = function () {
//       console.log(this.type + ": rate " + this.hourly + "/hour");
//     };

//     return employee;
//   };
// };

// var FullTime = function () {
//   this.hourly = "$12";
// };

// var PartTime = function () {
//   this.hourly = "$11";
// };

// var Temporary = function () {
//   this.hourly = "$10";
// };

// var Contractor = function () {
//   this.hourly = "$15";
// };

// function run() {
//   var employees = [];
//   var factory = new Factory();
//   var i, len = employees.length;

//   employees.push(factory.createEmployee("fulltime"));
//   employees.push(factory.createEmployee("parttime"));
//   employees.push(factory.createEmployee("temporary"));
//   employees.push(factory.createEmployee("contractor"));

//   for (i = 0; i < len; i += 1) {
//     employees[i].say();
//   }
// }

// Flyweight 

// function Flyweight(make, model, processor) {
//     this.make = make;
//     this.model = model;
//     this.processor = processor;
// };

// var FlyWeightFactory = (function () {
//     var flyweights = {};

//     return {

//         get: function (make, model, processor) {
//             if (!flyweights[make + model]) {
//                 flyweights[make + model] =
//                     new Flyweight(make, model, processor);
//             }
//             return flyweights[make + model];
//         },

//         getCount: function () {
//             var count = 0;
//             for (var f in flyweights) count++;
//             return count;
//         }
//     }
// })();

// function ComputerCollection() {
//     var computers = {};
//     var count = 0;

//     return {
//         add: function (make, model, processor, memory, tag) {
//             computers[tag] =
//                 new Computer(make, model, processor, memory, tag);
//             count++;
//         },

//         get: function (tag) {
//             return computers[tag];
//         },

//         getCount: function () {
//             return count;
//         }
//     };
// }

// var Computer = function (make, model, processor, memory, tag) {
//     this.flyweight = FlyWeightFactory.get(make, model, processor);
//     this.memory = memory;
//     this.tag = tag;
//     this.getMake = function () {
//         return this.flyweight.make;
//     }
//     // ...
// }

// function run() {
//     var computers = new ComputerCollection();

//     computers.add("Dell", "Studio XPS", "Intel", "5G", "Y755P");
//     computers.add("Dell", "Studio XPS", "Intel", "6G", "X997T");
//     computers.add("Dell", "Studio XPS", "Intel", "2G", "U8U80");
//     computers.add("Dell", "Studio XPS", "Intel", "2G", "NT777");
//     computers.add("Dell", "Studio XPS", "Intel", "2G", "0J88A");
//     computers.add("HP", "Envy", "Intel", "4G", "CNU883701");
//     computers.add("HP", "Envy", "Intel", "2G", "TXU003283");

//     console.log("Computers: " + computers.getCount());
//     console.log("Flyweights: " + FlyWeightFactory.getCount());
// }

// Command

// function add(x, y) { return x + y; }
// function sub(x, y) { return x - y; }
// function mul(x, y) { return x * y; }
// function div(x, y) { return x / y; }

// var Command = function (execute, undo, value) {
//     this.execute = execute;
//     this.undo = undo;
//     this.value = value;
// }

// var AddCommand = function (value) {
//     return new Command(add, sub, value);
// };

// var SubCommand = function (value) {
//     return new Command(sub, add, value);
// };

// var MulCommand = function (value) {
//     return new Command(mul, div, value);
// };

// var DivCommand = function (value) {
//     return new Command(div, mul, value);
// };

// var Calculator = function () {
//     var current = 0;
//     var commands = [];

//     function action(command) {
//         var name = command.execute.toString().substr(9, 3);
//         return name.charAt(0).toUpperCase() + name.slice(1);
//     }

//     return {
//         execute: function (command) {
//             current = command.execute(current, command.value);
//             commands.push(command);
//             console.log(action(command) + ": " + command.value);
//         },

//         undo: function () {
//             var command = commands.pop();
//             current = command.undo(current, command.value);
//             console.log("Undo " + action(command) + ": " + command.value);
//         },

//         getCurrentValue: function () {
//             return current;
//         }
//     }
// }

// function run() {

//     var calculator = new Calculator();

//     // issue commands

//     calculator.execute(new AddCommand(100));
//     calculator.execute(new SubCommand(24));
//     calculator.execute(new MulCommand(6));
//     calculator.execute(new DivCommand(2));

//     // reverse last two commands

//     calculator.undo();
//     calculator.undo();

//     console.log("\nValue: " + calculator.getCurrentValue());
// }

// Strategy

// var Shipping = function () {
//     this.company = "";
// };

// Shipping.prototype = {
//     setStrategy: function (company) {
//         this.company = company;
//     },

//     calculate: function (package) {
//         return this.company.calculate(package);
//     }
// };

// var UPS = function () {
//     this.calculate = function (package) {
//         // calculations...
//         return "$45.95";
//     }
// };

// var USPS = function () {
//     this.calculate = function (package) {
//         // calculations...
//         return "$39.40";
//     }
// };

// var Fedex = function () {
//     this.calculate = function (package) {
//         // calculations...
//         return "$43.20";
//     }
// };

// function run() {

//     var package = { from: "76712", to: "10012", weigth: "lkg" };

//     // the 3 strategies

//     var ups = new UPS();
//     var usps = new USPS();
//     var fedex = new Fedex();

//     var shipping = new Shipping();

//     shipping.setStrategy(ups);
//     console.log("UPS Strategy: " + shipping.calculate(package));
//     shipping.setStrategy(usps);
//     console.log("USPS Strategy: " + shipping.calculate(package));
//     shipping.setStrategy(fedex);
//     console.log("Fedex Strategy: " + shipping.calculate(package));
// }
