import { BrowserRouter } from 'react-router-dom';
import SocketLayer from './SocketLayer';
import MainApp from './MainApp';
import Routes from './Routes';
import './assets/App.css';
import './assets/style.css';
// import { ProSidebarProvider } from 'react-pro-sidebar';

export default function App() {
  return (
    <BrowserRouter>
      <MainApp>
        <SocketLayer>
          <Routes />
        </SocketLayer>
      </MainApp>
    </BrowserRouter>
  );
}
