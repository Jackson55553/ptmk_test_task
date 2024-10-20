import MyDB from "../DB/MyDB.js";
import User from "../models/User.js";

export default async function getUniqueSortUsers() {
    const mydb = new MyDB();
    const res = await mydb.getAllUsers();

    const sortRes = res
        .sort((a, b) => a[0].localeCompare(b[0]))
        .map((el) => el.join("/"));

    const filtredSortRes = [];
    sortRes.forEach((el) => {
        if (!filtredSortRes.includes(el)) {
            filtredSortRes.push(el);
        }
    });

    const result = filtredSortRes.map((el) => el.split("/"));
    result.forEach((el) => {
        const user = new User(...el);
        const age = user.getAge();
        console.log(`${user.fullName} ${user.dob} ${user.gender} ${age}`);
    });
}
