import { Component, Input } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { CharacteristicsService } from 'src/app/services/characteristics.service';
import { LocationsService } from 'src/app/services/locations.service';
import { TermsService } from 'src/app/services/terms.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent{

  showFilters: boolean = false;
  @Input() showTerms: boolean = false;
  @Input() showCategories: boolean = false;
  @Input() showLocations: boolean = false;
  @Input() showCharacteristics: boolean = false;
  @Input() terms: any = [];
  @Input() categories: any = [];
  @Input() locations: any = [];
  @Input() characteristics: any = [];

  constructor(
    private termsService: TermsService,
    private categoriesService: CategoriesService,
    private locationsService: LocationsService,
    private characteristicsService: CharacteristicsService
  ){}
  // Función para mostrar|esconder los diferentes filtros. Debería añadirla al 
  // conjunto de la app para que se esconda al clickar fuera.
  // Quizás, incluso, quitarlo cada vez que se marca algo y carga el contenido
  changeFiltersView(){
  
    if(this.showFilters == true)
    {

      this.showFilters = false;
    }else{
      
      this.showFilters = true;
    }
  }
}