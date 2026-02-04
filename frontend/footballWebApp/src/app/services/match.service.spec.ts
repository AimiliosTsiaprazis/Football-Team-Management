import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MatchService } from './match.service';
import { Match } from '../models/match';

describe('MatchService', () => {
  let service: MatchService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // ✅ mock HTTP
      providers: [MatchService],
    });

    service = TestBed.inject(MatchService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Make sure no requests are pending
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch matches from the API', () => {
    const dummyMatches: Match[] = [
      {
        matchId: 1,
        opponent: 'Team A',
        matchDate: new Date('2026-02-10'),
        location: 'Stadium 1',
        goalsFor: 2,
        goalsAgainst: 1,
      },
      {
        matchId: 2,
        opponent: 'Team B',
        matchDate: new Date('2026-02-17'),
        location: 'Stadium 2',
        goalsFor: 0,
        goalsAgainst: 3,
      },
    ];

    service.getAll().subscribe((matches) => {
      expect(matches.length).toBe(2);
      expect(matches).toEqual(dummyMatches);
    });

    // Expect a single GET request
    const req = httpMock.expectOne('http://localhost:5278/api/matches');
    expect(req.request.method).toBe('GET');

    // Respond with mock data
    req.flush(dummyMatches);
  });

  it('should add a match via POST', () => {
    const newMatch: Match = {
      opponent: 'Team C',
      matchDate: new Date('2026-02-24'),
      location: 'Stadium 3',
      goalsFor: 1,
      goalsAgainst: 1,
    };

    service.create(newMatch).subscribe((match) => {
      expect(match).toEqual({ ...newMatch, matchId: 3 });
    });

    const req = httpMock.expectOne('http://localhost:5278/api/matches');
    expect(req.request.method).toBe('POST');
    req.flush({ ...newMatch, matchId: 3 });
  });
});
