import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private url: string = 'http://35.180.118.213/';
  private api: string = 'api/v1/';
  private allCategories: string = 'tipos_casa';

  constructor(private http: HttpClient) {}

  getAllCategories(){

    return this.http.get(this.url+this.api+this.allCategories);
  }
}
