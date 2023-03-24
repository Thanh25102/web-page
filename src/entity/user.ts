export class User {
    id: string;
    docType: string;
    firstName: string;
    jobPositionName: string;
    code:string;
    phone: string;
    lastName: string;
    email: string;
    username: string;
    password: string;
    workUnitId: string;

    constructor(id: string, docType: string, firstName: string, jobPositionName: string, code:string, phone: string, lastName: string, email: string, username: string, password: string, workUnitId: string) {
        this.id = id;
        this.docType = docType;
        this.firstName = firstName;
        this.jobPositionName = jobPositionName;
        this.code = code;
        this.phone = phone;
        this.lastName = lastName;
        this.email = email;
        this.username = username;
        this.password = password;
        this.workUnitId = workUnitId;
    }
}
export class CreateUser{
    firstName: string;
    jobPositionName: string;
    phone: string;
    code:string;
    lastName: string;
    email: string;
    username: string;
    password: string;
    workUnitId: string;

    constructor(firstName: string, jobPositionName: string, code:string, phone: string, lastName: string, email: string, username: string, password: string, workUnitId: string) {
        this.firstName = firstName;
        this.jobPositionName = jobPositionName;
        this.phone = phone;
        this.lastName = lastName;
        this.code = code;
        this.email = email;
        this.username = username;
        this.password = password;
        this.workUnitId = workUnitId;
    }
}
export class UpdateUser extends User{}