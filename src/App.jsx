import './App.css';

import NavBar from './compon/NavBar';
import ShopPage from './compon/ShopPage';
import CartItem from './cartall/CartItem';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './compon/AppRouter';
import { observer } from 'mobx-react-lite';

function App() {
  return (
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
  );
}

export default App;
