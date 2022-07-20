import { getConnection, ObjectLiteral } from "typeorm";
import { Department } from "../entities/Department";
import { Employee } from "../entities/Employee";

export class EmployeeRespository{
    async getAllEmployees(){
        const employeeRepo = getConnection().getRepository(Employee);
        const ret= await employeeRepo.find();
        return ret
    }
    async postEmployee(emp:Employee){
        const employeeRepo = getConnection().getRepository(Employee);
    const re= await employeeRepo.save(emp);
        return re;
    }

    async getEmployeeById(empId: string){
        const employeeRepo = getConnection().getRepository(Employee);
        return await employeeRepo.findOne(empId);
        
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
        return await employeeRepo.update({empId: id},update);
        
    }

    async deleteEmployee(id: string){
        const employeeRepo = getConnection().getRepository(Employee);
        return await employeeRepo.softDelete(id);
        
    }
   
   
    }