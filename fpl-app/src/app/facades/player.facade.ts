import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../models/player.model';
import { PlayerRepository } from '../repositories/player.repository';

@Injectable({
  providedIn: 'root',
})
export class PlayerFacade {
  constructor(private playerRepository: PlayerRepository) {}

  getPlayerInfo(gameweekId: number): Observable<Player[]> {
    return this.playerRepository.getPlayerInfo(gameweekId);
  }
}
