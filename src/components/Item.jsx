import React from 'react';

import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ nombre, precio, id }) => {
    return (
        <div key={id} className="card-item">
            <h3 style={{ justifySelf: "center" }}>{nombre}</h3>
            <img className="img" src="https://img.freepik.com/fotos-premium/botella-vino-blanco-tapon-rojo-etiqueta_664601-8179.jpg" />
            <p>Precio: <b>${precio}</b></p>
            
            <Link to={`/detalle/${id}`}>
                <button>Ver detalle</button>
            </Link>
        </div>
    );
};


export default Item;
// lo saque de lugar estaba abjo de Precio no lo necesito para la entrega <button>Agregar al carrito</button>