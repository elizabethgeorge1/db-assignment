import { getConnection, ObjectLiteral } from "typeorm";
import { Department } from "../entities/Department";

export class DepartmentRespository{
    async getAllDepartment(){
         const departmentRepo = getConnection().getRepository(Department);
        return departmentRepo.find({relations:['employee']});
    }
    async postDepartment(dep: Department){
        const departmentRepo = getConnection().getRepository(Department);
       return departmentRepo.save(dep);
   }
    }