import { Component } from '@angular/core';
import Actor from './Actor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	
    title = 'NgStyle in Angular';
	
    actors: Actor[] = [
       {
      'artist': 'Michael Jackson',
      'status': 'Dead'
    },
    {
      'artist': 'Amitabh Bachchan',
      'status': 'Alive'
    },
    {
      'artist': 'Dev Anand',
      'status': 'Dead'
    },
    {
       'artist': 'A R Rehman',
        'status': 'Alive'
    }
   ];
}