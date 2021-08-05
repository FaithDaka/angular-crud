import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataType } from 'src/app/dataType';
import { CrudService } from 'src/app/services/crud-service.service';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit {
  data: dataType[] = [];
  id:number = 1;
  name= this.data[this.id].name;
  number=this.data[this.id].number;
  location=this.data[this.id].location;

  constructor(private crudServices: CrudService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.crudServices.getData()
    .subscribe((list) => (this.data = list ));
    this.route.queryParams.subscribe(params => {
      this.id = params['id']
    });
  }

  onSubmit(){
    if(!this.name || !this.number || !this.location){
      alert('All fields are required.')
      return;
    }
    const newCompany = {
      id: this.id,
      name: this.name,
      number: this.number,
      location : this.location
    }
    this.crudServices.updateData(this.id, newCompany)
    .subscribe(
      (res) => (
        console.log(res)
       ));

    this.name = '';
    this.number = '';
    this.location = '';
  }
}
