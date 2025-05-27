import { Component, inject, OnInit } from '@angular/core';
import { RatingFetchService } from '../../services/ratingfetch.service';
import { Rating } from '../../models/rating';

@Component({
  selector: 'app-jacques',
  imports: [],
  templateUrl: './jacques.component.html',
  styleUrl: './jacques.component.scss',
})
export class JacquesComponent implements OnInit {
  private audio = new Audio('assets/sounds/dumm.mp3');
  private service = inject(RatingFetchService);
  rating: Rating[] = [];

  ngOnInit(): void {
    this.audio.play();
    this.audio.volume = 0.5;
    this.getRank();
  }

  getRank() {
    this.service.getRatingData().subscribe({
      next: (data: Rating[]) => {
        this.rating = data.slice(-10);
      },
    });
  }
}
