import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe Box';
  recipe: string = 'Recipe List';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  recipes: Recipe[] = [];

  addRecipe(newName: string, newIngredients: string, newDirections: string) {
    const newIngredientsArray = newIngredients.split(", ");
    const newDirectionsArray = newDirections.split(", ");
    const newRecipes = new Recipe(newName, newIngredientsArray, newDirectionsArray);
    this.recipes.push(newRecipes);
  }
}



