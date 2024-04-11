import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AddComponent,RouterLink,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'http-task';
 
}
