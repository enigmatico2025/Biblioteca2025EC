import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

//importamos los comp creados
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import Report from './components/report';
import Book from './components/book';
import Prestamo from './components/prestamo';

import NavBarExample from './layouts/navbar';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBarExample />}>
            <Route index element={<Home />} />
            <Route path='prestamo' element={<Prestamo />} />
            <Route path='book' element={<Book />} />
            <Route path='report' element={<Report />} />
            <Route path='*' element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;