import { Outlet } from 'react-router-dom';
import './App.css';
import { ReceitasContextProvider } from './Context/GlobalContext';
import Header from './Components/Header';
import Footer from './Components/footer'


function App() {
  
  return (
    <>
      <ReceitasContextProvider>
        <Header/>
        <Outlet/>
        <Footer/>
      </ReceitasContextProvider>
    </>
  );
}

export default App;