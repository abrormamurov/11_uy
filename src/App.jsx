// react-router-dom
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

// components
import { Navbar, Footer, ProtectedRoutes } from "./components";

// pages
import { Home, About, Contact, Login, Signup } from "./pages";

// layout
import MainLayout from "./layout/MainLayout";

function App() {
  const user = true;
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "./about",
          element: <About />,
        },
        {
          path: "./contact",
          element: <Contact />,
        },
      ],
    },
    {
      path: "./login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "./signup",
      element: user ? <Navigate to="/" /> : <Signup />,
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
