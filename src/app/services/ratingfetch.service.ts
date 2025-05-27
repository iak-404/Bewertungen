import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rating } from '../models/rating';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RatingFetchService {
  constructor(private http: HttpClient) {}

  getRatingData(): Observable<Rating[]> {
    return this.http.get<any>('https://iak404.de/api/Bewertung/', {});
  }

  setRatingData(data: Rating) {
    return this.http.post<Rating[]>('https://iak404.de/api/Bewertung/', data);
  }

  setDozRanking(data: Rating[]): [string, number][] {
    const ranking: { [key: string]: number } = {};
    const counts: { [key: string]: number } = {};

    data.forEach((el) => {
      const name = el.dozent;
      const sterne = Number(el.sterne);
      if (!ranking[name]) {
        ranking[name] = 0;
        counts[name] = 0;
      }
      ranking[name] += sterne;
      counts[name] += 1;
    });

    const durchschnitt: { [key: string]: number } = {};
    for (const name in ranking) {
      durchschnitt[name] = parseFloat(
        (ranking[name] / counts[name]).toFixed(1)
      );
    }

    return Object.entries(durchschnitt).sort((a, b) => b[1] - a[1]);
  }
}
