import inquirer from "inquirer";
import { viewAllDepartments, addDepartment, getDepartments } from "./services/departmentService.js";
import { viewAllRoles, addRole } from "./services/roleService.js";
import { viewAllEmployees } from "./services/employeeService.js";

const startCli = (): void => {
  inquirer
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
          break;
        case "Update an employee role":
          break;
        case "Quit":
            console.log("Bye Bye!");
            process.exit();
        default:
            console.log("how did you even get here??")
      }
    });
};

const addDepartmentPrompt = (): void => {
  inquirer
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

const addRolePrompt = async (): Promise<void> => {
  const departmentChoices = await getDepartments();
  // console.log(departmentChoices);

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

export { startCli };
