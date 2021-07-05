import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

import { BrowserView, MobileOnlyView } from 'react-device-detect';

import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import App from './App/App';
import Web from './Web';

// Date stuff
import DateFnsUtils from '@date-io/dayjs'; // choose your lib
import ToastState from './Context/Toast/ToastState';
import AuthState from './Context/Auth/AuthState';

const materialTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#CB1546',
    },
    secondary: {
      main: '#70C3C3',
    },
  },
  overrides: {
    MuiSwitch: {
      switchBase: {
        color: '#c3c3c3',
      },
    },
    MuiCheckbox: {
      root: {
        color: '#c3c3c3',
      },
    },
    PrivateSwitchBase: {
      root: {
        padding: 'none',
      },
    },
    MuiIconButton: {
      root: {
        padding: 'none',
      },
    },
    MuiInput: {
      root: {
        color: 'inherit',
        fontSize: 'inherit',
        fontWeight: 'inherit',
        letterSpacing: 'inherit',
        lineHeight: 'inherit',
        padding: 'none',
      },
    },
    MuiMobileStepper: {
      dot: {
        backgroundColor: '#64adad61',
        opacity: '0.5',
      },
      dotActive: {
        opacity: '1',
      },
      dots: {
        width: '50%',
        justifyContent: 'space-evenly',
      },
    },
  },
});

ReactDOM.render(
  <BrowserRouter>
    <ToastState>
      <AuthState>
        <ThemeProvider theme={materialTheme}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <BrowserView>
              <Web />
            </BrowserView>
            <MobileOnlyView>
              <App />
            </MobileOnlyView>
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </AuthState>
    </ToastState>
  </BrowserRouter>,
  document.getElementById('root')
);
