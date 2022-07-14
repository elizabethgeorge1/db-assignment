import { getConnection, ObjectLiteral } from "typeorm";
import { Employee } from "../entities/Employee";

export class EmployeeRespository{
    async getAllEmployees(){
        const employeeRepo = getConnection().getRepository(Employee);
        const ret= await employeeRepo.find({relations:['department','employeeAddress']});
        return ret
    }
    async postEmployee(emp:Employee){
        const employeeRepo = getConnection().getRepository(Employee);
    const re= await employeeRepo.save(emp);
        return re;
    }

    async getEmployeeById(id: string){
        const employeeRepo = getConnection().getRepository(Employee);
        return await employeeRepo.findOne(id);
        
    }

    public async getEmployeeByName(name: string) {
        const employeeRepo = getConnection().getRepository(Employee);
        const employeeDetail = await employeeRepo.findOne({
            where: { name: name },
        });
        return employeeDetail;
    }

    async updateEmployee(id: string,update: Employee){
        const employeeRepo = getConnection().getRepository(Employee);
        return await employeeRepo.update({id: id},update);
        
    }

    async deleteEmployee(id: string){
        const employeeRepo = getConnection().getRepository(Employee);
        return await employeeRepo.softDelete(id);
        
    }
   
   
    }