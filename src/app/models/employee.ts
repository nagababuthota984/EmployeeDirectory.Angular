import { Department, JobTitle, Office } from './enums/enums';

export class Employee {
  public id: string;
  public firstName: string;
  public lastName: string;
  public preferredName: string;
  public email: string;
  public contactNumber: string;
  public office: Office;
  public jobTitle: JobTitle;
  public department: Department;
  constructor(
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    contactNumber: string,
    jobTitle: JobTitle,
    department: Department,
    office: Office
  ) {
    this.firstName = firstName;
    this.id = id;
    this.lastName = lastName;
    this.office = office;
    this.email = email;
    this.jobTitle = jobTitle;
    this.department = department;
    this.contactNumber = contactNumber;
    this.preferredName = `${this.firstName} ${this.lastName}`;
  }
}
