import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { EventModelComponent } from './model/event-model/event-model.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EventModelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app';

  constructor(private dialog: MatDialog){}

  openModel(){
    this.dialog.open( EventModelComponent, {
      data:{
        name: '',
        rank: 1
        ,onCancel: () => { this.dialog.closeAll(); },
        onConfirm: (data:any) => { console.log(data.value) }
      }
    } )
  }
}
