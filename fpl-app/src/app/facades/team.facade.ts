import { Team } from "../models/team.model";
import { TeamRepository } from '../repositories/team.repository';

export class TeamFacade {
  private teamRepository: TeamRepository = new TeamRepository();

  async getTeamByCode(teamCode: number): Promise<Team | null> {
    return this.teamRepository.getTeamByCode(teamCode);
  }

}
