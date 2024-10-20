import dotenv from "dotenv";
import MyDB from "../DB/MyDB.js";

dotenv.config();

const createTB = `CREATE TABLE IF NOT EXISTS ${process.env.TABLE_NAME}(id int NOT NULL AUTO_INCREMENT, fullName TEXT NOT NULL, dob DATE NOT NULL, gender TEXT NOT NULL, PRIMARY KEY (id) ) CHARACTER SET utf8`;

export default async function createTable() {
    const mydb = new MyDB();
    if (!mydb.connection) {
        throw new Error("error from create table ");
    }
    mydb.connection.connect((err, res) => {
        if (err) throw new Error("mydb err");
        mydb.connection.query(createTB, (err, res) => {
            if (err) throw err;
            mydb.connection.end(() => {});
        });
    });
}
