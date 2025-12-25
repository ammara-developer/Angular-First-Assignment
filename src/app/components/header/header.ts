import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({  // ✅ Add this
  selector: 'app-header',
  standalone: true,  // ✅ Add this for Angular 20
  imports: [RouterLink, RouterLinkActive],  // ✅ Change RouterOutlet to RouterLink, RouterLinkActive
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
 
}