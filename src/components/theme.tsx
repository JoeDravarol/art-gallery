import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    custom: {
      darkGray: string;
    }
  }

  interface PaletteOptions {
    custom: {
      darkGray: string;
    }
  }
}

const fontFamily = {
  bigShouldersDisplay: '"Big Shoulders Display", "Brush Script MT", cursive',
  outfit: '"Outfit", "Arial", "Helvetica", sans-serif'
}

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#D5966C',
      contrastText: '#FFF',
    },
    secondary: {
      main: '#151515',
      contrastText: '#FFF',
    },
    custom: {
      darkGray: "#444",
    },
  },
  typography: {
    fontFamily: fontFamily.bigShouldersDisplay,
    h1: {
      fontSize: '6rem', // 96px
      lineHeight: '5.5rem', // 88px
      fontWeight: 900,
    },
    h2: {
      fontSize: '4.375rem', // 70px
      lineHeight: '4.375rem', // 70px
      fontWeight: 900,
    },
    h3: {
      fontSize: '3.75rem', // 60px
      lineHeight: '3.125rem', // 50px,
      fontWeight: 900,
    },
    h4: {
      fontSize: '2.25rem', // 36px
      lineHeight: '2.25rem', // 36px
      fontWeight: 900
    },
    body1: {
      fontFamily: fontFamily.outfit,
      fontSize: '1.375rem', // 22px
      lineHeight: '2rem', // 32px
      fontWeight: 300,
    },
    body2: {
      fontFamily: fontFamily.outfit,
      fontSize: '1.125rem', // 18px
      lineHeight: '1.75rem', // 28px
      fontWeight: 300,
    }
  }
});

export default theme;