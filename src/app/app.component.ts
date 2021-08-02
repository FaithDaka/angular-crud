import { Component, Input } from '@angular/core';
import { Data } from './utils/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() data= Data;
  title: string = 'Welcome to Utility Dashboard';
}
