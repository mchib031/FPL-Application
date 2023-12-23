import { TeamRepository } from '../repositories/team.repository';
import { Team } from '../models/team.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeamFacade {
  private teamRepository: TeamRepository;

  constructor(private http: HttpClient) {
    this.teamRepository = new TeamRepository(http);
  }

  async getTeamByCode(teamCode: number): Promise<Team | null> {
    try {
      const team = await this.teamRepository.getTeamByCode(teamCode).toPromise();
      return team || null;
    } catch (error) {
      console.error('Error in TeamFacade:', error);
      throw error;
    }
  }

  getAllTeams(): Observable<Team[]> {
    return this.teamRepository.getAllTeams().pipe(
      map((response: any) => {
        if (response && response.teams) {
          return response.teams.map((team: any) => ({
            code: team.code,
            draw: team.draw,
            form: team.form,
            id: team.id,
            badge: this.getBadgeLogoUrl(team.code),
            loss: team.loss,
            name: team.name,
            played: team.played,
            points: team.points,
            position: team.position,
            short_name: team.short_name,
            strength: team.strength,
            team_division: team.team_division,
            unavailable: team.unavailable,
            win: team.win,
            strength_overall_home: team.strength_overall_home,
            strength_overall_away: team.strength_overall_away,
            strength_attack_home: team.strength_attack_home,
            strength_attack_away: team.strength_attack_away,
            strength_defence_home: team.strength_defence_home,
            strength_defence_away: team.strength_defence_away,
            pulse_id: team.pulse_id,
          } as Team));
        } else {
          throw new Error('Invalid response format');
        }
      }),
      catchError((error) => {
        console.error('Error loading teams:', error);
        return throwError('Failed to load teams');
      })
    );
  }

  async getTeamById(teamId: number): Promise<Team | null> {
    try {
      const team = await this.teamRepository.getTeamById(teamId).toPromise();
      return team || null;
    } catch (error) {
      console.error('Error in TeamFacade:', error);
      throw error;
    }
  }

  private getBadgeLogoUrl(teamCode: number): string {
    return `assets/pictures/badges/t${teamCode}.png`;
  }

  async getTeamData(teamCode: number): Promise<any> {
    try {
      const team = await this.teamRepository.getTeamByCode(teamCode).toPromise();
      if (team) {
        return {
          name: team.name,
          badge: this.getBadgeLogoUrl(teamCode),
          draw: team.draw,
          wins: team.win,
          losses: team.loss,
        };
      }
      return null;
    } catch (error) {
      console.error('Error in TeamFacade:', error);
      throw error;
    }
  }
}
