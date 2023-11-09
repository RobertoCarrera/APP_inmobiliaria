import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OwnersService {

  private url: string = 'http://35.180.118.213/';
  private api: string = 'api/v1/';
  private allOwners: string = 'propietarios';

  constructor(private http: HttpClient) {}
  
  getAllOwners(){

    return this.http.get(this.url+this.api+this.allOwners);
  }
}
