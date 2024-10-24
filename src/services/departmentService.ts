import { pool } from "../connection.js";
// import { QueryResult } from "pg";
import { startCli } from "../cli.js";

export function viewAllDepartments(): void {
    pool.query('SELECT id, name FROM department')
        .then(result => {
            console.table(result.rows);
            startCli();
        })
}

export function addDepartment(departmentName: string): Promise<void> {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO department (name) VALUES ($1)';
        pool.query(query, [departmentName], (err) => {
            if (err) {
                reject(err);
            } else {
                console.log("Department added!");
                resolve();
            }
        });
        startCli();
    });
}
