import inquirer from "inquirer";

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
          break;
        case "View all roles":
          break;
        case "View all employees":
          break;
        case "Add a department":
          break;
        case "Add a role":
          break;
        case "Add an employee":
          break;
        case "Update an employee role":
          break;
        case "Quit":
            console.log("Bye Bye!");
            process.exit();
            break;
        default:
            console.log("how did you even get here??")
      }
    });
};

export { startCli };
