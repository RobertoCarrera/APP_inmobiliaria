import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacteristicsService {

  private url: string = 'http://35.180.118.213/';
  private api: string = 'api/v1/';
  private allCharacteristics: string = 'caracteristicas';

  constructor(private http: HttpClient) {}
  
  getAllCharacteristics(){

    return this.http.get(this.url+this.api+this.allCharacteristics);
  }
}
