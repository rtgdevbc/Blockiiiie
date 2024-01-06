const emplName = ["Ravi", "Teja"];

const newEmplNameSufix = emplName.map(item => "Gunda " + item  );
console.log(newEmplNameSufix);

const salary = [
                { firstName : "Raviteja", sal : 60000},
                { firstName : "Sai", sal : 70000},
                { fistName : "Tillu", sal : 80000}];

const newBonusSal = salary.map(item => item.sal + 1000);
console.log(salary);
console.log(newBonusSal);

function newSal (fName, newSalary){
    console.log(fName, newSalary);
    this.firstName = fName;
    this.sal = newSalary;
};
for (let i = 0; i<3; i++){
    const emp1 = newSal("Raviteja", newBonusSal[i]);
};

//const newBonusSal2 = salary.sal.map(item => item + 1000);
