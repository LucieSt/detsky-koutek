import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Router, Link, Outlet } from 'react-router-dom';
import Contact from './pages/Contact/contact';
import About from './pages/About/about';
import Home from './pages/Home/home';
import ErrorPage from './pages/ErrorPage/error-page';
import CentersPage from './pages/CentersPage/centers-page';
import './style.css';

const App = () => {
  return (
    <div className="container">
      <nav>
        <Link to="/">Home</Link>
        <span> | </span>
        <Link to="/about">About</Link>
        <span> | </span>
        <Link to="/contact">Contact</Link>
        <span> | </span>
        <Link to="/centers">Pobočky</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/centers",
        element: <CentersPage />
      },
    ],
  },
]);

createRoot(
  document.querySelector('#app'),
).render(
  <RouterProvider router={router} />
);;
