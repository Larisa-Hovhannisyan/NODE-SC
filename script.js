class Company {
  constructor() {
    this.workingHours = "10:00 - 18:00";
    this.salaryLimit = 10000;
  }

  getWorkingHours() {
    return this.workingHours;
  }

  getSalaryLimit() {
    return this.salaryLimit;
  }
}

class Employee {
  #salary;
  constructor(name, role, salary, company) {
    this.name = name;
    this.role = role;
    this.company = company;
    this.workingHours = company.getWorkingHours();
    this.#salary = salary;
  }

  sayHi() {
    console.log(`Hi I'm ${this.name}, a ${this.role}. I work from ${this.workingHours}.`);
  }

  getSalary() {
    return this.#salary;
  }
}

class PM extends Employee {
  constructor(name, salary, company) {
    super(name, "Project Manager", salary, company);
    this.workingHours = "11:00 - 18:00";
  }

  sayHi() {
    super.sayHi();
  }
}

class TeamLead extends Employee {
  constructor(name, salary, company) {
    super(name, "Team Lead", salary, company);
    this.workingHours = "11:00 - 18:00";
  }

  sayHi() {
    super.sayHi();
  }
}

class Dev extends Employee {
  constructor(name, salary, company) {
    super(name, "Full Stack Developer", salary, company);
  }

  sayHi() {
    super.sayHi();
  }
}

class Tester extends Employee {
  constructor(name, salary, company) {
    super(name, "Tester", salary, company);
  }

  sayHi() {
    super.sayHi();
  }
}

class Designer extends Employee {
  constructor(name, salary, company) {
    super(name, "Designer", salary, company);
  }

  sayHi() {
    super.sayHi();
  }
}

class DevOps extends Employee {
  constructor(name, salary, company) {
    super(name, "DevOps Engineer", salary, company);
  }

  sayHi() {
    super.sayHi();
  }
}

const itCompany = new Company();
const pm = new PM("name", 9500, itCompany);
const teamLead = new TeamLead("name", 9400, itCompany);
const programmer = new Dev("name", 9000, itCompany);
const tester = new Tester("name", 8700, itCompany);
const designer = new Designer("name", 8800, itCompany);
const devops = new DevOps("name", 8900, itCompany);

pm.sayHi();
teamLead.sayHi();
programmer.sayHi();
tester.sayHi();
designer.sayHi();
devops.sayHi();