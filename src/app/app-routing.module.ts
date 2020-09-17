import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerDetailsComponent } from './components/players/player-details/player-details.component';
import { PlayerFormComponent } from './components/players/player-form/player-form.component';
import { PlayerPanelComponent } from './components/players/player-panel/player-panel.component';

const routes: Routes = [
  {
    path: 'players',
    component: PlayerPanelComponent,
    children: [
      {
        path: 'edit/:id',
        component: PlayerFormComponent,
      },
      {
        path: 'detail/:id',
        component: PlayerDetailsComponent,
      },
      {
        path: 'add',
        component: PlayerFormComponent,
      },
    ],
  },
  {
    path: '',
    redirectTo: '/players',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
