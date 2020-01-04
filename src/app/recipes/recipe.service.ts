import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "Tasty Schnitzel",
      "A super Tasty Schnitzel. Just Awesome!",
      "https://media.gettyimages.com/photos/meat-schnitzel-french-fries-and-salad-picture-id185075712?s=2048x2048",
      [new Ingredient("Meat", 1), new Ingredient("French fries", 20)]
    ),
    new Recipe(
      "Big Fat Burger",
      "What else you need to say?",
      "https://media.gettyimages.com/photos/closeup-of-burger-picture-id763260055?s=2048x2048",
      [new Ingredient("Buns", 2), new Ingredient("Meat", 1)]
    )
  ];

  constructor(private shoppingListService:ShoppingListService) {
    
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index:number) {
    console.log(index)
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
