import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { AbstractEntity } from "./AbstractEntity";
import { Department } from "./Department";
import { EmployeeAddress } from "./EmployeeAddress";

@Entity("employee")
export class Employee extends AbstractEntity {
    // @PrimaryGeneratedColumn("uuid")
    // public id: string;

    @Column({ nullable: false })
    public empName: string;

    @PrimaryColumn({ nullable: false })
    public empId: string;

    @Column({ nullable: true })
    public empJoiningDate: string;

    @Column({ nullable: true })
    public empExperience: string;

    @Column({ nullable: true })
    public empAddress: string;

    @Column({ nullable: true })
    public empUpload: string;

    @Column({ nullable: true })
    public empStatus: string;

    @Column({ nullable: true })
    public empRole: string;

    // @ManyToOne(() => Department, { cascade: true })
    // @JoinColumn()
    // public department: Department;

    // @Column({ nullable: true })
    // public departmentId: string;

    // @Column({nullable: true})
    // public password: string;

    // @Column({nullable: true})
    // public role: string;

    // @OneToOne(()=>EmployeeAddress,{cascade:true})
    // @JoinColumn()
    // public employeeAddress: EmployeeAddress

    
}