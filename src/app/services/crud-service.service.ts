import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { dataType } from '../dataType';

@Injectable({
  providedIn: 'root'
})

export class CrudService {
  private apiUrl: string = 'http://localhost:5000/data';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http:HttpClient){}

  getData(): Observable<dataType[]>{
    return this.http.get<dataType[]>(this.apiUrl);
  }

  handleDelete(data: dataType): Observable<dataType>{
    const url = `${this.apiUrl}/${data.id}`;
    return this.http.delete<dataType>(url);

  }
}
