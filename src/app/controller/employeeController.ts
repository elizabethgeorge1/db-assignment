import { AbstractController } from "../util/rest/controller";
import { NextFunction, Response } from "express";
import RequestWithUser from "../util/rest/request";
import APP_CONSTANTS, { roles } from "../constants";
import { EmployeeService } from "../service/EmployeeService";
import { request } from "http";
import validationMiddleware from "../middleware/validationMiddleware";
import { CreateEmployeeDto } from "../dto/createEmployeeDto";
import authorize from "../middleware/authorizationMiddleware";
import { departmentDto } from "../dto/departmentDto"; 
import { updateEmployeeDto } from "../dto/updateEmployeeDto";


class EmployeeController extends AbstractController {
  constructor(private employeeService: EmployeeService) {
    super(`${APP_CONSTANTS.apiPrefix}/employee`);
    this.initializeRoutes();
  }
  
  // protected initializeRoutes() {
  //   this.router.get(`${this.path}`,authorize([roles.admin,roles.engineer,roles.hr,roles.manager]), this.getAllEmployees);
  //   this.router.post(`${this.path}`,authorize([roles.admin,roles.hr]), validationMiddleware(CreateEmployeeDto,APP_CONSTANTS.body), this.postEmployee);
  //   this.router.get(`${this.path}/:id`,authorize([roles.admin,roles.engineer,roles.hr,roles.manager]),this.getEmployeeById);
  //   this.router.put(`${this.path}/:id`,authorize([roles.admin,roles.hr]), validationMiddleware(updateEmployeeDto,APP_CONSTANTS.body), this.updateEmployee);
  //   this.router.delete(`${this.path}/:id`,authorize([roles.admin,roles.hr]), this.deleteEmployee);
  //   this.router.post(`${this.path}/login`,this.login
  //   );
  // }
  protected initializeRoutes() {
    this.router.get(`${this.path}`, this.getAllEmployees);
    this.router.post(`${this.path}`, this.postEmployee);
    this.router.get(`${this.path}/:empId`,this.getEmployeeById);
    this.router.put(`${this.path}/:id`, this.updateEmployee);
    this.router.delete(`${this.path}/:id`, this.deleteEmployee);
    this.router.post(`${this.path}/login`,this.login
    );
  }
  private getAllEmployees = async (request: RequestWithUser, response: Response, next: NextFunction) => {
    try {
      response.status(200);
      response.send(await this.employeeService.getAllEmployees());
    } catch (error) {
      return next(error);
    }
  }
  private postEmployee = async (request: RequestWithUser, response: Response, next: NextFunction)=>{
    try{
        const createdEmp=await this.employeeService.postEmployee(request.body);
        response.send(createdEmp);
        response.status(200);


    }catch(error){
        return next(error);
    }
  }

  private getEmployeeById = async (request: RequestWithUser, response: Response, next: NextFunction)=>{
    try{
        response.status(200);
        response.send(await this.employeeService.getEmployeeById(request.params.empId));
        // response.send(this.fmt.formatResponse(request, Date.now() - request.startTime, "OK", 1));


    }catch(error){
        return next(error);
    }
  }

  private updateEmployee = async (request: RequestWithUser, response: Response, next: NextFunction)=>{
    try{
        response.status(200);
        response.send(await this.employeeService.updateEmployee(request.params.id,request.body));

    }catch(error){
        return next(error);
    }
  }
  private deleteEmployee = async (request: RequestWithUser, response: Response, next: NextFunction)=>{
    try{
        response.status(200);
        response.send(await this.employeeService.deleteEmployee(request.params.id));

    }catch(error){
        return next(error);
    }
  }

  private login = async (
    request: RequestWithUser,
    response: Response,
    next: NextFunction
  ) => {
    const loginData = request.body;
    const loginDetail = await this.employeeService.employeeLogin(
      loginData.name,
      loginData.password
    );
    response.send(
      this.fmt.formatResponse(loginDetail, Date.now() - request.startTime, "OK")
    );
  };

}

export default EmployeeController;
