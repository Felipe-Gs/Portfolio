import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import onibusApp from "../imgs/onibusApp.png";
import pae from "../imgs/pae.jpeg";
import googleAuth from "../imgs/googleAuth.jpg";
import redesocial from "../imgs/redesocial.png";
import NLW from "../imgs/icon.png";
import Home from "../imgs/Home.png";
import isp from "../imgs/isp.png";
import Aos from "aos";
import "aos/dist/aos.css";

//css
import "./style.css";

export default function Carde() {
   useEffect(() => {
      Aos.init({ duration: 2000 });
   }, []);
   const projetos = [
      {
         title: "App de apoio a comunidade academica russana",
         subTitle:
            "Projeto sendo desenvolvido na faculdade, para auxiliar os estudantes da faculdade federal de ceará(App de monitoria) React Native.",
         image: pae,
         link: "https://github.com/PAE-UFC-Russas",
      },
      {
         title: "Ônibus App",
         subTitle:
            "Projeto fullStack que se trata de um app de monitoramento de alunos para ver quem volta e quem não volta no ônibus, desenvolvido completamente com React native, Node.js, PostgreSQL entre outras.",
         image: onibusApp,
         link: "https://github.com/Felipe-Gs/OnisbusApp",
      },
      {
         title: "Google auth",
         subTitle:
            "Projeto desenvolvido com React TypeScript, onde podemos logar fazendo autenticação com o google atravez do Firebase, logo em seguida podemos ver alguns posts que foram pegos de uma API externa atravez do axios.",
         image: googleAuth,
         link: "https://github.com/Felipe-Gs/Google-auth",
      },
      {
         title: "ISP selling",
         subTitle:
            "Projeto Web FullStack Freelancer, desenvolvido com React e Firebase, SAAS web, trabalhei em dupla do desenvolvimento usando Git no controle de versão.",
         image: isp,
         link: "https://github.com/ISP-Selling/Front-end",
      },
      {
         title: "App bolão da Copa NLW",
         subTitle:
            "Projeto feito no bootcamp da Rockteseat, onde pude desenvolver uma aplicação mobile, integrada com o node.js, e fastify no lado do servidor",
         image: NLW,
         link: "https://github.com/Felipe-Gs/NLW-frontend",
      },
      {
         title: "App carteira pessoal",
         subTitle:
            "Projeto criado com React native + TypeScript e node.js, com funcionalidades muito utilizadas no desenvolvimento de grandes projetos",
         image: Home,
         link: "https://github.com/Felipe-Gs/AppCarteiraRN",
      },
      {
         title: "Em breve",
         subTitle: "Projeto sendo criado, logo mais estará disponivel...",
         image: "",
         link: "https://github.com/Felipe-Gs",
      },
   ];
   function GridExample() {
      return (
         <>
            <Row xs={1} md={4} className="justify-content-center ">
               {projetos.map((item, index) => {
                  return (
                     <Col
                        key={index}
                        data-aos="fade-up"
                        className="text-center"
                     >
                        <Card className="cardd">
                           <Card.Img variant="top" src={item.image} />
                           <Card.Body>
                              <Card.Title>{item.title}</Card.Title>
                              <Card.Text>
                                 {item.subTitle}
                                 <br />
                                 <Button
                                    href={item.link}
                                    target="_blanck"
                                    size="lg"
                                    variant="secondary"
                                 >
                                    Ver no Github
                                 </Button>
                              </Card.Text>
                           </Card.Body>
                        </Card>
                     </Col>
                  );
               })}
            </Row>
         </>
      );
   }

   return <GridExample />;
}
