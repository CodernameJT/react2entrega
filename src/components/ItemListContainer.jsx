import React from 'react'
import ItemList from './ItemList';
//import Navbar from './Navbar'; Nunca se llama, de momento no la borro pero no se necesitaría. 

const ItemListContainer = ({ productos, filter }) => {

    const filteredProductos = filter
    ? productos.filter(producto => producto.alcohol === filter)
    : productos;

    return (
        <>
            {
                productos.length === 0 ?
                    <p>Cargando...</p>
                    :
                    <>
                    <h2 style={{padding: "2rem"}}>Bienvenidos a la tienda de APU para bebidas online</h2>
                    <ItemList productos={filteredProductos} />
                    </>
            }
        </>
    );
};

export default ItemListContainer;