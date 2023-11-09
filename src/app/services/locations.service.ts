import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  private url: string = 'http://35.180.118.213/';
  private api: string = 'api/v1/';
  private allLocations: string = 'poblaciones';

  constructor(private http: HttpClient) {}
  
  getAllLocations(){

    return this.http.get(this.url+this.api+this.allLocations);
  }
}
