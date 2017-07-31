import { Component, OnInit } from '@angular/core';
import { Recipe } from "app/models/recipe";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Name 1','Description Test 1',''),
    new Recipe('Test Name 2','Description Test 2',''),
    new Recipe('Test Name 3','Description Test 3','')
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
