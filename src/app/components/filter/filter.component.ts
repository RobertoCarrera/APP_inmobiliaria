import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  showFilters: boolean = false;

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
