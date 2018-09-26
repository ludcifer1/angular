import { Component, OnInit, Input, Output,EventEmitter } from "@angular/core";
import { Recipe } from "../../recipe.model";

@Component({
  selector: "app-recipe-item",
  templateUrl: "./recipe-item.component.html",
  styleUrls: ["./recipe-item.component.css"]
})
export class RecipeItemComponent implements OnInit {
  @Input()
  recipeData: Recipe;

  @Output()
  itemClick: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  constructor() {}

  ngOnInit() {
  }

   // on item click emit the clicked item

  onClick() {
    this.itemClick.emit(this.recipeData);
  }

}
