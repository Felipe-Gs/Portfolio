import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import fotoinicial2 from '../imgs/fotoinicial2.png';
import Sobre from '../Sobre';
import Header from '../Header';
import Footer from '../Footer';
import img3 from '../imgs/img3.png';
import Aos from 'aos';
import "aos/dist/aos.css";

export default function Home() {
  useEffect(()=>{
    Aos.init({duration: 2000});
  },[]);

  return (
    <div style={{ backgroundImage: `url(${img3})` }}>
    <Header/>
    <div style={{color:'whitesmoke', justifyContent:"center", display:"flex", alignItems:'center', margin:10,}}>
          <div style={{padding:10, justifyContent:'center', display:"flex", flexDirection:"column", marginTop:'5%'}}>
            <h4 data-aos="flip-left" style={{color:'whitesmoke'}}>
              Desenvolvedor Front end
            </h4>
            <h2 data-aos="fade-left" style={{color:'whitesmoke'}}>
              Felipe Gomes
            </h2>
              <div >
                <img alt='foto animada de programação' style={{width: '300px'}} src={fotoinicial2}></img>
              </div>
            <div className='textoinicio' style={{width:'70%'}}>
              <p data-aos="fade-up" style={{color:"whitesmoke"}}>Tenho 20 anos, me chamo Felipe Gomes da Silva, curso Engenharia de Software na Universidade Federal do Ceará, busco uma vaga de emprego como desenvolvedor Front end</p>
            </div>
            <div>
              <Button href='https://docs.google.com/uc?export=download&id=1XKGbzU2NyKVjhSUCWKaaHZJqKkGQIE7T' target='_blanck' variant="dark" style={{width:'50%', marginTop:'2%'}}>Baixe meu curriculo</Button> 
            </div>
          </div>
      </div>
      <div data-aos="fade-up">
        <Sobre/>
      </div>
      <Footer/>
    </div>
  )
}
