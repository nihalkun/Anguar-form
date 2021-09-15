import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form';

  userModel = new User('Nihal', 'sec 66', 'Noida', 'UP', 52214, 85422222211, '12/4/2002','nihalkumarbhu3210@gmail.com' );

  onSubmit(){
    console.log(this.userModel);
  }
}
