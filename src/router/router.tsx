/* Styles */
import 'react-toastify/dist/ReactToastify.css';
/* Components */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { HomePage } from '../pages/home/home';
import Login from '../pages/login/login';
import ForgotPassword from '../pages/forgot-password/forgot-password';
import { NotFound } from '../pages/not-found/not-found';
import ProtectedRoute from './protected-route';
import AuthLayout from './layouts/auth-layout';
import { LovPage } from '../pages/lovs/lovs';
import { ArticlePage } from '../pages/articles/articles';
import PagesLayout from './layouts/pages-layout';

const AppRouter = () => {
  console.log(process.env.REACT_APP_BASEURL);
  return (
    <Router>
      <ToastContainer position="top-right" />
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route element={<PagesLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/lov" element={<LovPage />} />
            <Route path="/articles" element={<ArticlePage />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
