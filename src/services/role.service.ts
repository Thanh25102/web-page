import httpRequest from '@/utils/http-request'
import {Role} from "@/entity/role";
import {CreateUser, UpdateUser} from "@/entity/user";

class RoleService{
    findAll(){
        return httpRequest.get<any,Role[]>('/Organization');
    }
    findOne(id:string){
        return httpRequest.get<any,Role>(`/role/${id}`);
    }
    create(role:any){
        return httpRequest.post<CreateUser,Role>('/role',role);
    }
    update(id:string,role:any){
        return httpRequest.put<UpdateUser,Role>(`/role/${id}`,role);
    }
    delete(id:string){
        return httpRequest.delete<number,Role>(`/role/${id}`);
    }
}
export const roleService = new RoleService()