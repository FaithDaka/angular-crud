import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faTrashAlt, faEdit, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import { CrudService } from './services/crud-service.service';

import { AppComponent } from './app.component';
import { TableViewComponent } from './components/table-view/table-view.component';


@NgModule({
  declarations: [
    AppComponent,
    TableViewComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary) {
    library.addIcons(faEdit, faPlusCircle, faTrashAlt);
  }
}
