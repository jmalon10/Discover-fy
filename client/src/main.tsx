import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App.tsx';

import ErrorPage from './pages/ErrorPage.tsx';
import Home from './pages/Home.tsx';
import Login from './pages/Login.tsx';
import Discover from './pages/Discover.tsx';
import Playlists from './pages/Playlists.tsx';
import { ProtectedRoute } from './components/ProtectedRoute.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (<ProtectedRoute><Home /></ProtectedRoute>)
      }, 
      {
        path: '/login',
        element: <Login />
      }, 
      {
        path: '/discover',
        element: (<ProtectedRoute><Discover /></ProtectedRoute>)//added protected route
      }, 
      {
        path: '/playlists',
        element: (<ProtectedRoute><Playlists /></ProtectedRoute>)
      }, 
    ]
  }
])

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
