import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import About from "./pages/About";
import Home from "./pages/Home";
import WorkList from "./pages/WorkList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about-me", element: <About /> },
      { path: "/works", element: <WorkList /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
