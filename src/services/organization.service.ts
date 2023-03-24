import httpRequest from '@/utils/http-request'
import {CreateUser, UpdateUser, User} from "@/entity/user";
import {Organization} from "@/entity/organization";

class OrganizationService{
    findAll(){
        return httpRequest.get<any,Organization[]>('/Organization');
    }
    findOne(id:string){
        return httpRequest.get<any,Organization>(`/Organization/${id}`);
    }
    create(organization:any){
        return httpRequest.post<CreateUser,Organization>('/Organization',organization);
    }
    update(id:string,organization:any){
        return httpRequest.put<UpdateUser,Organization>(`/Organization/${id}`,organization);
    }
    delete(id:string){
        return httpRequest.delete<number,User>(`/Organization/${id}`);
    }
}
export const organizationService = new OrganizationService();