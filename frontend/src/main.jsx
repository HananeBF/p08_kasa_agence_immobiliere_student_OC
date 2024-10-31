import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevTools } from "react-query/devtools"
import App from "@/App.jsx";
import "@/index.css";

const queryClient = new QueryClient({
  defaultOptions:{
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry:false,
      staleTime: 5*60*1000,
    }
  }
})

createRoot(document.querySelector("#root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevTools initialIsOpen={false}></ReactQueryDevTools>
    </QueryClientProvider>
  </StrictMode>
);
