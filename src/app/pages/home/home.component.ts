import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RatingFetchService } from '../../services/ratingfetch.service';
import { Rating } from '../../models/rating';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  isActive = false;
  service = inject(RatingFetchService);
  sortiertesRanking: [string, number][] = [];
  sieger: { name: string; platz: number; bewertung: number }[] = [];

  ngOnInit() {
    this.loadRanking();
  }

  loadRanking() {
    this.service.getRatingData().subscribe({
      next: (data: Rating[]) => {
        this.sortiertesRanking = this.service.setDozRanking(data);
        console.log(this.sortiertesRanking); // Hier kannst du die sortierten Werte sehen

        this.sieger = [
          {
            name: this.sortiertesRanking[2][0],
            platz: 3,
            bewertung: this.sortiertesRanking[2][1],
          },
          {
            name: this.sortiertesRanking[0][0],
            platz: 1,
            bewertung: this.sortiertesRanking[0][1],
          },
          {
            name: this.sortiertesRanking[1][0],
            platz: 2,
            bewertung: this.sortiertesRanking[1][1],
          },
        ];
      },
      error: (err) => {
        console.error('Fehler beim Laden der Bewertungen', err);
      },
    });
  }

  changeBoolean(event: Event) {
    this.isActive = !this.isActive;
  }
}
