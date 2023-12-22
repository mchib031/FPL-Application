export interface Player {
    id: number;
    stats: {
      minutes: number;
      goals_scored: number;
      assists: number;
      clean_sheets: number;
      goals_conceded: number;
    };
    explain: {
      fixture: number;
      stats: {
        identifier: string;
        points: number;
        value: number;
      }[];
    }[];
  }
  