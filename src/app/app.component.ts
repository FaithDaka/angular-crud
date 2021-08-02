import { Component, OnInit } from '@angular/core';
import { dataType } from './dataType';
import { CrudService } from './services/crud-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  data: dataType[] = [];
  title: string = 'Welcome to Utility';

  constructor(private crudServices: CrudService){ }

  ngOnInit(): void {
    console.log('data retrieved');
    this.crudServices.getData()
    .subscribe((list) => (this.data = list ));
  }

  handleDelete(data: dataType){
    this.crudServices.handleDelete(data)
    .subscribe(() => (this.data = this.data.filter((x)=> x.id !== data.id) ));
  }
}
