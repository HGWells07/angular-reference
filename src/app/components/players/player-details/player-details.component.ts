import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from 'src/app/models/player';
import { PlayerService } from './../../../services/player.service';
import { faTimes, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.scss'],
})
export class PlayerDetailsComponent implements OnInit {
  timesIcon = faTimes;
  pencilIcon = faPencilAlt;

  constructor(
    private route: ActivatedRoute,
    private playerService: PlayerService
  ) {}

  player: Player;

  deletePlayer(): void {
    this.playerService.deletePlayer(this.player);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.playerService
        .getPlayer(params.id)
        .subscribe((p) => (this.player = p));
    });
  }
}
