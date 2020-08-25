import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Player } from 'src/app/models/player';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss'],
})
export class PlayerFormComponent implements OnInit {
  @Output() playerForm: EventEmitter<any> = new EventEmitter();
  @Input() playerData: any;

  name: string;
  is_active: string;
  team_id: string;
  position_id: string;
  photo_id: string;

  constructor(private playerService: PlayerService) {}

  onSubmit() {
    const player = {
      name: this.name,
      is_active: this.is_active,
      team_id: this.team_id,
      photo_id: this.photo_id,
      position_id: this.position_id,
    };

    this.playerForm.emit(player);
  }

  ngOnInit(): void {}
}
