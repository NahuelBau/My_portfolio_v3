import { Switch } from '@mui/material'
import { useState, useContext } from 'react';
import { UIContext } from '../../context/ui/UiContext';

export const ToggleTheme = () => {

  const [isDarkMode, setIsDarkMode] = useState(true);
  const {changeTheme} = useContext( UIContext );


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsDarkMode(event.target.checked);
    changeTheme();
    
  };



  return (
    <Switch
      checked={isDarkMode}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  )
}
