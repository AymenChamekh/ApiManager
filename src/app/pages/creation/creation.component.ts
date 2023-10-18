import { Component } from '@angular/core';
import { FormBuilder, FormGroup , Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Provider } from 'src/app/entities/provider';
import { ProviderService } from 'src/app/services/provider.service';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent {
  provider : Provider = new Provider();
  apiForm: FormGroup;
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

   this.providerService.addProvider(this.provider).subscribe(data =>{
         console.log(data),
         (error:any) =>{console.log(error)}
   });
  }
}
}
