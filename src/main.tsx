import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import store ,{persistor} from "./pages/Redux/store.ts";
import { Provider } from "react-redux";

import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider>
            <PersistGate loading={null} persistor={persistor}>
              <App />
            </PersistGate>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </Router>
  </React.StrictMode>
);
