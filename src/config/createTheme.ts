import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: `'Teachers', sans-serif`,
  },
  // opcionalmente puedes sobrescribir variantes
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: `'Teachers', sans-serif`,
        },
      },
    },
  },
});

export default theme;
