import { Outlet, useLocation } from 'react-router-dom';
import Header from '../../shared/Header';
// import Header from './../Header/index';
import LayoutWrapper from '../../shared/LayoutWrapper';

export default function index({ hideHeaderPaths = [] }) {
  const { pathname } = useLocation();

  return (
    <>
      {!hideHeaderPaths.includes(pathname) ? (
        <LayoutWrapper>
          <Outlet />
        </LayoutWrapper>
      ) : (
        <Outlet />
      )}
    </>
  );
}
