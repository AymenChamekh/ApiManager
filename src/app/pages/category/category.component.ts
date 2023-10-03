import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/entities/category';
import { CategoryServiceService } from 'src/app/services/category-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{

  submited = false;
  category : Category = new Category();
  constructor(private categoryService : CategoryServiceService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit(){

    this.submited=true;


  }



}
