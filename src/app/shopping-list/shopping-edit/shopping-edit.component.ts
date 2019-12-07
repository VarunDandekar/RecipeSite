import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static:false}) name: ElementRef;
  @ViewChild('amountInput', {static:false}) amount: ElementRef;
  
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  addIngredient() {
    const  addeName = this.name.nativeElement.value;
    const addedAmount = this.amount.nativeElement.value;
    this.ingredientAdded.emit(new Ingredient(addeName, addedAmount));
  }
}
