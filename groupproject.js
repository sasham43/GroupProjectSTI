
var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];
//
// var atticus = {
//   name: 'Atticus',
//   employeeNumber: '2405',
//   salary: '47000',
//   rating: 3
// };
//
// var jem = {name: "Jem", employeeNumber: "62347", salary: "63500", rating: 4};
// var boo = {name: "Boo", employeeNumber: "11435", salary: "54000", rating: 3};
// var scout = {name: "Scout", employeeNumber: "6243", salary: "74750", rating: 5};

var employees = [atticus, jem, boo, scout];

for (var it = 0; it < employees.length; it++){
  var tempEmployee = new Employee(employees[it][0], employees[it][1], employees[it][2], employees[it][3]);
  employees[it] = tempEmployee;
}

// new array [name,%, total comp, total bonus]  just for our reference!!

// Testing our function:
// console.log("Atticus", generating(atticus));
// console.log("Scout", generating(scout));
// console.log("Jem", generating(jem));
// console.log("Boo", generating(boo));

for ( var i = 0; i < employees.length; i++) {
  console.log(generating(employees[i]));
}

function calcBonus(person) {
  var name = person.name;
  var employeeNumber = person.employeeNumber;
  var salary = parseInt(person.salary);
  var rating=person.rating;

  var bonusPercent=0;

  switch(rating){
    case 3:
      bonusPercent=0.04;
      break;
    case 4:
      bonusPercent=0.06;
      break;
    case 5:
      bonusPercent=0.10;
      break;
    default:
      bonusPercent=0;
  }

  if (employeeNumber.length == 4){
    bonusPercent+=0.05;
  }

  if(salary > 65000){
    bonusPercent-=0.01;
  }

  if(bonusPercent > 0.13){
    bonusPercent = 0.13;
  }

  return bonusPercent;
}

//console.log(calcBonus(atticus));

function generating(person){
  var salary = parseInt(person.salary);
  var bonusPercent = calcBonus(person);
  var totalBonus = Math.round(bonusPercent * salary);
  var totalComp = totalBonus + salary;

  var employee = {};

  employee.name = person.name;
  employee.bonusPercent = bonusPercent;
  employee.totalBonus = totalBonus;
  employee.totalComp = totalComp;

  return employee;
}

function Employee(name, employeeNumber, salary, rating){
  this.name = name;
  this.employeeNumber = employeeNumber;
  this.salary = salary;
  this.rating = rating;
}
