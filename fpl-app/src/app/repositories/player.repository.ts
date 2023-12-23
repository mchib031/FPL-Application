import { Player } from '../models/player.model';
import axios from 'axios';

export class PlayerRepository {
  private baseUrl: string = 'https://fantasy.premierleague.com/api/bootstrap-static';
  private liveUrl: string = 'https://fantasy.premierleague.com/api/event/gameweek-id/live';

  async getPlayerByCode(playerCode: number): Promise<Player | null> {
    try {
      const response = await axios.get(this.baseUrl);
      const players = response.data.elements;
      return players.find((player: Player) => player.code === playerCode) || null;
    } catch (error) {
      console.error('Error fetching player:', error);
      return null;
    }
  }

  async getLivePlayerStatsByGameweek(gameweekId: number): Promise<Player[] | null> {
    try {
      const response = await axios.get(`${this.liveUrl}/${gameweekId}`);
      return response.data.elements;
    } catch (error) {
      console.error('Error fetching live player stats:', error);
      return null;
    }
  }
}
