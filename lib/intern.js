const Employee = require("./employee")

class Intern extends Employee {
    constructor(name, id, title, school){
        super(name, id, title)
        this.shool = school;
    }

    getSchool(){
        return this.school;
    }

    getRole(){
        return "Intern"
    }
}

module.exports = Intern