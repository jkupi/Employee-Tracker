import { pool } from "../connection.js";
import { startCli } from "../cli.js";

export async function viewAllEmployees(): Promise<void> {
  await pool.query(
      `
        SELECT employee.id, employee.first_name, employee.last_name, role.title AS role, department.name AS department, role.salary, manager.first_name || ' ' || manager.last_name AS manager
        FROM employee
        LEFT JOIN role ON employee.role_id = role.id
        LEFT JOIN department ON role.department_id = department.id
        LEFT JOIN employee AS manager ON employee.manager_id = manager.id;
        `
    )
    .then((result) => {
      console.table(result.rows);
      startCli();
    });
}
