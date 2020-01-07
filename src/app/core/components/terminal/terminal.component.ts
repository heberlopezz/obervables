import { Component, OnDestroy } from '@angular/core';
import { StateService } from '../../services/state.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnDestroy {
  total: number;
  totalSubscription: Subscription;
  constructor(private stateService: StateService) {
    this.totalSubscription = this.stateService.total$.subscribe(data => this.total = data);
  }

  ngOnDestroy() {
    this.totalSubscription.unsubscribe();
  }

}
