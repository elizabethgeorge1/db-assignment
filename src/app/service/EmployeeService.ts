import { plainToClass } from "class-transformer";
import { ObjectLiteral } from "typeorm";
import { Employee } from "../entities/Employee";
import EntityNotFoundException from "../exception/EntityNotFoundException";
import HttpException from "../exception/HttpException";
import { EmployeeRespository } from "../repository/EmployeeRepository";
import { ErrorCodes } from "../util/errorCode";
import bcrypt from "bcrypt";
import IncorrectUsernameOrPasswordException from "../exception/IncorrectUsernameOrPasswordException";
import UserNotAuthorizedException from "../exception/UserNotAuthorizedException";
import jsonwebtoken from "jsonwebtoken";
import { CreateEmployeeDto } from "../dto/createEmployeeDto";
import { Department } from "../entities/Department";

export class EmployeeService{
    constructor(private employeeRepo: EmployeeRespository){}
    async getAllEmployees(){
        return await this.employeeRepo.getAllEmployees();
    }
  
    async postEmployee(emp:Employee){
        return await this.employeeRepo.postEmployee(emp);
    }

    async getEmployeeById(id: string){

        const resp= await this.employeeRepo.getEmployeeById(id);
        if(!resp){
            throw new EntityNotFoundException(ErrorCodes.USER_WITH_ID_NOT_FOUND)
        }
        return resp;
    }

    async updateEmployee(id:string, update: Employee){
        return await this.employeeRepo.updateEmployee(id, update);
    }
    async deleteEmployee(id:string){
        return await this.employeeRepo.deleteEmployee(id);
    }

    public async createEmployee(employeeDetails: any) {
        try {
            const newEmployee = plainToClass(Employee, {
                name: employeeDetails.name,
                password: employeeDetails.password ?  await bcrypt.hash(employeeDetails.password, 10): '',
                departmentId: employeeDetails.departmentId,
                employeeAddress: employeeDetails.employeeAddress,
                // departmentName:employeeDetails.department.name
            });
            const save = await this.employeeRepo.postEmployee(newEmployee);
            return save;
        } catch (err) {
            // throw new HttpException(400, "Failed to create employee");
        }
    }

    public employeeLogin = async (
        name: string,
        password: string
      ) => {
        const employeeDetails = await this.employeeRepo.getEmployeeByName(
          name
        );
        if (!employeeDetails) {
          throw new UserNotAuthorizedException();
        }
        const validPassword = await bcrypt.compare(password, employeeDetails.password);
        if (validPassword) {
          let payload = {
            "custom:id": employeeDetails.id,
            "custom:name": employeeDetails.name,
            "custom:role":employeeDetails.role,
          };
          const token = this.generateAuthTokens(payload);

          return {
            idToken: token,
            employeeDetails,
          };
        } else {
          throw new IncorrectUsernameOrPasswordException();
        }
      };

     private generateAuthTokens = (payload: any) => {
        return jsonwebtoken.sign(payload, process.env.JWT_TOKEN_SECRET, {
          expiresIn: process.env.ID_TOKEN_VALIDITY,
        });
      };  
    }