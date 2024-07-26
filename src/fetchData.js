const productos = [
    {
        id: 1,
        nombre: "Agua",
        precio: 10,
        alcohol: false
    },
    {
        id: 2,
        nombre: "Jugo",
        precio: 12,
        alcohol: false
    },
    {
        id: 3,
        nombre: "Cerveza",
        precio: 8,
        alcohol: true
    },
    {
        id: 4,
        nombre: "Gaseosa",
        precio: 5,
        alcohol: false
    },
    {
        id: 5,
        nombre: "Vino",
        precio: 15,
        alcohol: true
    },
    {
        id: 6,
        nombre: "Champagne",
        precio: 35,
        alcohol: true
    },
    {
        id: 7,
        nombre: "Amargo",
        precio: 8,
        alcohol: false
    },
];

export default function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(productos);
        }, 3000);
    });
};