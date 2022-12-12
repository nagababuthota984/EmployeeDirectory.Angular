import { Injectable } from "@angular/core"
import { Employee } from "../models/employee"
@Injectable()

export class DataService{

    public EmployeeData:Employee[] = [
        new Employee("Aaron","Zollo","India","Sharepoint practice head","Product Engineering"),
        new Employee("Marques","Brownlee","India","Software Developer","Product Engineering"),
        new Employee("Jhonny","harris","India","Software Developer","Data & Analytics"),
        new Employee("Hans","Zimmer","India","UI Designer","HR Department"),
        new Employee("Alan","Silvestri","India","Operations Manager","Product Engineering"),
        new Employee("Christopher","Nolan","India","Lead engineer","UX Department"),
        new Employee("James","Cameroon","Seattle","Software Developer","HR Department"),
        new Employee("James","Gunn","India","Software Developer","Product Engineering"),
        new Employee("Tom","hanks","India","Software Developer","Product Engineering"),
        new Employee("Tommy","Hilfiger","Seattle","Product Manager","Data & Analytics"),
    ]
    
}