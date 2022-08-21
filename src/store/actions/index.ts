import { createAction, props } from '@ngrx/store';

export const actionApp = {
    setPreviewText: createAction('SET PREVIEW TEXT', props<{ textPreview: string}>()),
    setHistory: createAction('SET HISTORY', props<{fileName: string; text: string}>()),
    clearHistory: createAction('CLEAR HISTORY'),
    setCurrentValue: createAction('SET CURRENT VALUE', props<{inputJson: string; inputText: string}>()),
};
