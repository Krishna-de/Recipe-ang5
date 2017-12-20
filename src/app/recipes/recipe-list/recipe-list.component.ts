import { Recipe } from './../recipe.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe1', 'This is test descrption', 'http://technicallyteamann.com/wp-content/uploads/2017/03/Recipe_logo-1.jpeg'),
    new Recipe('A Test Recipe2', 'This is test descrption', 'http://technicallyteamann.com/wp-content/uploads/2017/03/Recipe_logo-1.jpeg'),
    new Recipe('A Test Recipe3', 'This is test descrption', 'http://technicallyteamann.com/wp-content/uploads/2017/03/Recipe_logo-1.jpeg')
  ];
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe){
      this.recipeWasSelected.emit(recipe);
  }
}
