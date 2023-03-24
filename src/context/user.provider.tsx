import React, {createContext, useState} from "react";
import {ReactFCP} from "@/types/common";
import {User} from "@/entity/user";
import {useUserMock} from "@/_mock/user.mock";

interface IUserContextType {
    users: User[] | null;
    userSelected: User | null;
    setUserSelected: (userSelected: User) => void;
    setUsers: (users: User[]) => void;
}

export const UserContext = createContext<IUserContextType | null>(null);
export const UserProvider: ReactFCP = ({children}) => {
    const [users, setUsers] = useState<User[]>([]);
    const [userSelected, setUserSelected] = useState<User>(useUserMock(1)[0]);
    return <UserContext.Provider
        value={{users, setUsers, userSelected, setUserSelected}}>{children}</UserContext.Provider>
}