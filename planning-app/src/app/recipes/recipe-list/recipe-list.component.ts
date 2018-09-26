import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "Test One",
      "Splendid",
      "https://pbs.twimg.com/profile_images/920646353889480705/dWNGt8S9_400x400.jpg"
    ),
    new Recipe(
      "Test Two",
      "Shakala",
      "https://pbs.twimg.com/profile_images/920646353889480705/dWNGt8S9_400x400.jpg"
    )
  ];

  @Output()
  itemClicked = new EventEmitter<Recipe>();

  constructor() {}

  ngOnInit() {}
  // Emit the received data to the parent component
  onItemClick(recipeData: Recipe) {
    this.itemClicked.emit(recipeData);
  }
}
