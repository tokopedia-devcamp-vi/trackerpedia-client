import { createMuiTheme, CssBaseline, MuiThemeProvider } from '@material-ui/core';
import { SnackbarProvider } from 'notistack';
import React from 'react';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { BrowserRouter } from 'react-router-dom';
import "typeface-nunito-sans";
import App from './App';

const Root: React.FC = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <SnackbarProvider>
          <CssBaseline />
          <App />
        </SnackbarProvider>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Montserrat',
      '-apple-system',
      'BlinkMacSystemFont',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'sans-serif',
    ].join(','),
  },
  palette: {
    secondary: {
      main: '#fa591d'
    },
    primary: {
      main: '#42b549',
      contrastText: '#fff',
    },
  },
  overrides: {
    MuiBottomNavigationAction: {
      root: {
        maxWidth: 'none',
      },
      label: {
        '&.Mui-selected': {
          fontSize: '0.75rem'
        }
      }
    }
  }
})



export default Root;