import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter, Link, Navigate, Outlet, RouterProvider,
} from "react-router-dom";

const Layout = () => {
  return (
    <div><h1>Layout</h1><Outlet /></div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
      </div>
    ),
  },
  {
    path: '/about',
    element: <Layout />,
    children: [
      {
        path: "/about",
        element: <Layout><div>About Us</div></Layout>,
      },
      {
        path: '/about/us',
        element: <Layout><div>US</div></Layout>
      }, {
        path: '/about/me',
        element: <Layout><div>me</div></Layout>
      }, 

    ]
    
  },
  {
    path: '/404',
    element: <div>404-Not Found</div>
  }, {
    path: '*',
    element: <Navigate to='/404' />
  }
]
);

function App() {
  return (
    <RouterProvider router={router} />

  )
}
export default App;