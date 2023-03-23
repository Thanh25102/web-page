import httpRequest from '@/utils/http-request'
import {CreateUser, UpdateUser, User} from "@/entity/user";

class UserService{
    findAll(){
        return httpRequest.get<User>('/user');
    }
    findOne(id:string){
        return httpRequest.get<User>(`/user/${id}`);
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
}