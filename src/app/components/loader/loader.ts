import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="loader-container">
      <div class="loader"></div>
      <p class="loader-text">Loading Dashboard...</p>
    </div>
  `,
  styles: [`
    .loader-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(255, 255, 255, 0.9); /* Slight blur/transparency */
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 2000; /* Stays above navbar */
    }

    .loader {
      width: 44.8px;
      height: 44.8px;
      color: #642b73; /* Your Purple color */
      position: relative;
      background: radial-gradient(11.2px, currentColor 94%, #0000);
    }

    .loader:before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: 50%;
      background: radial-gradient(10.08px at bottom right, #0000 94%, currentColor) top left,
                  radial-gradient(10.08px at bottom left , #0000 94%, currentColor) top right,
                  radial-gradient(10.08px at top right, #0000 94%, currentColor) bottom left,
                  radial-gradient(10.08px at top left , #0000 94%, currentColor) bottom right;
      background-size: 22.4px 22.4px;
      background-repeat: no-repeat;
      animation: loader 1.5s infinite cubic-bezier(0.3, 1, 0, 1);
    }

    .loader-text {
      margin-top: 20px;
      font-weight: 600;
      color: #c6426e; /* Your Pink color */
      letter-spacing: 1px;
    }

    @keyframes loader {
      33% { inset: -11.2px; transform: rotate(0deg); }
      66% { inset: -11.2px; transform: rotate(90deg); }
      100% { inset: 0; transform: rotate(90deg); }
    }
  `]
})
export class LoaderComponent {}