import { IsString } from "class-validator";

export class departmentDto {
    @IsString()
    public id: string;

    @IsString()
    public name: string;

}