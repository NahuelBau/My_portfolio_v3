import { createContext } from 'react';


interface ContextProps {
  isDarkTheme: boolean;
  changeTheme: () => void;
}


export const UIContext = createContext({} as ContextProps);