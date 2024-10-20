import { createConnection } from "mysql";
import CONFIG from "../scripts/configs/dbConfig.js";

export default class MyDB {
    constructor() {
        this.connection = createConnection(CONFIG);
    }

    addUser(user) {
        const query = `INSERT INTO ${process.env.TABLE_NAME} (fullName, dob, gender) VALUES ("${user.fullName}", "${user.dob}", "${user.gender}");`;
        this.connection.connect((err) => {
            if (err) throw new Error(err);
            this.connection.query(query, (err, res) => {
                if (err) throw new Error(err);
                this.connection.end(() => {});
            });
        });
    }

    addAllUsers(arrayOfUsers) {
        const query = `INSERT INTO ${process.env.TABLE_NAME} (fullName, dob, gender) VALUES ?`;
        this.connection.connect((err) => {
            if (err) throw new Error(err);
            this.connection.query(query, [arrayOfUsers], (err, res) => {
                if (err) throw new Error(err);
                this.connection.end(() => {});
            });
        });
    }

    getAllUsers() {
        return new Promise((resolve, reject) => {
            const query = `SELECT fullName, DATE_FORMAT(dob, "%Y-%m-%d") AS dob, gender FROM ${process.env.TABLE_NAME};`;
            const result = [];
            this.connection.connect((err) => {
                if (err) throw new Error(err);
                this.connection.query(query, (err, res, fileds) => {
                    if (err) throw new Error(err);
                    res.forEach((user) => {
                        result.push([user.fullName, user.dob, user.gender]);
                    });
                    this.connection.end(() => {
                        resolve(result);
                    });
                });
            });
        });
    }

    getUsersWithQuery(query) {
        return new Promise((resolve, reject) => {
            this.connection.connect((err) => {
                if (err) throw new Error(err);
                const result = [];
                const start = Date.now();
                this.connection.query(query, (err, res, fileds) => {
                    if (err) throw new Error(err);
                    res.forEach((user) => {
                        result.push([user.fullName, user.dob, user.gender]);
                    });
                    this.connection.end(() => {
                        resolve({ data: result, time: Date.now() - start });
                    });
                });
            });
        });
    }

    getUsersWithQueryV2(index, query) {
        return new Promise((resolve, reject) => {
            let start;
            this.connection.connect((err) => {
                if (err) throw new Error(err);
                this.connection.query(index, (err, res, fileds) => {
                    if (err) throw new Error(err);
                    start = Date.now();
                });
                this.connection.query(query, (err, res, fileds) => {
                    if (err) throw new Error(err);
                    this.connection.end(() => {
                        resolve({ data: res, time: Date.now() - start });
                    });
                });
            });
        });
    }
}
