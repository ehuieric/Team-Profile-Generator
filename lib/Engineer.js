// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id , email , github) {
        
        super(name, id , email);

        this.github  = github;
    }

    getRole() {
        return `Engineer`;
    }

    getGithub () {
        return this.github ;
    }
        
}


const engineer = new Engineer(`rachida` , `1234` , `ehui_eric@yahoo.fr` , `ehuiericUser`);
console.log('name:', engineer.getName());
console.log('id:', engineer.getId());
console.log('email:', engineer.getEmail());
console.log('role:', engineer.getRole());
console.log('github:', engineer.getGithub());

module.exports = Engineer;
