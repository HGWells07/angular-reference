import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { Player } from 'src/app/models/player';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-player-panel',
  templateUrl: './player-panel.component.html',
  styleUrls: ['./player-panel.component.scss'],
})
export class PlayerPanelComponent implements OnInit {
  constructor(private playerService: PlayerService) {}
  // Icons
  faPlus = faPlus;
  ngOnInit(): void {}
  playerForm(player: Player): void {
    this.playerService.addPlayer(player);
  }
}
