import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayersComponent } from '../components/players.component/players.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PlayerService } from './player.service';
import { Player } from '../models/player';

describe('PlayersComponent', () => {
  let component: PlayersComponent;
  let fixture: ComponentFixture<PlayersComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayersComponent],
      imports: [HttpClientTestingModule], // ✅ mock HTTP
      providers: [PlayerService],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayersComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch players from the service', () => {
    // Example mock data
    const dummyPlayers: Player[] = [
      {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        position: 'Forward',
        shirtNumber: 9,
        nationality: 'USA',
        isActive: true,
      },
      {
        id: 2,
        firstName: 'Jane',
        lastName: 'Smith',
        position: 'Midfielder',
        shirtNumber: 8,
        nationality: 'UK',
        isActive: true,
      },
    ];

    // Call the method that fetches players
    component.ngOnInit();

    // Expect one HTTP GET request
    const req = httpMock.expectOne('http://localhost:5278/api/players');
    expect(req.request.method).toBe('GET');

    // Respond with dummy data
    req.flush(dummyPlayers);

    // Check that the component's players array is populated
    expect(component.players.length).toBe(2);
    expect(component.players).toEqual(dummyPlayers);
  });

  afterEach(() => {
    httpMock.verify(); // Ensure no outstanding requests
  });
});
