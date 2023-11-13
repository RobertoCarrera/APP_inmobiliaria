import { Component } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { CharacteristicsService } from 'src/app/services/characteristics.service';
import { LocationsService } from 'src/app/services/locations.service';
import { PropertiesService } from 'src/app/services/properties.service';
import { TermsService } from 'src/app/services/terms.service';

@Component({
  selector: 'app-usr-home',
  templateUrl: './usr-home.component.html',
  styleUrls: ['./usr-home.component.css']
})
export class UsrHomeComponent {

  properties: any = [];
  categories: any = [];
  terms: any = [];
  locations: any = [];
  characteristics: any = [];

  showMenu: boolean = true;

  constructor(
    private propertiesService: PropertiesService,
    private termsService: TermsService,
    private categoriesService: CategoriesService,
    private locationsService: LocationsService,
    private characteristicsService: CharacteristicsService,
  ){}

  ngOnInit(): void{

    this.propertiesService.getAllProperties().subscribe(result => {

      this.properties = result;
      console.log(this.properties);
    })

    this.categoriesService.getAllCategories().subscribe(result => {

      this.categories = result;
      console.log(this.categories);
    })

    this.termsService.getAllTerms().subscribe(result => {

      this.terms = result;
      console.log(this.terms);
    })

    this.locationsService.getAllLocations().subscribe(result => {

      this.locations = result;
      console.log(this.terms);
    })

    this.characteristicsService.getAllCharacteristics().subscribe(result => {

      this.characteristics = result;
      console.log(this.characteristics);
    })
  }

  toggleMenu(){

    if(this.showMenu == true){
      
      this.showMenu = false;
    }else{

      this.showMenu = true;
    }
  }

}