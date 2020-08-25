import { Component, OnInit } from '@angular/core';
import { Player } from './../../../models/player';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { PlayerService } from './../../../services/player.service';

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

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.playerService
      .getPlayers()
      .subscribe((players) => (this.players = players));
  }
}
