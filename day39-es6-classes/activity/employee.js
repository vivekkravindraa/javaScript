// Create a class called Employee that includes three pieces of information as instance variables—a first name  , a last name  and a monthly salary. Your class should have a constructor that initializes the three instance variables. If the monthly salary is not positive, set it to 0.0. Create two Employee objects and display each object’s yearly salary. Then give each Employee a 10% raise and display each Employee’s yearly salary again.

class Employee {
    constructor(firstName, lastName, monthlySalary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.monthlySalary = monthlySalary;
    }
    calculate() {
        if(this.monthlySalary < 0) {
            return `NAME: ${this.firstName} SALARY: ${0.0}`;
        } else {
            let total = this.monthlySalary * 12;
            let percentage = total / 100 * 10;
            let final = total + percentage;
            return `NAME: ${this.firstName} SALARY: ${final}`;
        }
    }
}

let e1 = new Employee('Ramesh','Rao',1000);
console.log(e1.calculate());

let e2 = new Employee('Suresh','Rao',-1000);    
console.log(e2.calculate());