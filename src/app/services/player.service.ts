import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Player } from './../models/player';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private players: Player[] = [];

  private log(message: string) {
    console.log(message);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  getPlayers(): Observable<Player[]> {
    return of(this.players);
  }

  addPlayer(player: Player) {
    this.players.push(player);
  }

  editPlayer(player: Player) {
    let index = this.players.findIndex((p) => p.id == player.id);
    this.players[index].name = player.name;
    this.players[index].is_active = player.is_active;
    this.players[index].photo_id = player.photo_id;
    this.players[index].team_id = player.team_id;
    this.players[index].position_id = player.position_id;
    return player;
  }

  deletePlayer(player: Player) {
    this.players.filter((p) => player.id !== p.id);
  }

  constructor() {
    this.players = [
      {
        id: '1',
        name: 'Pirinolo Gomez',
        is_active: true,
        photo_id: '1',
        position_id: '1',
        team_id: '1',
      },
      {
        id: '2',
        name: 'Sergio Busquets',
        is_active: true,
        photo_id: '2',
        position_id: '2',
        team_id: '1',
      },
      {
        id: '3',
        name: 'Maxime Rodriguez',
        is_active: true,
        photo_id: '3',
        position_id: '2',
        team_id: '1',
      },
      {
        id: '4',
        name: 'PewDiePie',
        is_active: true,
        photo_id: '4',
        position_id: '1',
        team_id: '2',
      },
      {
        id: '5',
        name: 'BestMaster64',
        is_active: true,
        photo_id: '5',
        position_id: '2',
        team_id: '2',
      },
      {
        id: '6',
        name: 'Lionel Messi',
        is_active: true,
        photo_id: '6',
        position_id: '1',
        team_id: '2',
      },
    ];
  }
}
