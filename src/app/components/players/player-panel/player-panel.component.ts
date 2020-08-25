import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { Player } from 'src/app/models/player';

@Component({
  selector: 'app-player-panel',
  templateUrl: './player-panel.component.html',
  styleUrls: ['./player-panel.component.scss'],
})
export class PlayerPanelComponent implements OnInit {
  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {}

  playerForm(player: Player) {
    this.playerService.addPlayer(player);
  }
}
