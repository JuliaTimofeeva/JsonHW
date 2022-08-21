import {Component} from '@angular/core';
import {AppFacadeService} from '../../../store/facades';
import {Router} from '@angular/router';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss'],
})
export class HistoryPageComponent {

  constructor(public appFacade: AppFacadeService, private router: Router) {}

  clearHistory(): void {
    this.appFacade.clearHistory();
  }

  goHome(): void {
    this.router.navigate(['/']);
  }
}
