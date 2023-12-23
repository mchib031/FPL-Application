import { Component, OnInit } from '@angular/core';
import { TeamFacade } from 'src/app/facades/team.facade';
import { Team } from 'src/app/models/team.model';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  teamData: Team[] = [];

  constructor(private teamFacade: TeamFacade) {}

  ngOnInit(): void {
    this.loadAllTeams();
  }

  private loadAllTeams() {
    this.teamFacade.getAllTeams().subscribe(
      (teams: Team[]) => {
        this.teamData = teams;
      },
      (error: any) => {
        console.error('Error loading teams:', error);
      }
    );
  }
}
