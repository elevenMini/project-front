import GlobalStyle from "./style/globalstyle";

import Nav from "./routes/route";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Nav />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
