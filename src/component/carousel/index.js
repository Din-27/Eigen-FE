import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


function Carousel() {

      
  return (
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" style={{height : '300px'}}>
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img style={{height : '300px'}} src='https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/a358573206260f6baa81dcd0b8be41e9.jpg' class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
                <img style={{height : '300px'}} src="https://s.yimg.com/os/creatr-uploaded-images/2022-04/8b35c290-b8f4-11ec-9e6f-048f31cfe737" class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
                <img style={{height : '300px'}} src="https://s.yimg.com/os/creatr-uploaded-images/2022-03/9fc241e0-ac1d-11ec-997f-2ab3d5f72c8d" class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
                <img style={{height : '300px'}} src="https://cdn.vox-cdn.com/thumbor/EFlInCCNsAKA7oKWP2aQNWLyuXA=/0x75:3840x2085/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23342321/Ghostwire_Tokyo_Dog.png" class="d-block w-100" alt="..."/>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
  )
}

export default Carousel