import { AbstractController } from "../util/rest/controller";
import { NextFunction, Response } from "express";
import RequestWithUser from "../util/rest/request";
import APP_CONSTANTS, { roles } from "../constants";
import { EmployeeService } from "../service/EmployeeService";
import { DepartmentService } from "../service/DepartmentService";
import authorize from "../middleware/authorizationMiddleware";
import validationMiddleware from "../middleware/validationMiddleware";
import { departmentDto } from "../dto/departmentDto";

class DepartmentController extends AbstractController {
  constructor(private DepartmentService: DepartmentService) {
    super(`${APP_CONSTANTS.apiPrefix}/department`);
    this.initializeRoutes();
  }
  protected initializeRoutes() {
    this.router.get(`${this.path}`,authorize([roles.admin,roles.engineer,roles.hr,roles.manager]),this.getAllDepartment);
    this.router.post(`${this.path}`,authorize([roles.admin,roles.hr]), validationMiddleware(departmentDto,APP_CONSTANTS.body), this.postDepartment);
  }
  private getAllDepartment = async (request: RequestWithUser, response: Response, next: NextFunction) => {
    try {
      response.status(200);
      response.send(await this.DepartmentService.getAllDepartment());
    } catch (error) {
      return next(error);
    }
  }

  private postDepartment = async (request: RequestWithUser, response: Response, next: NextFunction) => {
    try {
      response.status(200);
      response.send(await this.DepartmentService.postDepartment(request.body));
    } catch (error) {
      return next(error);
    }
  }
}

export default DepartmentController;
