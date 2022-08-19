import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    htmlFontSize: 10,
    fontFamily: ['"Source Sans Pro"', 'sans-serif'].join(','),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
         body {
          -webkit-font-smoothing: auto;
          font-family: 'Source Sans Pro', sans-serif;
          color: #0d0d0d;
         }
       `,
    },
  },
});

export default theme;
