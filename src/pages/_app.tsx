import ErrorBoundary from "@/ErrorBoundary";
import { setupStore } from "@/redux/store";
import "../styles/Home.css";
import "../styles/Pagination.css";
import "../styles/Search.css";
import "../styles/FlayoutElement.css";
import "../styles/Details.css";
import { ThemeContext } from "@/ThemeContext";
import type { AppProps } from "next/app";
import { useState } from "react";
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState('dark');

  return (
    <Provider store={setupStore()}>
      <ErrorBoundary errorComponent={undefined}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <div className={`wrap ${theme}`}>
            <Component {...pageProps} />
            {/*    <Overlay /> */}
          </div>
        </ThemeContext.Provider>
      </ErrorBoundary>
    </Provider>
  );
}
