import {Router} from "express";
import fetch from 'node-fetch'

const router = Router()

router.get('/inventario', (req, res) => {
    let url;
    url = 'https://apirest-inventario.herokuapp.com/inventory'
    fetch(url)
        .then((respuesta) => {
            return respuesta.json()
        })
        .then(data => res.send(data))

})

router.get('/inventario/:id', function (req, res) {

    let url;
    url = 'https://apirest-inventario.herokuapp.com/inventory/'
    fetch(url+req.params.id)
        .then((respuesta) => {
            return respuesta.json()
        })
        .then(data => res.send(data))

})

router.get('/carrito', (req, res) => {

    let url;
    url = 'https://apirest-carrito.herokuapp.com/carrito'
    fetch(url)
        .then((respuesta) => {
            return respuesta.json()
        })
        .then(data => res.send(data))

})

router.get('/carrito/:id', function (req, res) {

    let url;
    url='https://apirest-carrito.herokuapp.com/carrito/'
    fetch(url+req.params.id)
        .then((respuesta) => {
            return respuesta.json()
        })
        .then(data => res.send(data))

})

export default router