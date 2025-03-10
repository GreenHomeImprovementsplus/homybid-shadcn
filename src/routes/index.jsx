import AboutPage from '@/pages/aboutPage';
import HomePage from '@/pages/homePage';
import { createBrowserRouter } from 'react-router-dom';
import PublicRoute from './components/PublicRoute';
import ClientLayout from '@/layouts/client';
import LoginPage from '@/pages/loginPage';
import SignnupPage from '@/pages/signupPage';
import HowItWorksPage from '@/pages/howitworksPage';
import NotFound from '@/pages/404Page';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <PublicRoute element={ClientLayout} />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/how-it-works', element: <HowItWorksPage /> },
    ],
  },
  { path: '/login', element: <PublicRoute element={LoginPage} /> },
  { path: '/signup', element: <PublicRoute element={SignnupPage} /> },
  { path: '*', element: <NotFound /> },
]);
