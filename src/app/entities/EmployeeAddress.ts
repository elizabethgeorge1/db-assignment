import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { AbstractEntity } from "./AbstractEntity";
import { Employee } from "./Employee";

@Entity("employeeAddress")
export class EmployeeAddress extends AbstractEntity {
    @PrimaryColumn()
    public id: string;

    @Column({ nullable: false })
    public city: string;

    @Column({nullable: false})
    public state: string;



}