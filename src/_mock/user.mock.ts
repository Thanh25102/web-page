import {User} from "@/entity/user";
import {v4 as uuidv4} from 'uuid';
import {faker} from "@faker-js/faker";

export const useUserMock = (num: number) => {
    const users: User[] = [];
    for (let i = 0; i < num; i++) {
        const code = `CB${uuidv4()}`;
        users.push({
            id: faker.datatype.uuid(),
            lastName: faker.name.lastName(),
            firstName: faker.name.firstName(),
            phone: faker.phone.number(),
            docType: 'User',
            code: code,
            email: faker.internet.email(),
            jobPositionName: faker.name.jobTitle(),
            username: faker.internet.userName(),
            password: faker.internet.password(),
            workUnitId: faker.datatype.uuid(),
        });
    }
    return users
}