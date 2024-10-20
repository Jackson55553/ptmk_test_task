export default function getArrayOfUsers() {
    const F_NAMES = [
        "Fialkov Andrey Vyacheslavovich",
        "Fidelin Sergey Andreevich",
        "Frolov Aleksandr Michailovich",
        "Fanov Michail Alekseevich",
        "Fedorov Anatoliy Romanovich",
    ];

    const DOBS = [
        "2000-12-31",
        "1995-12-31",
        "2001-10-21",
        "1998-02-01",
        "2000-05-15",
    ];

    const MALE = "Male";
    const FEMALE = "Female";

    const COUNT_F_MALE = 100;
    const COUNT_OTHERS_USERS = 1000000 - COUNT_F_MALE;

    const OTHER_USERS_MALE = [
        "Andreev Ilya Ivanovich",
        "Borisov Aleksey Dmitrievich",
        "Sanov Michail Semenovich",
        "Petrov Aleksandr Aleksandrovich",
        "Zabara Roman Viktorovich",
    ];
    const OTHER_USERS_FEMALE = [
        "Andreeva Anna Ivanovna",
        "Borisova Elena Michailovna",
        "Semenova Aleksandra Leonidovna",
        "Pavlova Ekaterina Andreevna",
        "Zoro Yana Vasilievna",
    ];

    const COUNT_ITERATIONS =
        COUNT_OTHERS_USERS /
        (OTHER_USERS_MALE.length + OTHER_USERS_FEMALE.length);

    const usersToDB = [];

    for (let i = 0; i < COUNT_ITERATIONS; i++) {
        OTHER_USERS_MALE.forEach((user, index) => {
            usersToDB.push([user, DOBS[index], MALE]);
        });
        OTHER_USERS_FEMALE.forEach((user, index) => {
            usersToDB.push([user, DOBS[index], FEMALE]);
        });
    }

    for (let i = 0; i < COUNT_F_MALE / F_NAMES.length; i++) {
        F_NAMES.forEach((user, index) => {
            usersToDB.push([user, DOBS[index], MALE]);
        });
    }

    return usersToDB;
}
