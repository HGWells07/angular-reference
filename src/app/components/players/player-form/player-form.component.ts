import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Player } from 'src/app/models/player';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss'],
})
export class PlayerFormComponent implements OnInit {
  @Input() playerData: any;

  player: Player;

  playerForm = new FormGroup({
    name: new FormControl(''),
    isActive: new FormControl(false),
    teamId: new FormControl(''),
    positionId: new FormControl(''),
    photoId: new FormControl(''),
  });

  constructor(
    private route: ActivatedRoute,
    private playerService: PlayerService
  ) {}

  onSubmit(): void {
    const p: Player = {
      id: this.player ? this.player.id : this.playerService.getNewId(),
      name: this.playerForm.get('name').value,
      is_active: this.playerForm.get('isActive').value,
      team_id: this.playerForm.get('teamId').value,
      position_id: this.playerForm.get('positionId').value,
      photo_id: this.playerForm.get('photoId').value,
    };
    if (this.player) {
      this.playerService.editPlayer(p);
    } else {
      this.playerService.addPlayer(p);
    }
  }

  ngOnInit(): void {
    this.route.params.subscribe((values) => {
      if (values.id) {
        this.playerService
          .getPlayer(values.id)
          .subscribe((p) => (this.player = p));
        this.updateValues(this.player);
      }
    });
  }

  updateValues(p: Player): void {
    this.playerForm.patchValue({
      name: p.name,
      isActive: p.is_active,
      teamId: p.team_id,
      positionId: p.position_id,
      photoId: p.photo_id,
    });
  }
}
