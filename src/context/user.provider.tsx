import React, {createContext, useEffect, useState} from "react";
import {ReactFCP} from "@/types/common";
import {User} from "@/entity/user";
import {Role} from "@/entity/role";
import {Organization} from "@/entity/organization";
import {userService} from "@/services/user.service";
import {roleService} from "@/services/role.service";
import {organizationService} from "@/services/organization.service";
import {useUserMock} from "@/_mock/user.mock";

interface IUserState {
    //include state
    users: User[];
    userSelected?: User;
    roles: Role[];
    organizations: Organization[];
    loading: Boolean;
    openModal: Boolean;
}

interface IUserContextType {
    state: IUserState;
    setUsers: (users: User[]) => void;
    setRoles: (roles: Role[]) => void;
    setOrganizations: (organizations: Organization[]) => void;
    setLoading: (loading: Boolean) => void;
    setOpenModal: (openModel: Boolean) => void;
    setUserSelected: (userSelected: User) => void;
}
export const UserContext = createContext<IUserContextType | null>(null);
export const UserProvider: ReactFCP = ({children}) => {
    const [state, setState] = useState<IUserState>({
        users: useUserMock(10),
        roles: [],
        organizations: [],
        loading: false,
        openModal: false,
    });
    // useEffect(() => {
    //     (async () => {
    //         const users = await userService.findAll();
    //         const roles = await roleService.findAll();
    //         const organizations = await organizationService.findAll();
    //
    //         setUsers(users);
    //         setRoles(roles);
    //         setOrganizations(organizations);
    //     })();
    // }, []);
    const setUsers = (users: User[]) => {
        setState((prev) => ({...prev, users}));
    };
    const setRoles = (roles: Role[]) => {
        setState((prev) => ({...prev, roles}));
    };
    const setOrganizations = (organizations: Organization[]) => {
        setState((prev) => ({...prev, organizations}));
    };
    const setLoading = (loading: Boolean) => {
        setState((prev) => ({...prev, loading}));
    };
    const setOpenModal = (openModal: Boolean) => {
        setState((prev) => ({...prev, openModal}));
    };
    const setUserSelected = (userSelected: User) => {
        setState((prev) => ({...prev, userSelected}));
    };
    return (
        <UserContext.Provider value={{state, setUsers, setRoles, setOrganizations, setLoading, setOpenModal, setUserSelected}}>
            {children}
        </UserContext.Provider>
    );
}