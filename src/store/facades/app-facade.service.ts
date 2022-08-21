import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectorApp } from '../selectors';
import { actionApp } from '../actions';
import { IRootState } from '../root-state';

@Injectable({
    providedIn: 'root',
})
export class AppFacadeService {
    readonly textPreview$ = this.store.pipe(select(selectorApp.textPreview));
    readonly history$ = this.store.pipe(select(selectorApp.history));
    readonly currentValue$ = this.store.pipe(select(selectorApp.currentValue));

    constructor(private store: Store<IRootState>) {}

    setTextPreview(text: string): void {
        this.store.dispatch(actionApp.setPreviewText({textPreview: text}));
    }

    setHistory(fileName: string, text: string): void {
      this.store.dispatch(actionApp.setHistory({fileName: fileName, text: text}));
    }

    setCurrentValue(value: {inputJson: string, inputText: string}): void {
      this.store.dispatch(actionApp.setCurrentValue({inputJson: value.inputJson, inputText: value.inputText}));
    }

    clearHistory(): void {
      this.store.dispatch(actionApp.clearHistory());
    }
}
