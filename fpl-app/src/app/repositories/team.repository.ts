import axios from 'axios';
import { Team } from '../models/team.model';

export class TeamRepository {
  private baseUrl: string = 'https://fantasy.premierleague.com/api/bootstrap-static';

  async getTeamByCode(teamCode: number): Promise<Team | null> {
    try {
      const response = await axios.get(this.baseUrl);
      const teams = response.data.teams;
      return teams.find((team: Team) => team.code === teamCode) || null;
    } catch (error) {
      console.error('Error fetching team:', error);
      return null;
    }
  }
}
