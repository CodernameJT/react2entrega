import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import fetchData from './fetchData';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import ItemDetail from './components/ItemDetail';
import ProductFilter from './components/ProductFilter';

function App() {

  const [productos, setProductos] = useState([]);
  const [filter, setFilter] = useState(false);

  useEffect(() => {
    fetchData()
      .then(response => {
        setProductos(response);
      })
      .catch(err => console.error(err));
  }, []);

  const handleFilterChange = (filterValue) => {
    setFilter(filterValue);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ProductFilter onFilterChange={handleFilterChange} />
        <Routes>
          <Route path="/" element={<ItemListContainer productos={productos} filter={filter} />} />
          <Route path="/detalle/:id" element={<ItemDetail productos={productos} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

