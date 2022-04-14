import React from 'react'
import Carousel from '../carousel'
import Content from '../content'
import Navbar from '../navbar'



function C({a, b, c, load}) {
  return (
    <>
          {load ? (
          <div className="col-12">
            <h1 className='mt-5'>News</h1>
            <div className="d-flex justify-content-around flex-wrap">
            {a.map((x)=>{
                  return (
                    <div className="mt-4" key={x.id}>
                      <Content title={x.title} descript={x.content} img={x.urlToImage} link={x.url}/>
                    </div>
                  )
                }).reverse()}
            {b.map((x)=>{
                  return (
                    <div className="mt-4" key={x.id}>
                      <Content title={x.title} descript={x.content} img={x.urlToImage} link={x.url}/>
                    </div>
                  )
                }).reverse()}
            {c.map((x)=>{
                  return (
                    <div className="mt-4" key={x.id}>
                      <Content title={x.title} descript={x.content} img={x.urlToImage} link={x.url}/>
                    </div>
                  )
                }).reverse()}
            </div>
          </div>
          ) : (
            <div className="col-12">
            <h1 className='mt-5'>News</h1>
              <div class="d-flex justify-content-center align-center">
                <div class="spinner-border" role="status">
                  <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
          )}
    </>
  )
}

export default C