import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IResults } from '../models/results';
import { Teams } from '../models/teams';
import { CustomScoreService } from '../customscore.service';

@Component({
  selector: 'app-game-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  public teamCode: number = 0;
  public selectedTeam: IResults[] = [];
  public headerInfo: Teams[] =[];

  constructor(private service: CustomScoreService,
     private activatedRoute: ActivatedRoute, 
     private router: Router) {
      this.activatedRoute.params.subscribe((data: Params) => {
        this.teamCode  = data['teamCode'];
      })
   }

  ngOnInit(): void {
    const header = localStorage.getItem('header') || '';
    const headerParse = JSON.parse(header);
    if (headerParse.length > 0) {
      this.headerInfo = headerParse.find((item: Teams) => item.id == this.teamCode) as Teams[];
    }
    this.service.getTeamResults(this.teamCode).subscribe((response: IResults) => {
      response['data'].forEach((teams: IResults) => {
        if (teams['home_team'].id != this.teamCode) {
          let ht = teams['home_team'];
          let vt = teams['visitor_team'];
          let hts = teams['home_team_score'];
          let vts = teams['visitor_team_score'];
          teams['home_team'] = vt;
          teams['visitor_team'] = ht;
          teams['home_team_score'] = vts;
          teams['visitor_team_score'] = hts;
        }
      });
      this.selectedTeam.push(response.data);      
    })
  }

  goToTeams() : void{
    this.router.navigate(['/']);
  }

}
