import { Player } from "../models/player.model";
import { PlayerRepository } from "../repositories/player.repository";

export class PlayerFacade {
  private playerRepository: PlayerRepository = new PlayerRepository();

  async getPlayerByCode(playerCode: number): Promise<Player | null> {
    return this.playerRepository.getPlayerByCode(playerCode);
  }

  async getLivePlayerStatsByGameweek(gameweekId: number): Promise<Player[] | null> {
    return this.playerRepository.getLivePlayerStatsByGameweek(gameweekId);
  }

}
