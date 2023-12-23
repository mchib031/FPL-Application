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
  leagues: {
    classic: League[];
    h2h: League[];
    cup: Cup;
    cup_matches: CupMatch[];
  };
  name: string;
}

interface League {
  id: number;
  name: string;
  short_name: string;
}

interface Cup {
  matches: any[];
  status: {
    qualification_event: number | null;
    qualification_numbers: number[] | null;
    qualification_rank: number | null;
    qualification_state: string | null;
  };
  cup_league: number | null;
}

interface CupMatch {
  id: number;
  entry_1_entry: number;
  entry_1_name: string;
}
