import { NgIf } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatFormFieldControl, MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-event-model',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf,MatInputModule   ,    
    MatDialogModule,
    MatButton,
    ReactiveFormsModule, MatFormFieldModule],
  templateUrl: './event-model.component.html',
  styleUrl: './event-model.component.scss'
})
export class EventModelComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder){}

  eventForm!: FormGroup 

  ngOnInit(){
    this.eventForm = this.fb.group({
      name: [this.data.name, [Validators.required]],
      rank: [this.data.rank, [Validators.required]],
    })
  }

}
