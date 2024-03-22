import React, { useMemo } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { useTheme } from '../atoms/theme';
import Header from '../components/header';

const defaultTheme = createTheme({
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 1280,
      xl: 1516,
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (theme) => ({
        body: {
          '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
            backgroundColor: 'transparent',
            width: '6px',
          },
          '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
            borderRadius: 8,
            backgroundColor: theme.palette.divider,
            // backgroundColor: 'red',
          },
          '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus':
            {
              backgroundColor: '#747775',
            },
          '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active':
            {
              backgroundColor: '#747775',
            },
          '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover':
            {
              backgroundColor: '#747775',
            },
        },
      }),
    },

    MuiDivider: {
      styleOverrides: {
        light: {
          borderColor: '#424242',
          width: '100%',
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained' },
          style: ({ theme }) => ({ color: theme.palette.common.white }),
        },
      ],
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: '16px',
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        root: {
          '.MuiMenu-list': {
            padding: '5px',
          },
          '.MuiButtonBase-root.MuiMenuItem-root': {
            fontSize: '14px',
          },
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
        },
      },
    },
  },
});

const lightThemeConfig = {
  background: {
    paper: '#FFFFFF',
    default: '#F7F9FC',
  },
  divider: '#e7e3e3',
  custom: {
    search: {
      main: '#edf2fc',
      focus: 'white',
    },
    border: '#e7e3e3',
    hoverColor: '#45B5E8',
    common: 'white',
    color: 'rgba(0, 0, 0, 0.87)',
    appsHover: 'rgb(232, 240, 254)',
    menu: '#FFFFFF',
    cardHover: '#E1E5EA',
    trashCaption: '#E3E3E3',
    selectedCard: '#c2e7ff',
    selectedMove: '#c2e7ff',
    selectedPanel: '#f2f6fc',
    response: '#2f2e2e',
    selectedHover: '#B3D7EF',
    shareHover: 'rgb(140 140 140 / 15%)',
    uploadButton: '#FFF',
    uploadButtonHover: '#EDF2FA',
  },
};

const darkThemeConfig = {
  background: {
    paper: '#000000',
    default: '#141414',
  },
  text: {
    secondary: '#818991',
  },
  divider: '#424242',
  custom: {
    search: {
      main: '#1A1A1A',
      focus: '#2F2F2F',
    },
    border: '#616161',
    hoverColor: '#fff',
    common: 'black',
    appsHover: 'rgb(39, 46, 58)',
    menu: '#424242',
    cardHover: '#2F2F2F',
    trashCaption: '#2f2e2e',
    selectedCard: '#2f2e2e',
    selectedPanel: '#2f2e2e',
    selectedMove: '#44b5e899',
    response: 'white',
    selectedHover: 'rgba(255, 255, 255, 0.08)',
    shareHover: 'rgba(255, 255, 255, 0.08)',
    uploadButton: '#2F2F2F',
    uploadButtonHover: '#141414',
  },
};

const RootContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { theme } = useTheme();

  const muiTheme = useMemo(() => {
    return createTheme({
      ...defaultTheme,
      palette: {
        mode: theme,
        primary: { main: '#3B84D9' },
        ...(theme === 'light' ? lightThemeConfig : darkThemeConfig),
      },
    });
  }, [theme]);

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <div className='sticky top-0 z-50'>
        <Header />
      </div>
      <div>{children}</div>
    </ThemeProvider>
  );
};

export default RootContainer;
