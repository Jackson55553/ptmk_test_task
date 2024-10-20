import MyDB from "../../DB/MyDB.js";
import getArrayOfUsers from "./getArrayOfUsers.js";

export default function addArrayOfUsersToDB() {
    const usersToDB = getArrayOfUsers();
    const mydb = new MyDB();
    mydb.addAllUsers(usersToDB);
}
