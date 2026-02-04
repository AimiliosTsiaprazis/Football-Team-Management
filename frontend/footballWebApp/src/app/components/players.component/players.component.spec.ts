import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayersComponent } from './players.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PlayerService } from '../../services/player.service';
import { Player } from '../../models/player';

describe('PlayersComponent', () => {
  let component: PlayersComponent;
  let fixture: ComponentFixture<PlayersComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayersComponent, HttpClientTestingModule], // ✅ Standalone Component in imports
      providers: [PlayerService],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayersComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch players', () => {
    const dummyPlayers: Player[] = [
      { id: 1, firstName: 'John', lastName: 'Doe', position: 'Forward', shirtNumber: 9, nationality: 'USA', isActive: true },
    ];

    component.ngOnInit();

    const req = httpMock.expectOne('http://localhost:5278/api/players');
    expect(req.request.method).toBe('GET');
    req.flush(dummyPlayers);

    expect(component.players).toEqual(dummyPlayers);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
