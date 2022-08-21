import { Action, createReducer, on } from '@ngrx/store';
import { actionApp } from '../actions';
import { IAppState, initialAppState } from '../state';

const reducer = createReducer<IAppState>(
    initialAppState,

    on(actionApp.setPreviewText, (state, payload) => {
      return {
        ...state,
        textPreview: payload.textPreview,
    }; }),
    on(actionApp.setHistory, (state, payload) => {
      return {
        ...state,
        history: [...state.history, payload]
      };
    }),
    on(actionApp.clearHistory, (state) => {
      return {
        ...state,
        history: []
      };
    }),
    on(actionApp.setCurrentValue, (state, payload) => {
      return {
        ...state,
        currentValue: payload
      };
    })
);

export function appReducer(state: IAppState | undefined, action: Action) {
    return reducer(state, action);
}
