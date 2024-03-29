import React, { lazy } from 'react';

import {
  Route,
  Routes as BaseRoutes,
  Navigate,
  useNavigate,
} from 'react-router-dom';
import { compact, find, head } from 'lodash';
import { GlobalContext } from './context/States/GlobalState';
import Loader from './components/Loader';

const Home = lazy(() => import('./components/HomePage/index'));
const HeaderLayout = lazy(() => import('./components/HeaderLayout/index'));
const SingleProduct = lazy(() => import('./components/SingleProduct/index'));
const Login = lazy(() => import('./components/Login/index'));
const AboutUS = lazy(() => import('./components/AboutUS/index'));
const Measurement = lazy(() => import('./components/Measurement/index'));
const OTP = lazy(() => import('./components/OTP/index'));
const SignUpPage = lazy(() => import('./components/SignUpPage/index'));
const PasswordReset = lazy(() => import('./components/PasswordReset/index'));
const ForgotPassword = lazy(() => import('./components/ForgotPassword/index'));
const NoFound = lazy(() => import('./components/NoFound/index'));
const LegalDoc = lazy(() => import('./components/LegalDoc/index'));
const Faq = lazy(() => import('./components/Faq/index'));
const Checkout = lazy(() => import('./components/CheckOut/index'));
const Cart = lazy(() => import('./components/Cart/index'));
const Profile = lazy(() => import('./components/Profile/index'));

export default function Routes() {
  const { Global } = React.useContext(GlobalContext);

  const navigate = useNavigate();
  const RoutesConst = [
    {
      path: '/',
      name: 'HomePage',
      User: '6',
      tokenAllow: true,
    },
    {
      path: '/single-product',
      name: 'SingleProductPage',
      tokenAllow: true,
    },
    {
      path: '/measurementForm',
      name: 'Measurement Form',
      tokenAllow: true,
    },
    {
      path: '/legal',
      name: 'legalDoc',
      tokenAllow: false,
    },
    {
      path: '/checkout',
      name: 'checkout',
      tokenAllow: true,
    },
    {
      path: '/cart',
      name: 'cart',
      tokenAllow: true,
    },
    {
      path: '/profile',
      name: 'profile',
      tokenAllow: true,
    },
  ];
  const RestrictedRoutes = ({ children, ...props }) => {
    const isAuthenticated = window.sessionStorage?.getItem('token');
    const newPath = find(RoutesConst, function (o) {
      if (o.CheckFirst) {
        const path = head(compact(o.path.split('/')));
        const NewProps = window.location.pathname;
        const newData = head(compact(NewProps.split('/')));
        return path == newData;
      }
      return o.path === window.location.pathname;
    });
    if (newPath) {
      if (newPath?.tokenAllow) {
        if (isAuthenticated) {
          return children;
        } else {
          return <Navigate to="/login" />;
        }
      } else {
        return children;
      }
    } else {
      return <Navigate to="/NoFound" />;
    }
  };

  return (
    <React.Suspense fallback={<Loader />}>
      <BaseRoutes>
        <Route
          element={
            <HeaderLayout
              hideHeaderPaths={[
                '/login',
                '/sign-up',
                '/forgot-password',
                '/reset-password',
                // '/otp',
              ]}
            />
          }
        >
          <Route
            path="/"
            element={
              <RestrictedRoutes>
                <Home />
              </RestrictedRoutes>
            }
          />
          <Route
            path="/single-product"
            element={
              <RestrictedRoutes>
                <SingleProduct />
              </RestrictedRoutes>
            }
          />
          <Route
            path="/measurementForm"
            element={
              <RestrictedRoutes>
                <Measurement />
              </RestrictedRoutes>
            }
          />
          <Route
            path="/checkout"
            element={
              <RestrictedRoutes>
                <Checkout />
              </RestrictedRoutes>
            }
          />
          <Route
            path="/cart"
            element={
              <RestrictedRoutes>
                <Cart />
              </RestrictedRoutes>
            }
          />

          <Route
            path="/profile"
            element={
              <RestrictedRoutes>
                <Profile />
              </RestrictedRoutes>
            }
          />
          <Route path="/login" exact element={<Login />} />
          <Route path="/sign-up" exact element={<SignUpPage />} />
          <Route path="/NoFound" exact element={<NoFound />} />
          <Route path="/AboutUS" exact element={<AboutUS />} />
          <Route path="/forgot-password" exact element={<ForgotPassword />} />
          <Route path="/reset-password" exact element={<PasswordReset />} />
          <Route path="/legal" exact element={<LegalDoc />} />
          <Route path="/faq" exact element={<Faq />} />

          <Route path="*" element={<NoFound />} />
        </Route>
      </BaseRoutes>
    </React.Suspense>
  );
}
