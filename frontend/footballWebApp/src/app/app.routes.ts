import { Routes } from '@angular/router';
import { PlayersComponent } from './components/players.component/players.component';
import { MatchesComponent } from './components/matches.component/matches.component';
import { HomepageComponent } from './components/homepage.component/homepage.component';

export const routes: Routes = [
    {path: '', redirectTo: 'homepage', pathMatch: 'full'},
    {path: 'players', component: PlayersComponent},
    {path: 'matches', component: MatchesComponent},
    {path: 'homepage', component: HomepageComponent}
];