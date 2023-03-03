import GeneralNavigationBar from "../components/GeneralNavigationBar";
import { AppProps } from "next/app";
import '../styles/globals.css';
import { ThemeProvider } from "@mui/material/styles";
import GlobalTheme from "../styles/theme";
import reportWebVitals from "../reportWebVitals";
import { Provider } from 'react-redux';
import { stores } from "../stores";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={stores}>
      <ThemeProvider theme={GlobalTheme}>
        <GeneralNavigationBar />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;

reportWebVitals();