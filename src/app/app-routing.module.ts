import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppInputPageComponent} from './pages/input-page/input-page.component';
import {SavePageComponent} from './pages/save-page/save-page.component';
import {HistoryPageComponent} from './pages/history-page/history-page.component';


const routes: Routes = [
  {
    path: '',
    component: AppInputPageComponent,
  },
  {
    path: 'save',
    component: SavePageComponent
  },
  {
    path: 'history',
    component: HistoryPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
