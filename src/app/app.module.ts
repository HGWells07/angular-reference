import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerDetailsComponent } from './components/players/player-details/player-details.component';
import { PlayerListComponent } from './components/players/player-list/player-list.component';
import { PlayerFormComponent } from './components/players/player-form/player-form.component';
import { PlayerPanelComponent } from './components/players/player-panel/player-panel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { PlayerListItemComponent } from './components/players/player-list/player-list-item/player-list-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    PlayerDetailsComponent,
    PlayerListComponent,
    PlayerFormComponent,
    PlayerPanelComponent,
    HeaderComponent,
    PlayerListItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AlertModule.forRoot(),
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
