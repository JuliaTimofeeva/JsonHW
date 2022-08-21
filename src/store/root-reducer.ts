import { ActionReducerMap } from '@ngrx/store';
import { IRootState } from './root-state';
import {appReducer} from './reducers';

export const rootReducer: ActionReducerMap<IRootState> = {
    app: appReducer,
};
