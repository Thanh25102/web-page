import {useContext} from "react";
import {UserContext} from "@/context/user.provider";

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) throw new Error('Hooks useUserContext is not available')
    return context;
}