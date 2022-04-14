import React from 'react'
import Content from '../content'


function B({dataB, load}) {
  return (
    <>
    {load ? (
          <div className="col-12">
            <h1 className='mt-5'>Sport News</h1>
            <div className="d-flex justify-content-around flex-wrap">
            {dataB.map((x)=>{
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

export default B