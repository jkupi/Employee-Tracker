import { connectToDb } from './connection.js';
import { startCli } from './cli.js';

const start = async () => {
    await connectToDb();
    startCli();
}

start();
