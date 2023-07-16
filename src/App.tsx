import GlobalStyle from "./style/globalstyle";

import Nav from "./routes/route";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <GlobalStyle />
          <Nav />
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
