import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from './../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'https://www.bbcgoodfood.com/sites/default/files/spanish-meatball-butter-bean-stew_0.jpg'),
    new Recipe('Another test recipe', 'This is another test', 'https://www.thebutterhalf.com/wp-content/uploads/2018/03/easy-baked-frittata-recipe-spinach-gluten-free-2.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
