// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id , email , officeNumber) {
        
        super(name, id , email);

        this.officeNumber = officeNumber;
    }

    getRole() {
        return `Manager`;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
        
}


const manager = new Manager(`rachida` , `1234` , `ehui_eric@yahoo.fr` , `8889009900`);
console.log('name:', manager.getName());
console.log('id:', manager.getId());
console.log('email:', manager.getEmail());
console.log('role:', manager.getRole());
console.log('officeNumber:', manager.getOfficeNumber());

module.exports = Manager;
