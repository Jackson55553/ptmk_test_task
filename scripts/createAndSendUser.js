import dotenv from "dotenv";
dotenv.config();
import User from "../models/User.js";
import MyDB from "../DB/MyDB.js";

export default async function createAndSendUser(fullName, dob, gender) {
    const mydb = new MyDB();
    const user = new User(fullName, dob, gender);
    mydb.addUser(user);
}
