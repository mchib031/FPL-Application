import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from '../models/player.model';

@Injectable({
  providedIn: 'root',
})
export class PlayerRepository {
  private baseUrl = 'https://fantasy.premierleague.com/api';

  constructor(private http: HttpClient) {}

  getPlayerInfo(gameweekId: number): Observable<Player[]> {
    const url = `${this.baseUrl}/event/${gameweekId}/live/`;
    return this.http.get<Player[]>(url);
  }

}
