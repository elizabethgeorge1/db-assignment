import { ObjectLiteral } from "typeorm";
import { Department } from "../entities/Department";
import { DepartmentRespository } from "../repository/DepartmentRepository";

export class DepartmentService{
    constructor(private departmentRepo: DepartmentRespository){}
    async getAllDepartment(){
        return await this.departmentRepo.getAllDepartment();
    }

    async postDepartment(dep:Department){
        return await this.departmentRepo.postDepartment(dep);
    }
   
    }
    
    