import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { Department, JobTitle } from 'src/app/models/enums/enums';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() public employee!: Employee;
  constructor() {
  }

  ngOnInit(): void {
  }

  private Departments = [
    "Product Engineering",
    "Data Analytics",
    "M365",
    "Human Resources",
    "Sales",
    "PreSales",
    "BusinessAnalysis",
  ]

  private JobTitles = [
    "Junior Software Developer",
    "Software Developer",
    "Senior Software Developer",
    "Lead Developer",
    "Solution Architect",
    "Associate Engineering Manager",
    "Managing Director",
    "Office Staff",
  ]

  getDetailedDepartment(dept: Department): string {
    return this.Departments[dept];
  }
  getDetailedJobTitle(jobTitle: JobTitle): string {
    return this.JobTitles[jobTitle];
  }
}
