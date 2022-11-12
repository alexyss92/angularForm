import { Component } from '@angular/core';
import { User } from '../model/User'


//CONTROLLER
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Form Login";
  model = new User ( "", "" , "" , "" , "", "");

  onSubmit (){
    console.log(this.model);
  }
}
