export interface IAppState {
  textPreview: string;
  history: Array<{fileName: string, text: string}>;
  currentValue: object;
}

export const initialAppState: IAppState = {
  textPreview: '',
  history: [],
  currentValue: {}
};
