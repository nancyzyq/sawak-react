import React from 'react'
import banner1 from '../static/img/bn1.jpg'
import banner2 from '../static/img/bn2.jpg'
import banner3 from '../static/img/bn3.jpg'

export const Carousel = () => (
   <div id="carouselExampleCaptions" className="carousel slide mb-5" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
        <div className="carousel-item active">
            <img src={banner3} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block text-end">
            <h2>Quod Lorem Eruditi</h2>
            <p>Doctus recusabo ex pro. Alterum impedit conclusionemque an vim.</p>
            </div>
        </div>
        <div className="carousel-item">
            <img src={banner2} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block text-end">
            <h2>Consulatu Vituperatoribus</h2>
            <p>Vitae affert et pri, mel in amet neglegentur. Erant commodo fastidii ea pro.</p>
            </div>
        </div>
        <div className="carousel-item">
            <img src={banner1} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block text-end">
            <h2>Euismod Docendi</h2>
            <p>Verterem persequeris concludaturque vim id, qui in malis tacimates platonem</p>
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
)
