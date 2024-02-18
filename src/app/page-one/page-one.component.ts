import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@Component({
  selector: 'app-page-one',
  standalone: true,
  imports: [RouterLink,MatProgressSpinnerModule],
  templateUrl: './page-one.component.html',
  styleUrl: './page-one.component.css',
})
export class PageOneComponent implements OnInit{
  isLoading: boolean = false;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = true;
    }, 3000);
  }
}
