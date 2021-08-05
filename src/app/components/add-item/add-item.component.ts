import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { dataType } from 'src/app/dataType';
import { CrudService } from 'src/app/services/crud-service.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})

export class AddItemComponent implements OnInit {
  data: dataType[] = [];
  name= "";
  number="";
  location="";
  @Output() addCompany: EventEmitter<dataType> = new EventEmitter()
  @Input() title ="";

  constructor(private crudServices: CrudService) { }

  ngOnInit(): void {
    this.crudServices.getData()
    .subscribe((list) => (this.data = list ));
  }

  onSubmit(){
    if(!this.name || !this.number || !this.location){
      alert('All fields are required.')
      return;
    }
    const newCompany = {
      id: this.data.length++,
      name: this.name,
      number: this.number,
      location : this.location
    }

    this.addCompany.emit(newCompany);

    this.name = '';
    this.number = '';
    this.location = '';
  }
}
