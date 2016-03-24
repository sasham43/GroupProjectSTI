
var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];

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
  var name = person[0];
  var employeeNumber = person[1];
  var salary = parseInt(person[2]);
  var rating=person[3];

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
  var salary=parseInt(person[2]);
  var bonusPercent=calcBonus(person);
  var totalBonus=Math.round(bonusPercent * salary);
  var totalComp=totalBonus + salary;
  var newArray=[];

  newArray.push(person[0]);
  newArray.push(bonusPercent);
  newArray.push(totalComp);
  newArray.push(totalBonus);
  return newArray;
}
