import { Component, OnInit } from '@angular/core';
import { PropertiesService } from 'src/app/services/properties.service';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit{

  properties: any = [];

  constructor(private propertiesService: PropertiesService){}

  ngOnInit(): void{

    this.propertiesService.getAllProperties().subscribe(result => {

      this.properties = result;
      console.log(this.properties);
    })
  }
}