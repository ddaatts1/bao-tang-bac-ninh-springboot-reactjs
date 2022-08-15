import './App.css';
import TableContent from './admin/TableContent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AdminPage from './admin/AdminPage';
import AddPosts from './admin/AddPosts';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/admin' element={<AdminPage />} ></Route>
        <Route path='/table' element={<TableContent />}></Route>
        <Route path='/admin/add' element={<AddPosts />}></Route>

      </Routes>
    </BrowserRouter>



  );
}

export default App;
