import { memo } from 'react';
import { ReactComponent as ReactLogo } from '../../assets/images/loader.svg';
function Loader({ outerCss }) {
  return (
    <div
      className={`fixed  h-screen w-screen flex items-center justify-center ${outerCss}`}
    >
      {' '}
      {/* <ReactLogo /> */}
      <span className={`loader `}></span>
    </div>
  );
}
export default memo(Loader);
