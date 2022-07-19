import { createTheme } from '@mui/material/styles';


export const darkTheme = createTheme({
  palette:{
    mode: 'dark',
    primary: {
      main: '#2C3639'
    },
    secondary: {
      main: '#3F4E4F'
    },
    info: {
      main: '#A27B5C'
    },
    success: {
      main: '#DCD7C9'
    },

  },
  components:{
    MuiAppBar:{
      defaultProps: {
        elevation: 0,
        position: 'fixed',
      },
      styleOverrides:{
        root:{
          // backgroundColor: '#2C3639'
        }
      }
    },

    MuiTypography:{
      styleOverrides:{
        h2: {
          color: '#DCD7C9'
        },
        h4:{
          color: '#DCD7C9'
        }
      }
    }
  }

  
});