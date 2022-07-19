import { UIState } from './';

type UIActionType = 
  |{type: '[UI] - Change theme'}
  
  
  export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  
    switch (action.type) {
      case '[UI] - Change theme':
        return {
          ...state,
          isDarkTheme: !state.isDarkTheme
        }
  
      default:
        return state;
    }
  };