import React,{useEffect} from 'react'
import fotoperfil from '../imgs/fotoperfil.jpeg'
import Aos from 'aos';
import "aos/dist/aos.css";

export default function Sobre() {
  useEffect(()=>{
    Aos.init({duration: 2000});
  },[]);
  return (
    <>
      <div data-aos="fade-up" style={{marginTop:'5%', width:'100%', color:'white',}}>
          <div data-aos="fade-up" style={{textAlign:"center", alignItems:"center"}}>
              <h2 style={{color:'whitesmoke'}}>Sobre</h2>
          </div>
          <div style={{display:"flex", width:"100%", justifyContent:'space-evenly', alignItems:"center"}}>
            <div data-aos="fade-up" style={{width:'50%'}}>
                
                <p style={{color:"whitesmoke"}}>Gosto de praticar esportes, estudo sobre finanças, estou sempre ligado nas novas tecnologias e busco sempre está atualizado no mercado, sou bastante proativo, gosto de trabalhar em equipe, dedicação é uma das minhas principais caracteristicas.</p>
            </div>
            <div data-aos="fade-up" style={{justifyContent:"center", alignItems:"center"}}>
                <img alt='foto de minha de perfil' width={150} style={{borderRadius:'50%'}} src={fotoperfil}/>
            </div>
          </div>
      </div>
    </>
  )
}
