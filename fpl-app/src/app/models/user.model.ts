export interface User {
    id: number;
    joined_time: string;
    started_event: number;
    favourite_team: number;
    player_first_name: string;
    player_last_name: string;
    player_region_id: number;
    player_region_name: string;
    player_region_iso_code_short: string;
    player_region_iso_code_long: string;
    summary_overall_points: number;
    summary_overall_rank: number;
    summary_event_points: number;
    summary_event_rank: number;
    current_event: number;
    leagues: {
      classic: League[];
      h2h: League[];
      cup: {
        matches: any[];
        status: {
          qualification_event: number | null;
          qualification_numbers: number | null;
          qualification_rank: number | null;
          qualification_state: string | null;
        };
        cup_league: number | null;
      };
      cup_matches: any[];
    };
    name: string;
    name_change_blocked: boolean;
    entered_events: number[];
    kit: string | null;
    last_deadline_bank: number;
    last_deadline_value: number;
    last_deadline_total_transfers: number;
  }
  
  interface League {
    id: number;
    name: string;
    short_name: string | null;
    created: string;
  }

  