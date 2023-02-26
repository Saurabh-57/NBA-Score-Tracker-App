import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Teams } from './models/teams';
import { IResults } from './models/results';

@Injectable({
  providedIn: 'root'
})
export class CustomScoreService {

  public headers = new HttpHeaders({
    'X-RapidAPI-Key': '2QMXSehDLSmshDmRQcKUIAiQjIZAp1UvKUrjsnewgqSP6F5oBX',
    'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
  });


  constructor(private http: HttpClient) { }


  getData(): Observable<Teams> {
    return this.http.get<Teams>('https://free-nba.p.rapidapi.com/teams', { headers: this.headers });
  }

  getTeamResults(id: number): Observable<IResults> {
    return this.http.get<IResults>('https://free-nba.p.rapidapi.com/games?page=0&dates[]=2023-02-19&dates[]=2023-02-18&dates[]=2023-02-17&dates[]=2023-02-16&dates[]=2023-02-15&dates[]=2023-02-14&dates[]=2023-02-13&dates[]=2023-02-12&dates[]=2023-02-11&dates[]=2023-02-10&dates[]=2023-02-09&dates[]=2023-02-08&per_page=12&team_ids[]=' + id, { headers: this.headers })
  }
}
