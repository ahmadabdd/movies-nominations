import { QueryClient, QueryClientProvider } from "react-query";
import { Main } from "./Pages/Main/Main";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Winner } from "./Pages/Winner/Winner";

function App() {
  const queryClient = new QueryClient();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
    },
    {
      path: "/winner",
      element: <Winner/>
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
