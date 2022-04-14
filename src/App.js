import React, {useEffect, useState} from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { Home, A, B, Navbar, Carousel } from './component';
import { Route, Routes } from 'react-router-dom';




function App() {
 
  const [a, setA] = useState([])
  const [b, setB] = useState([])
  const [c, setC] = useState([])
  const [load, setLoading] = useState(false)

  const getA = () => {
    try {
      axios('https://newsapi.org/v2/everything?q=game&apiKey=9e29a984bfe84e92bf2b3a43aa70fb3e')
      .then((res)=>{
        console.log(res.data)
        setA(res.data.articles)
        setLoading(true)
      })
    } catch (e) {
      console.log(e)
    }
  }

  const getB = () => {
    try {
      axios('https://newsapi.org/v2/everything?q=Sport&apiKey=9e29a984bfe84e92bf2b3a43aa70fb3e')
      .then((res)=>{
        console.log(res.data)
        setB(res.data.articles)
        setLoading(true)
      })
    } catch (e) {
      console.log(e)
    }
  }

  const getC = () => {
    try {
      axios('https://newsapi.org/v2/everything?q=movie&from=2022-04-12&sortBy=popularity&apiKey=9e29a984bfe84e92bf2b3a43aa70fb3e')
      .then((res)=>{
        console.log(res.data)
        setC(res.data.articles)
        setLoading(true)
      })
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(()=>{
    getA()
    getB()
    getC()
  },[])

  return (
  <div style={{backgroundColor : 'rgb(250, 255, 175)'}}>
    <div className='pb-5' >
      <Navbar data={a} data2={b}/>
      <div className="container mt-4">
        <div className="row">
          <div className="col-12">
            <Carousel/>
          </div>
        </div>
        <Routes>
          <Route path='/' exact element={<Home load={load} a={a} b={b} c={c}/>}/>
          <Route path='/game' exact element={<A load={load} dataA={a}/>}/>
          <Route path='/sport' exact element={<B load={load} dataB={b}/>}/>
        </Routes>
      </div>
    </div>
  </div>
  )
}

export default App;
