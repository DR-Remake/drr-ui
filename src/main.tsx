import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./App";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
  </React.StrictMode>
);
