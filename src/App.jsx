import { BrowserRouter } from 'react-router-dom';
import MainApp from './MainApp';
import Routes from './Routes';
import './assets/App.css';
import './assets/style.css';
// import { ProSidebarProvider } from 'react-pro-sidebar';

export default function App() {
  return (
    <BrowserRouter>
      <MainApp>
          <Routes />
      </MainApp>
    </BrowserRouter>
  );
}
