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

export async function addEmployee(firstName: string, lastName: string, role_id: number, manager_id: number): Promise<void> {
  const query = "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)";
  await pool.query(query, [firstName, lastName, role_id, manager_id]);
  startCli();
}

export async function getManagers() {
  const result = await pool.query("SELECT id, first_name || ' ' || last_name AS name FROM employee WHERE manager_id IS NULL");
  return result.rows.map(manager => ({
      name: manager.name,
      value: manager.id
  }));
}