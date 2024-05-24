import { Outlet } from 'react-router-dom';
import './App.css';
import { ProdutosContextProvider } from './Context/GlobalContext';
import Header from './Components/Header';
import Footer from './Components/footer'


function App() {
  
  return (
    <>
      <ProdutosContextProvider>
        <Header/>
        <Outlet/>
        <Footer/>
      </ProdutosContextProvider>
    </>
  );
}

export default App;