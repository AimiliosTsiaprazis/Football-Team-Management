import { Component, OnInit } from '@angular/core';
import { MatchService } from '../../services/match.service';
import { Match } from '../../models/match';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-matches.component',
  imports: [FormsModule, CommonModule],
  templateUrl: './matches.component.html',
  styleUrl: './matches.component.css',
})

export class MatchesComponent implements OnInit{
    
  matches: Match[] = [];

  match: Match = {
    opponent: '',
    matchDate: new Date(),
    location: '',
    goalsFor: 0,
    goalsAgainst: 0
  }
  
  constructor(private matchService: MatchService) {}

  ngOnInit(){
    this.load();
  }

  load(){
    this.matchService.getAll().subscribe(result => this.matches = result);
  }

  add(){
    const matchToSend = {
      ...this.match,
    MatchDate: new Date(this.match.matchDate).toISOString()
    };

    this.matchService.create(matchToSend).subscribe(() => {
      this.load();
      this.reset();
    })
  }

  reset(){
      this.match = {
      opponent: '',
      matchDate: new Date(),
      location: '',
      goalsFor: 0,
      goalsAgainst: 0
    };
  }

  delete(id: number){
      this.matchService.delete(id).subscribe(() => this.load());
    }

    trackById(index: number, match: Match) {
      return match.matchId;
  }
}