import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Provider } from 'src/app/entities/provider';
import { ProviderService } from 'src/app/services/provider.service';

@Component({
  selector: 'app-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrls: ['./add-provider.component.css']
})
export class AddProviderComponent {

  provider : Provider = new Provider();

  providerForm: FormGroup;
  constructor(private fb: FormBuilder , private providerService :ProviderService, private dialog: MatDialog){
    this.providerForm = this.fb.group({
      name: ['', Validators.required],
      adress: ['', Validators.required],
      mail: ['', Validators.required],
      phone: ['', Validators.required],
      nbrAuthorisation: ['', Validators.required],
    });

  }

  openDialog(){

  }
  onSubmit(){

    if (this.providerForm.valid) {
    this.provider = this.providerForm.value;
   this.providerService.addProvider(this.provider).subscribe(data =>{
         console.log(data),
         (error:any) =>{console.log(error)}
   });
  }
}
onCancel() {
  // Implement the onCancel logic here, for example, closing the dialog
  this.dialog.closeAll(); // Assuming you are using MatDialog, adjust as needed
  console.log('Canceled');
}
}
