import dotenv from "dotenv";
dotenv.config();

export default class User {
    constructor(fullName, dob, gender) {
        this.fullName = fullName;
        this.dob = dob;
        this.gender = gender;
    }

    getAge() {
        const now = new Date();
        const today = new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate()
        );
        const dob = new Date(Date.parse(this.dob));
        const birthday = new Date(
            today.getFullYear(),
            dob.getMonth(),
            dob.getDate()
        );
        let age = today.getFullYear() - dob.getFullYear();
        if (birthday > today) {
            age--;
        }
        return age;
    }
}
