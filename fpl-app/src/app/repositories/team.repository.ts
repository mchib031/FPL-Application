import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Team } from '../models/team.model';

@Injectable({
  providedIn: 'root',
})
export class TeamRepository {
  private baseUrl: string = 'http://localhost:3000/api/bootstrap-static';

  constructor(private http: HttpClient) {}

  getAllTeams(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getTeamById(teamId: number): Observable<Team | null> {
    return this.http.get<{ teams: Team[] }>(this.baseUrl)
      .pipe(
        map(response => {
          const teams: Team[] = response.teams;
          return teams.find(team => team.id === teamId) || null;
        })
      );
  }
  
  getTeamByCode(teamCode: number): Observable<Team | null> {
    return this.http.get<{ teams: Team[] }>(this.baseUrl)
      .pipe(
        map(response => {
          const teams: Team[] = response.teams;
          return teams.find(team => team.code === teamCode) || null;
        })
      );
  }
  
}
