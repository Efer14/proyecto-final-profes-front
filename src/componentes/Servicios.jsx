import React from 'react'
import './Servicios.css'

export const Servicios = () => {
  return (
    <div className="containerServicios">
      <div id="carouselExampleCaptions" class="carousel slide h-50 w-50 eric">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner h-100 w-100">
          <div className="carousel-item active h-100  ">

            <div className="carousel-caption d-none d-md-block h-75">
              <h5>First slide label</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt corporis nam, consequatur aliquam incidunt voluptate exercitationem, esse perspiciatis animi minus alias obcaecati neque recusandae impedit ex quidem quibusdam ratione consequuntur.</p>
            </div>
          </div>
          <div className="carousel-item h-100">

            <div className="carousel-caption d-none d-md-block h-75">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item h-100">

            <div className="carousel-caption d-none d-md-block h-75">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
     


    </div>
  )
}
