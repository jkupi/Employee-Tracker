import { pool } from "../connection.js";
import { startCli } from "../cli.js";

export async function viewAllRoles(): Promise<void> {
    await pool.query(`
        SELECT role.id, role.title, role.salary, department.name AS department 
        FROM role
        JOIN department ON role.department_id = department.id
        `)
        .then(result => {
            console.table(result.rows);
            startCli();
        })
}

export async function addRole(roleName: string, salary: number, deptId: number): Promise<void> {
    return await new Promise((resolve, reject) => {
        const query = 'INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)';
        pool.query(query, [roleName, salary, deptId], (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
        startCli();
    });
}

export async function getRoles() {
    const result = await pool.query("SELECT id, title FROM role");
    return result.rows.map(role => ({
        name: role.title,
        value: role.id
    }));
}