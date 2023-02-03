import React, {useEffect} from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import teste from '../imgs/teste.png'
import dio from '../imgs/dio.jpg';
import hotel from '../imgs/hotel.png';
import pae from '../imgs/pae.jpeg';
import portifolio from '../imgs/portifolio.png';
import net from '../imgs/net.png';
import portApp from '../imgs/porApp.jpeg';
import googleAuth from '../imgs/googleAuth.jpg';
import NLW from '../imgs/icon.png';
import Aos from 'aos';
import "aos/dist/aos.css";

//css
import './style.css'

export default function Carde() {
  useEffect(()=>{
    Aos.init({duration: 2000});
  },[]);
    function GridExample() {
        return (
          <>
          <Row xs={1} md={4} className="justify-content-center ">
            {Array.from({ length: 1 }).map((_, idx) => (
              <Col data-aos="fade-up" className="text-center" >
                <Card className='cardd'>
                  <Card.Img variant="top" src={googleAuth} />
                  <Card.Body>
                    <Card.Title>Google auth</Card.Title>
                    <Card.Text>
                      Projeto desenvolvido com React TypeScript, onde podemos logar fazendo autenticação com o google atravez do Firebase, logo em seguida podemos ver alguns posts que foram pegos de uma API externa atravez do axios.<br/>
                      <Button href="https://github.com/Felipe-Gs/Google-auth" target='_blanck' size='lg' variant="secondary">Ver no github</Button>
                    </Card.Text>
                  
                  </Card.Body>
                </Card>
              </Col>
            ))}
            {Array.from({ length: 1 }).map((_, idx) => (
              <Col data-aos="fade-up" className="text-center">
                <Card className='cardd'>
                  <Card.Img variant="top" src={teste} />
                  <Card.Body>
                    <Card.Title>Netflix web</Card.Title>
                    <Card.Text>
                      Clone netflix desenvolvido em com Reactjs, um dos meus primeiros projetos, bem divertido e interessante esse tipo de projeto, aprendi muito com esse projeto e me auxiliou bastante no inicio<br/>
                      <Button href="https://github.com/Felipe-Gs/Clone-Netflix" target='_blanck' size='lg' variant="secondary">Ver no github</Button>
                    </Card.Text>
                  
                  </Card.Body>
                </Card>
              </Col>
            ))}
            {Array.from({ length: 1 }).map((_, idx) => (
              <Col data-aos="fade-up" className="text-center">
                <Card  className='cardd' >
                  <Card.Img variant="top" src={NLW} />
                  <Card.Body>
                    <Card.Title>App bolão da Copa NLW</Card.Title>
                    <Card.Text>
                      Projeto feito no bootcamp da Rockteseat, onde pude desenvolver uma aplicação mobile, integrada com o node.js, e fastify no lado do servidor<br/>
                      <Button href="https://github.com/Felipe-Gs/NLW-frontend" target='_blanck' size='lg' variant="secondary">Ver no github</Button>
                    </Card.Text>
                  
                  </Card.Body>
                </Card>
              </Col>
            ))}
            {Array.from({ length: 1 }).map((_, idx) => (
              <Col data-aos="fade-up" className="text-center">
                <Card className='cardd'>
                  <Card.Img variant="top" src={pae} />
                  <Card.Body>
                    <Card.Title>App de apoio a comunidade academica russana</Card.Title>
                    <Card.Text>
                      Projeto sendo desenvolvido na faculdade, para auxiliar os estudantes da faculdade federal de ceará(App de monitoria) React Native.<br/>
                      <Button href="https://github.com/PAE-UFC-Russas" target='_blanck' size='lg' variant="secondary">Ver no github</Button>
                    </Card.Text>
                  
                  </Card.Body>
                </Card>
              </Col>
            ))}
            {Array.from({ length: 1 }).map((_, idx) => (
              <Col data-aos="fade-up" className="text-center">
                <Card className='cardd'>
                  <Card.Img variant="top" src={portifolio} />
                  <Card.Body>
                    <Card.Title>1ª Portifolio Web </Card.Title>
                    <Card.Text>
                      Portifolio criado com Reactjs, primeiro projeto que fiz para treinar as habilidades e aprender com os desafios do projeto<br/>
                      <Button href="https://github.com/Felipe-Gs/Portifolio-Pessoal" target='_blanck' size='lg' variant="secondary">Ver no github</Button>
                    </Card.Text>
                  
                  </Card.Body>
                </Card>
              </Col>
            ))}
            {Array.from({ length: 1 }).map((_, idx) => (
              <Col data-aos="fade-up" className="text-center">
                <Card className='cardd'>
                  <Card.Img variant="top" src={net} />
                  <Card.Body>
                    <Card.Title>Netflix Mobile</Card.Title>
                    <Card.Text>
                      Clone Netflix, criado com React native, projeto muito legal e divertido de ser criado, aprendi muito com esse projeto<br/>
                      <Button href="https://github.com/Felipe-Gs/Clone_Netflix_ReactNative" target='_blanck' size='lg' variant="secondary">Ver no github</Button>
                    </Card.Text>
                  
                  </Card.Body>
                </Card>
              </Col>
            ))}

            {Array.from({ length: 1 }).map((_, idx) => (
              <Col data-aos="fade-up" className="text-center">
                <Card className='cardd'>
                  <Card.Img variant="top" src={portApp} />
                  <Card.Body>
                    <Card.Title>App Portifolio desenvolvido com React Native</Card.Title>
                    <Card.Text>
                      Contem informações, projetos e contato, projeto bem interessante de trabalhar e treinar a tecnologia<br/>
                      <Button href="https://github.com/Felipe-Gs/PortifolioAPP" target='_blanck' size='lg' variant="secondary">Ver no github</Button>
                    </Card.Text>
                  
                  </Card.Body>
                </Card>
              </Col>
            ))}
            {Array.from({ length: 1 }).map((_, idx) => (
              <Col data-aos="fade-up" className="text-center">
                <Card className='cardd'>
                  <Card.Img variant="top" src={''} />
                  <Card.Body>
                    <Card.Title>Em breve</Card.Title>
                    <Card.Text>
                      Projeto sendo criado, logo mais estará disponivel...<br/>
                      <Button href="https://github.com/Felipe-Gs" target='_blanck' size='lg' variant="secondary">Ver no github</Button>
                    </Card.Text>
                  
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </>
        );
      }

  return (
    <GridExample/>
    
  )
}
