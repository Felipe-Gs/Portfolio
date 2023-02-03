import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Skills from '../Skills'
import Carrosel from '../Carrosel'
import Contato from '../Contato'
import img3 from '../imgs/img3.png';


export default function Habilidades() {
  return (
    <>
    <div style={{ backgroundImage: `url(${img3})`,  backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
        <div><Header/></div>
        <div style={{padding:20, textAlign:"center", marginTop:'2%'}}>
            <p style={{fontSize:20, color:"whitesmoke"}}>Skills e Projetos</p>
        <div style={{marginTop:'3%'}}>
            <Carrosel/>
        </div>
        <div style={{marginTop:'2%'}}>
            <Skills/>
        </div>
        <div>
            <Contato/>
        </div>
        </div>
        <div>
            <Footer/>
        </div>
    </div>
    </>
  )
}
