import { Department, JobTitle, Office } from './enums/enums';

export class Employee {
  public Id: string;
  public FirstName: string;
  public LastName: string;
  public PreferredName: string;
  public email: string;
  public contactNumber: string;
  public Office: Office;
  public JobTitle: JobTitle;
  public Department: Department;
  constructor(
    Id: string,
    firstName: string,
    lastName: string,
    email: string,
    contactNumber: string,
    jobTitle: JobTitle,
    department: Department,
    office: Office
  ) {
    this.FirstName = firstName;
    this.Id = Id;
    this.LastName = lastName;
    this.Office = office;
    this.email = email;
    this.JobTitle = jobTitle;
    this.Department = department;
    this.contactNumber = contactNumber;
    this.PreferredName = `${this.FirstName} ${this.LastName}`;
  }
}
