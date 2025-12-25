import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Home } from "./pages/home/home";


@Component({
  selector: 'app-root',
  standalone: true, // Ensure this is here if you're not using Modules
  imports: [RouterOutlet, Header, Footer, Home, ], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('student-dashboard');

  // 1. DECLARE the property here (This fixes the error)
  showLoader: boolean = true; 

  constructor() {
    // 2. The loader is already true, so we just set the timer to hide it
    setTimeout(() => {
      this.showLoader = false;
    }, 2000);
  }
}