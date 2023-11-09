import { Component } from '@angular/core';
import { PropertiesService } from 'src/app/services/properties.service';

@Component({
  selector: 'app-usr-home',
  templateUrl: './usr-home.component.html',
  styleUrls: ['./usr-home.component.css']
})
export class UsrHomeComponent {

  properties: any = [];

  constructor(private propertiesService: PropertiesService){}

  ngOnInit(): void{

    this.propertiesService.getAllProperties().subscribe(result => {

      this.properties = result;
      console.log(this.properties);
    })
  }

}