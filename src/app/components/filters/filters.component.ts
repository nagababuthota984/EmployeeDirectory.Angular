import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SearchFilters } from 'src/app/enums/enums';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  constructor(private empService:EmployeeService) {
   }

  searchKeyword(event:any)
  {
      this.empService.raiseSearchTextEmitter(event.target.value);
  }

  ngOnInit(): void {
  }

}
