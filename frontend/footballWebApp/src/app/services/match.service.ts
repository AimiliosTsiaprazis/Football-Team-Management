import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Match } from '../models/match';

@Injectable({
  providedIn: 'root',
})
export class MatchService {
  private api = 'http://localhost:5278/api/matches';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Match[]> {
    return this.http.get<Match[]>(this.api);
  }

  create(match: Match){
    return this.http.post<Match>(this.api, match);
  }

  delete(id: number){
    return this.http.delete(`${this.api}/${id}`)
  }
  
}
