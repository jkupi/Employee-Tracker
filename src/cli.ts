import inquirer from "inquirer";
import { viewAllDepartments, addDepartment, getDepartments } from "./services/departmentService.js";
import { viewAllRoles, addRole, getRoles } from "./services/roleService.js";
import { viewAllEmployees, getManagers, getEmployees, addEmployee, updateEmployeeRole } from "./services/employeeService.js";

// default prompt
const startCli = async (): Promise<void> => {
  await inquirer
    .prompt([
      {
        type: "list",
        name: "StartUpPrompt",
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
          "Quit",
        ],
      },
    ])
    .then((answers) => {
      switch (answers.StartUpPrompt) {
        case "View all departments":
            viewAllDepartments();
          break;
        case "View all roles":
          viewAllRoles();
          break;
        case "View all employees":
          viewAllEmployees();
          break;
        case "Add a department":
          addDepartmentPrompt();
          break;
        case "Add a role":
          addRolePrompt();
          break;
        case "Add an employee":
          addEmployeePrompt();
          break;
        case "Update an employee role":
          updateEmployeeRolePrompt();
          break;
        case "Quit":
            console.log("Bye Bye!");
            process.exit();
        default:
            console.log("how did you even get here??")
      }
    });
};

// prompt for adding department 
const addDepartmentPrompt = async (): Promise<void> => {
  await inquirer
    .prompt([
      {
        type: "input",
        name: "departmentName",
        message: "Enter name of department:",
      },
    ])
    .then((answer) => {
      const { departmentName } = answer;
      addDepartment(departmentName);
    });
}

// prompt for adding role 
const addRolePrompt = async (): Promise<void> => {
  const departmentChoices = await getDepartments();

  await inquirer
    .prompt([
      {
        type: "input",
        name: "roleName",
        message: "Enter name of role:",
      },
      {
        type: "input",
        name: "salary",
        message: "Enter salary for this role:",
      },
      {
        type: "list",
        name: "department_id",
        message: "Which department does the role belong to?",
        choices: departmentChoices,
      },
    ])
    .then((answer) => {
      const { roleName, salary, department_id } = answer;
      addRole(roleName, salary, department_id);
    });
}

// prompt for adding employee
const addEmployeePrompt = async (): Promise<void> => {
  const roleChoices = await getRoles();
  const managerChoices = await getManagers();

  await inquirer
    .prompt([
      {
        type: "input",
        name: "firstName",
        message: "What is the first name of the employee:",
      },
      {
        type: "input",
        name: "lastName",
        message: "What is the last name of the employee:",
      },
      {
        type: "list",
        name: "role_id",
        message: "What is the employee's role?",
        choices: roleChoices,
      },
      {
        type: "list",
        name: "manager_id",
        message: "Who is the employee's manager?",
        choices: [{name: "none", value: null}, ...managerChoices]
      },
    ])
    .then((answer) => {
      const { firstName, lastName, role_id, manager_id } = answer;
      addEmployee(firstName, lastName, role_id, manager_id);
    });
}

// prompt for updating an employee
const updateEmployeeRolePrompt = async (): Promise<void> => {
  const roleChoices = await getRoles();
  const employeeChoices = await getEmployees();

  await inquirer
    .prompt([
      {
        type: "list",
        name: "employee_id",
        message: "Which employee's role do you want to update?",
        choices: employeeChoices,
      },
      {
        type: "list",
        name: "role_id",
        message: "Which role do want to assign to the selected employee?",
        choices: roleChoices,
      },
    ])
    .then((answer) => {
      const { employee_id, role_id } = answer;
      updateEmployeeRole(employee_id, role_id);
    });
}

export { startCli };
