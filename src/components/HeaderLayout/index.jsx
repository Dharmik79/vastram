import { Outlet, useLocation } from 'react-router-dom';
import LayoutWrapper from '../../components/Megamenu/index';
import Footer from '../../components/Footer';

export default function index({ hideHeaderPaths = [] }) {
  const { pathname } = useLocation();

  return (
    <>
      {!hideHeaderPaths.includes(pathname) ? (
        <>
          <LayoutWrapper />
          <Outlet />
          <Footer />
        </>
      ) : (
        <Outlet />
      )}
    </>
  );
}
