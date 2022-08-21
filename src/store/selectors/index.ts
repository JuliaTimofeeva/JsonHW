import { createSelector } from '@ngrx/store';
import { IAppState } from '../state';
import {IRootState} from '../root-state';

const appState = (state: IRootState) => state.app;

export const selectorApp = {
    textPreview: createSelector(appState, (state: IAppState) => state.textPreview),
    history: createSelector(appState, (state: IAppState) => state.history),
    currentValue: createSelector(appState, (state: IAppState) => state.currentValue),
};
