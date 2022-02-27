import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() RecipeWasSelected = new EventEmitter<Recipe>() ;
   recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is a test', '../../../assets/images/Recipe_logo.jpeg'),
    new Recipe('Test Recipe 2', 'This a test 2', '../../../assets/images/Recipe_logo.jpeg' )
  ];
  constructor() { }
  onRecipeSelected(recipe: Recipe) {
    this.RecipeWasSelected.emit(recipe) ;
  }
  ngOnInit(): void {
  }

}
