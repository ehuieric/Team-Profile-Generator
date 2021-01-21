// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id , email , school ) {
        
        super(name, id , email);

        this.school  = school;
    }

    getRole() {
        return `Intern`;
    }

    getSchool () {
        return this.school  ;
    }
        
}


const intern = new Intern(`rachida` , `1234` , `ehui_eric@yahoo.fr`, `OSU`);
console.log('name:', intern.getName());
console.log('id:', intern.getId());
console.log('email:', intern.getEmail());
console.log('role:', intern.getRole());
console.log('school :', intern.getSchool ());

module.exports = Intern;
