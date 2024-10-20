import MyDB from "../DB/MyDB.js";
import getMaleF from "./getMaleF.js";

export default function getMaleF_v2() {
    const addIndex = `CREATE INDEX index_f_male ON ${process.env.TABLE_NAME}(fullname(2), gender(10));`;
    const query = `SELECT fullName, DATE_FORMAT(dob, "%Y-%m-%d") AS dob, gender FROM ${process.env.TABLE_NAME} WHERE fullname LIKE 'F%' AND gender = 'Male';`;
    const mydb = new MyDB();

    getMaleF();

    mydb.getUsersWithQueryV2(addIndex, query).then((data) => {
        console.log(
            "Второй вариант запроса выполнился за: " + data.time + " ms"
        );
    });
}
