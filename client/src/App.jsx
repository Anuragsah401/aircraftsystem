import { Routes, Route } from "react-router-dom";

import "@mantine/core/styles.css";

import ClientLayout from "components/ClientLayout";
import Login from "components/Login/Login";

import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<ClientLayout />}>
            <Route path="login" element={<Login />} />
          </Route>
          <Route
            path="*"
            element={
              <>
                <h1 className="text-white">Page Not found!</h1>
              </>
            }
          />
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
