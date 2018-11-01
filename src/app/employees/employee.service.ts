import { Injectable } from "@angular/core";
import { Employee } from "../models/employee.model";

@Injectable()
export class EmployeeService {

    private listEmployees: Employee[] =
        [
            {
                id: 1,
                name: 'Jayraj Goswami',
                gender: 'Male',
                email: 'Jayraj@123.com',
                phoneNumber: 1234567890,
                contactPreference: 'phone',
                dateofBirth: new Date('04/24/1984'),
                department: '1',
                isActive: true,
                photoPath: 'assets/images/man.jpg',
                password: '123',
                confirmPassword: '123'
            }, {
                id: 2,
                name: 'Paresh Patel',
                gender: 'Male',                
                email: 'Paresh@123.com',
                phoneNumber: 1234567890,
                contactPreference: 'phone',
                dateofBirth: new Date('10/25/1990'),
                department: '2',
                isActive: true,
                photoPath: 'assets/images/man2.jpeg',
                password: '123',
                confirmPassword: '123'
            }, {
                id: 3,
                name: 'Ajay Patel',
                gender: 'Male',                
                email: 'Ajay@123',
                phoneNumber: 1234567890,
                contactPreference: 'phone',
                dateofBirth: new Date('10/25/1990'),
                department: '3',
                isActive: true,
                photoPath: 'assets/images/man3.jpeg',
                password: '123',
                confirmPassword: '123'
            },
            {
                id: 4,
                name: 'Vaibhav Desai',
                gender: 'Male',               
                email: 'Vaibhav@123',
                phoneNumber: 1234567890,
                contactPreference: 'phone',
                dateofBirth: new Date('10/25/1990'),
                department: '4',
                isActive: true,
                photoPath: 'assets/images/man4.jpeg',
                password: '123',
                confirmPassword: '123'
            }
        ];


    getEmployees(): Employee[] {
        return this.listEmployees;
    }
    save(employee: Employee) {
        this.listEmployees.push(employee);

    }

}