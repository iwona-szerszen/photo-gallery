import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(private categoriesService: CategoriesService) { }

  newCategoryName = '';

  categoriesList$ = this.categoriesService.categories$;

  ngOnInit() {
  }

  onAddNewCategory(name: string) {
    this.categoriesService.newCategory$.next(name);
    this.newCategoryName = '';
  }

  onCategoryClick(categoryID: string) {
    this.categoriesService.activeCategory$.next(categoryID);
  }
}

