import MyDB from "../DB/MyDB.js";

const mydb = new MyDB();
const query = `SELECT fullName, DATE_FORMAT(dob, "%Y-%m-%d") AS dob, gender FROM ${process.env.TABLE_NAME} WHERE fullname LIKE 'F%' AND gender = 'Male';`;
export default function getMaleF() {
    mydb.getUsersWithQuery(query).then((data) => {
        console.log(
            "Первый вариант запроса выполнился за: " + data.time + " ms"
        );
    });
}
