import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  total = 0;
  constructor(private stateService: StateService) { }

  add() {
    this.total++;
    this.stateService.updateTotal(this.total);
  }

}
