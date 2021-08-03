import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  @Input() title ="";
  name= "";
  number="";
  location="";


  constructor() { }

  ngOnInit(): void {
    console.log("im open")
  }

}
