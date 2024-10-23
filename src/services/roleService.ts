import { pool } from "../connection.js";
import { startCli } from "../cli.js";

export function viewAllRoles(): void {
    pool.query(`
        SELECT role.id, role.title, role.salary, department.name AS department 
        FROM role
        JOIN department ON role.department_id = department.id
        `)
        .then(result => {
            console.table(result.rows);
            startCli();
        })

}