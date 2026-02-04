import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PlayerService } from './player.service';
import { Player } from '../models/player';

describe('PlayersService', () => {
  let service: PlayerService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PlayerService],
    });

    service = TestBed.inject(PlayerService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Ensure no open requests
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch players', () => {
    const dummyPlayers: Player[] = [
      { id: 1, firstName: 'John', lastName: 'Doe', position: 'Forward', shirtNumber: 9, nationality: 'USA', isActive: true },
      { id: 2, firstName: 'Jane', lastName: 'Smith', position: 'Midfielder', shirtNumber: 8, nationality: 'UK', isActive: true },
    ];

    service.getAll().subscribe(players => {
      expect(players.length).toBe(2);
      expect(players).toEqual(dummyPlayers);
    });

    const req = httpMock.expectOne('http://localhost:5278/api/players');
    expect(req.request.method).toBe('GET');
    req.flush(dummyPlayers);
  });
});
