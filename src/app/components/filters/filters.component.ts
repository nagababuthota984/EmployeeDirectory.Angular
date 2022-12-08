import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  constructor() {
   }

  searchKeyword(event:any)
  {
      let searchText = event.target.value;
  }

  ngOnInit(): void {
  }

}
