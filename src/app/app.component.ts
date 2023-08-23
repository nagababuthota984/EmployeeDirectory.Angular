import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public searchText!:string;
  constructor(){
    
  }
searchTriggered(searchKeyword: string) {
   this.searchText = searchKeyword;
}
  title = 'Technovert | Employee Directory';
}
