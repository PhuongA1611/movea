import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import dbApi from './api/dbApi';
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import RouteConfig from './config/RouteConfig';

function App() {

  const params = {}

  useEffect(() => {
    dbApi.getDetail('movie','642885', {params}).then((response) => {
      console.log(response)
     }) 
  }, [])
  return (
    <div>
      <BrowserRouter>
        <Header />
        <RouteConfig />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
