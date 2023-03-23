import React, {createContext, useState} from "react";
import {ReactFCP} from "@/types/common";
import {User} from "@/entity/user";

interface IUserContextType {
    users: User[] | null;
    setUsers: (users: User[]) => void;
}

const UserProviderContext = createContext<IUserContextType | null>(null);
export const UserProvider: ReactFCP = ({children}) => {
    const [users, setUsers] = useState<User[]>([]);
    return <UserProviderContext.Provider value={{users, setUsers}}>{children}</UserProviderContext.Provider>
}