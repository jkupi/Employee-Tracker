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
