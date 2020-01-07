import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  total$: Observable<number>;
  constructor(private stateService: StateService) {
    this.total$ = this.stateService.total$;
  }
}
