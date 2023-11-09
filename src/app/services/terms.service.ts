import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TermsService {

  private url: string = 'http://35.180.118.213/';
  private api: string = 'api/v1/';
  private allTerms: string = 'regimenes';

  constructor(private http: HttpClient) {}
  
  getAllTerms(){

    return this.http.get(this.url+this.api+this.allTerms);
  }
}
