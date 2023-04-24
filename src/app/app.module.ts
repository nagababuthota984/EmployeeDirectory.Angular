import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/sidenav/sidenav.component';
import { FiltersComponent } from './components/filters/filters.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { ButtonsfilterComponent } from './components/buttonsfilter/buttonsfilter.component';
import { CardComponent } from './components/card/card.component';
import { EmployeeService } from './services/employee.service';
import { ApiService } from './services/api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiConfig } from './config/apiconfig';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    FiltersComponent,
    EmployeeListComponent,
    ButtonsfilterComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [EmployeeService,ApiService,ApiConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
