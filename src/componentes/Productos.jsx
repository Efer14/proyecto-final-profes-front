import React from 'react'
import './Productos.css'

export const Productos = () => {
  return (
    <div className="bloquecard">
      <div className="card" >
        <img src="/imagenes/imagen3.jpg" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/Contacto" className="btn btn-info botonP">Comprar</a>
          </div>
      </div>

      <div className="card" >
        <img src="/imagenes/imagen3.jpg" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-info botonP">Comprar</a>
          </div>
      </div>

      <div className="card" >
        <img src="/imagenes/imagen3.jpg" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-info botonP">Comprar</a>
          </div>
      </div>
     
    </div>
  )
}
