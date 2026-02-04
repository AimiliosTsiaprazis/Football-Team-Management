import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MatchService } from './match.service';
import { Match } from '../models/match';

describe('MatchService', () => {
  let service: MatchService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MatchService],
    });

    service = TestBed.inject(MatchService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch matches', () => {
    const dummyMatches: Match[] = [
      { matchId: 1, opponent: 'Team A', matchDate: new Date('2026-02-10'), location: 'Stadium 1', goalsFor: 2, goalsAgainst: 1 },
    ];

    service.getAll().subscribe(matches => {
      expect(matches.length).toBe(1);
      expect(matches).toEqual(dummyMatches);
    });

    const req = httpMock.expectOne('http://localhost:5278/api/matches');
    expect(req.request.method).toBe('GET');
    req.flush(dummyMatches);
  });

  it('should add a match', () => {
    const newMatch: Match = { opponent: 'Team B', matchDate: new Date('2026-02-15'), location: 'Stadium 2', goalsFor: 0, goalsAgainst: 0 };

    service.create(newMatch).subscribe(match => {
      expect(match).toEqual({ ...newMatch, matchId: 2 });
    });

    const req = httpMock.expectOne('http://localhost:5278/api/matches');
    expect(req.request.method).toBe('POST');
    req.flush({ ...newMatch, matchId: 2 });
  });
});
