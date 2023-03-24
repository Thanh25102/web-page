import httpRequest from '@/utils/http-request'
import {CreateUser, UpdateUser, User} from "@/entity/user";

class UserService{
    async findAll(){
        return httpRequest.get<any,User[]>('/user');
    }
    findOne(id:string){
        return httpRequest.get<any,User>(`/user/${id}`);
    }
    create(user:any){
        return httpRequest.post<CreateUser,User>('/user',user);
    }
    update(id:string,user:any){
        return httpRequest.put<UpdateUser,User>(`/user/${id}`,user);
    }
    delete(id:string){
        return httpRequest.delete<number,User>(`/user/${id}`);
    }
    deleteMany(ids:string[]){
        return httpRequest.post<any,string[]>(`/user`,ids);
    }
}
export const userService = new UserService();