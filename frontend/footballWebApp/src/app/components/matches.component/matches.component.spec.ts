import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatchesComponent } from './matches.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MatchService } from '../../services/match.service';
import { Match } from '../../models/match';
import { RouterTestingModule } from '@angular/router/testing';

describe('MatchesComponent', () => {
  let component: MatchesComponent;
  let fixture: ComponentFixture<MatchesComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchesComponent, HttpClientTestingModule, RouterTestingModule],
      providers: [MatchService],
    }).compileComponents();

    fixture = TestBed.createComponent(MatchesComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch matches on load', () => {
    const dummyMatches: Match[] = [
      { matchId: 1, opponent: 'Team A', matchDate: new Date('2026-02-10'), location: 'Stadium', goalsFor: 2, goalsAgainst: 1 },
    ];

    component.load();

    const req = httpMock.expectOne('http://localhost:5278/api/matches');
    expect(req.request.method).toBe('GET');
    req.flush(dummyMatches);

    expect(component.matches).toEqual(dummyMatches);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
