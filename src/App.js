import { Route, Routes } from 'react-router-dom';
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Ingredient } from './pages/Ingredient';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Cocktail } from './pages/Cocktail';

function App() {
  return (
    <>
      <Header/>
      <main className="container content">
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='ingredient/:name' element={<Ingredient/>}/>
            <Route path='cocktail/:id' element={<Cocktail/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
      </main>
      <Footer/>
    </>
  );
}

export default App;
