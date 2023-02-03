import React from 'react'
import ScrollToTop from '../BotaoUP/BotaoUp'



export default function Footer() {
  return (
    <>
    <div style={{
    justifyContent:"center", 
    alignItems:"center", 
    textAlign:'center', 
    marginTop:'8%', 
    backgroundColor:'#212529', 
    color:"white", 
    borderRadius:'00px 40px',
    display: 'flex',
    
    }}>
        <div>
          contatofelipegomes.dev@gmail.com<br/>Palhano Ce
        </div>
        <div style={{position:'absolute', right:'30px', marginBottom:'30px'}}>
          <ScrollToTop/>
        </div>
    </div>
    </>
  )
}
