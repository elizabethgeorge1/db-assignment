
import { IsOptional, IsString } from "class-validator";

export class updateEmployeeDto {
    @IsOptional()
    @IsString()
    public name: string;


    @IsOptional()
    @IsString()
    public departmentId: string;

    @IsOptional()
    @IsString()
    public password: string;



}