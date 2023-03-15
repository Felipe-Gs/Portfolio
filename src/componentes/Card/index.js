import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import onibusApp from "../imgs/onibusApp.png";
import pae from "../imgs/pae.jpeg";
import net from "../imgs/net.png";
import googleAuth from "../imgs/googleAuth.jpg";
import redesocial from "../imgs/redesocial.png";
import NLW from "../imgs/icon.png";
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
      title: "Rede Social App",
      subTitle:
        "Projeto fullStack criado com React native, node.js, postgreSQL entre outras, o app te várias funcionalidades, dentre elas, criar usuario, deletar, fazer postagens, visualizar postagens dos outros usúarios",
      image: redesocial,
      link: "https://github.com/Felipe-Gs/RedeSocialApp",
    },
    {
      title: "App bolão da Copa NLW",
      subTitle:
        "Projeto feito no bootcamp da Rockteseat, onde pude desenvolver uma aplicação mobile, integrada com o node.js, e fastify no lado do servidor",
      image: NLW,
      link: "https://github.com/Felipe-Gs/NLW-frontend",
    },
    {
      title: "Netflix Mobile",
      subTitle:
        "Clone Netflix, criado com React native, projeto muito legal e divertido de ser criado, aprendi muito com esse projeto",
      image: net,
      link: "https://github.com/Felipe-Gs/Clone_Netflix_ReactNative",
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
              <Col key={index} data-aos="fade-up" className="text-center">
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
                        Ver no github
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
