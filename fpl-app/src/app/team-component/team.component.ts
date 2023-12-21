
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  players: any[] = [
    { name: 'Player 1', position: { top: '50%', left: '30%' } },
    { name: 'Player 2', position: { top: '70%', left: '60%' } },
  ];

  viewMode: 'pitch' | 'list' = 'pitch';

  constructor() { }

  ngOnInit(): void {
  }
}
