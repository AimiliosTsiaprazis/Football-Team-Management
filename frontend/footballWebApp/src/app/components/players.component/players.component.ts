import { Component, OnInit } from '@angular/core';
import { Player } from '../../models/player';
import { PlayerService } from '../../services/player.service';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-players.component',
  imports: [FormsModule, CommonModule],
  templateUrl: './players.component.html',
  styleUrl: './players.component.css',
})
export class PlayersComponent implements OnInit{
  players: Player[] = [];

  player: Player = {
    firstName: '',
    lastName: '',
    position: '',
    shirtNumber: 0,
    nationality: '',
    isActive: true
  };

  constructor(private service: PlayerService){

  }

  ngOnInit(){
    this.load();
  }

  load(){
    this.service.getAll().subscribe(result => this.players = result);
  }

  add(){
    this.service.create(this.player).subscribe(() => {
      this.load();
      this.reset();
    })
  }

  reset(){
      this.player = {
      firstName: '',
      lastName: '',
      position: '',
      shirtNumber: 0,
      nationality: '',
      isActive: true
    };
  }

  delete(id: number){
    if (!id) return;
    this.service.delete(id).subscribe(() => this.load());
    }

  trackById(index: number, player: Player) {
    return player.id;
  }
}
