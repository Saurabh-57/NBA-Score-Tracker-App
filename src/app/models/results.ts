export interface IResults {
    [x: string]: any;
    data: Results;
}
interface Results {
    forEach(arg0: (teams: IResults) => void): unknown;
    data: Results;
    date: string;
    home_team: {
    id: number, abbreviation: string, city: string, conference: string, division: string, full_name: string,
    name: string
    }
    home_team_score: number;
    id: number;
    period: number;
    postseason: boolean;
    season: number;
    status: string;
    time: string;
    visitor_team: {
    id: number, abbreviation: string, city: string, conference: string, division: string, full_name: string,
    name: string
    }
    visitor_team_score: number;
}




