import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  text = '';
  randomText = lorem.sentence();

  onInput(value : string){
    console.log(value);
    this.text = value;
  }

  compare(randomLetter: string, enteredLetter: string){
    if(!enteredLetter){
      return 'pending';
    }
    
    return randomLetter === enteredLetter ? 'correct' : 'incorrect';
  }

}
