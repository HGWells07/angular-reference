import { Component, OnInit } from '@angular/core';
import { Player } from './../../../models/player';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss'],
})
export class PlayerListComponent implements OnInit {
  //Icons

  faPlus = faPlus;

  //Models
  players: Player[] = [];

  constructor() {}

  ngOnInit(): void {
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
