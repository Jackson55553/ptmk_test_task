import createAndSendUser from "./scripts/createAndSendUser.js";
import createTable from "./scripts/createTable.js";
import getMaleF from "./scripts/getMaleF.js";
import getMaleF_v2 from "./scripts/getMaleF_v2.js";
import getUniqueSortUsers from "./scripts/getUniqueSortUsers.js";
import addArrayOfUsersToDB from "./scripts/writeUsersToDB/addArrayOfUsersToDB.js";

const scriptTostart = process.argv[2];

switch (scriptTostart) {
    case "1":
        createTable();
        break;
    case "2":
        createAndSendUser(...process.argv.slice(3));
        break;
    case "3":
        getUniqueSortUsers();
        break;
    case "4":
        addArrayOfUsersToDB();
        break;
    case "5":
        getMaleF();
        break;
    case "6":
        getMaleF_v2();
        break;
    default:
        console.log(`Нет такой команды: ${scriptTostart}`);
        break;
}
