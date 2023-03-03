import { createTheme } from '@mui/material/styles';

const GlobalTheme = createTheme({
  typography: {
    fontFamily: [
      'Spoqa Han Sans Neo \,sans-serif',
      'Noto Sans KR',
    ].join(','),
  },
  palette: {},
  shape: {},
  components: {}
});

export default GlobalTheme;
