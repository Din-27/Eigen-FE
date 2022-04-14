import React, { useState } from 'react'
import ModalContent from '../modal-content'


function Content({title, descript, img, link}) {
    const [modalShow, setModalShow] = useState(false)

  return (
    <>
        <div className="card bg-dark text-white shadow rounded" style={{width: '13rem'}}>
            <img className='rounded' src={img} style={{height : '100px'}} class="card-img-top" alt="DATA" />
            <div className="card-body">
                <h5 className="card-title">{title.split(" ").slice(0 , 1).join(" ") + ('...')}</h5>
                <p className="card-text">{descript.slice(0, 15) + ('...')}</p>
                <a href={link} className="btn btn-dark btn-outline-primary">Go reading</a>
            </div>
        </div>
    </>
  )
}

export default Content