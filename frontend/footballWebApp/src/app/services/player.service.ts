import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private api = 'http://localhost:5278/api/players';

  constructor(private http: HttpClient){

  }

  getAll(){
    return this.http.get<Player[]>(this.api);
  }

  create(player: Player){
    return this.http.post<Player>(this.api, player);
  }
  
  delete(id: Number){
  return this.http.delete(`${this.api}/${id}`);  
  }
}
