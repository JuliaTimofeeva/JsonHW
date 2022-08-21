import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppInputPageComponent} from './pages/input-page/input-page.component';
import {TextPreviewComponent} from './components/text-preview/text-preview.component';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {SavePageComponent} from './pages/save-page/save-page.component';
import { StoreModule } from '@ngrx/store';
import {rootReducer} from '../store/root-reducer';
import { ReactiveComponentModule } from '@ngrx/component';
import {HistoryPageComponent} from './pages/history-page/history-page.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    AppInputPageComponent,
    TextPreviewComponent,
    SavePageComponent,
    HistoryPageComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ReactiveComponentModule,

    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    StoreModule.forRoot(rootReducer, {}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
