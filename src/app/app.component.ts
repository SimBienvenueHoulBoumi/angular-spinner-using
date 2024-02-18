import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatProgressSpinnerModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Notez que c'est styleUrls, pas styleUrl
})
export class AppComponent {}
