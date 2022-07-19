import { FC, useReducer } from 'react';
import { UIContext, uiReducer } from './';


export interface UIState {
  isDarkTheme: boolean;
}

interface propsUIProvider {
  children: JSX.Element | JSX.Element[];
}


const UI_INITIAL_STATE: UIState = {
  isDarkTheme: false
}



export const UIProvider: FC<propsUIProvider> = ({ children }) => {

  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const changeTheme = () => {
    dispatch({type: '[UI] - Change theme'})
  };

  return (

    <UIContext.Provider value={{
      ...state,
      isDarkTheme: false,

      //* Methods
      changeTheme,
    }}>
      {children}
    </UIContext.Provider>

  )
}
