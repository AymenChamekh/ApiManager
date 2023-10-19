import { Component } from '@angular/core';
import { FormBuilder, FormGroup , Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddProviderComponent } from '../add-provider/add-provider.component';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent {

  constructor(public dialog: MatDialog){}


  openDialogAddProvider():void{

    let dialogRef = this.dialog.open(AddProviderComponent);
    dialogRef.afterClosed().subscribe(result =>{
      console.log('the dialog was closed',result);
    });
  }

}
