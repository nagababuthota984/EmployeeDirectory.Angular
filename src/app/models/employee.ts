export class Employee{
    public FirstName:string;
    public LastName:string;
    public PreferredName:string;
    public Office:string;
    public JobTitle:string;
    public Department:string;
    constructor(firstName:string,lastName:string,office:string,jobTitle:string,department:string)
    {
        this.FirstName = firstName;
        this.LastName = lastName;
        this.Office = office;
        this.JobTitle = jobTitle;
        this.Department = department;
        this.PreferredName = `${this.FirstName} ${this.LastName}`
    }

}