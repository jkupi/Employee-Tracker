import { pool } from "../connection.js";
import { startCli } from "../cli.js";

// retrieve and display all departments
export async function viewAllDepartments(): Promise<void> {
    await pool.query('SELECT id, name FROM department')
        .then(result => {
            console.table(result.rows);
            startCli();
        })
}

// adds department to database with specified name
export async function addDepartment(departmentName: string): Promise<void> {
    const query = 'INSERT INTO department (name) VALUES ($1)';
    pool.query(query, [departmentName]);
    console.log("Department added!");
    startCli();
}

// function to get a list of departments for use in other prompts
export async function getDepartments() {
    const result = await pool.query("SELECT id, name FROM department");

    // mapping query result to an array of objects for inquirer to use
    return result.rows.map(department => ({
        name: department.name,
        value: department.id
    }));
}
