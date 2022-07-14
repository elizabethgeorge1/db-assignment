
import { Type } from "class-transformer";
import { IsArray, IsNumber, IsString, ValidateNested } from "class-validator";
import { ObjectLiteral } from "typeorm";
import { departmentDto } from "./departmentDto";
import { employeeAddressDto } from "./employeeAddressDto";

export class CreateEmployeeDto {
    @IsString()
    public name: string;

    @IsString()
    public departmentId: string;

    @IsString()
    public password: string;


    @ValidateNested({each:true})
    @Type(()=> employeeAddressDto)
    public employeeAddress: employeeAddressDto

    @ValidateNested({each:true})
    @Type(()=> departmentDto)
    public department: departmentDto

}