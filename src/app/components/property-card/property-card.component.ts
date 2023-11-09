import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PropertiesService } from 'src/app/services/properties.service';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit{

  properties: any = [];
  properties_images: any = [];

  constructor(private http: HttpClient, private propertiesService: PropertiesService){}

  ngOnInit(): void{

    this.propertiesService.getAllProperties().subscribe(result => {

      this.properties = result;
      console.log(this.properties);
    })

    this.http.get('http://35.180.118.213/api/v1/imagenes').subscribe(result => {

      this.properties_images = result;
    })
  }
}