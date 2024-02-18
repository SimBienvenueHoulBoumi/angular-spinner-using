import { Component, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-two',
  standalone: true,
  imports: [RouterLink, MatProgressSpinnerModule],
  templateUrl: './page-two.component.html',
  styleUrl: './page-two.component.css',
})
export class PageTwoComponent implements OnInit{
  isLoading: boolean = false;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = true;
    }, 3000);
  }
}
