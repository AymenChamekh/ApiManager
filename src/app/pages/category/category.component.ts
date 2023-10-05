import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/entities/category';
import { CategoryServiceService } from 'src/app/services/category-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{

   public categories : Category[];
  categoryForm: FormGroup;

  constructor(private fb: FormBuilder, private categoryService: CategoryServiceService) {
    this.categoryForm = this.fb.group({
      nameCategory: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getCategories();
  }

  public getCategories():void{
      this.categoryService.getCategories().subscribe(
        (response : Category[]) =>{
          this.categories =response;
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
  }







  addCategory() {
    if (this.categoryForm.valid) {
      const newCategory: Category = {
        idCategory: 0, // Assuming idCategory is assigned by the server
        nameCategory: this.categoryForm.value.nameCategory
      };

      this.categoryService.addCategory(newCategory)
        .subscribe(
          (data) => {
            // Handle success, e.g., show a success message
            console.log('Category added successfully', data);
          },
          (error) => {
            // Handle error, e.g., show an error message
            console.error('Error adding category', error);
          }
        );
    }
  }

  cancel() {
    // Implement cancel logic if needed
  }

}
