import logo from './logo.svg';
import './App.css';
import BookList from './components/BookList';
import { Route, Routes } from 'react-router-dom';
import BookPage from './components/BookPage';

function App() {
  return (
    <Routes>
      <Route path='/:category?' element={<BookPage></BookPage>}></Route>
    </Routes>
  );
}

export default App;
