import { IsString } from "class-validator";

export class employeeAddressDto {
    @IsString()
    public id: string;

    @IsString()
    public city: string;

    @IsString()
    public state: string;



}