import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  private url: string = 'http://35.180.118.213/';
  private api: string = 'api/v1/';
  private properties: string = 'inmuebles';

  constructor(private http: HttpClient) {}
  
  getAllProperties(){

    return this.http.get(this.url+this.api+this.properties);
  }
}