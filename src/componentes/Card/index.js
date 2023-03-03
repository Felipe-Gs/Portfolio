import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import teste from "../imgs/teste.png";
import onibusApp from "../imgs/onibusApp.png";
import pae from "../imgs/pae.jpeg";
import portifolio from "../imgs/portifolio.png";
import net from "../imgs/net.png";
import googleAuth from "../imgs/googleAuth.jpg";
import NLW from "../imgs/icon.png";
import Aos from "aos";
import "aos/dist/aos.css";

//css
import "./style.css";

export default function Carde() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  function GridExample() {
    return (
      <>
        <Row xs={1} md={4} className="justify-content-center ">
          {Array.from({ length: 1 }).map((_, idx) => (
            <Col data-aos="fade-up" className="text-center">
              <Card className="cardd">
                <Card.Img variant="top" src={googleAuth} />
                <Card.Body>
                  <Card.Title>Google auth</Card.Title>
                  <Card.Text variant="secondary" color="black">
                    Projeto desenvolvido com React TypeScript, onde podemos
                    logar fazendo autenticação com o google atravez do Firebase,
                    logo em seguida podemos ver alguns posts que foram pegos de
                    uma API externa atravez do axios.
                    <br />
                    <Button
                      href="https://github.com/Felipe-Gs/Google-auth"
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
          ))}
          {Array.from({ length: 1 }).map((_, idx) => (
            <Col data-aos="fade-up" className="text-center">
              <Card className="cardd">
                <Card.Img variant="top" src={teste} />
                <Card.Body>
                  <Card.Title>Netflix web</Card.Title>
                  <Card.Text>
                    Clone netflix desenvolvido em com Reactjs, um dos meus
                    primeiros projetos, bem divertido e interessante esse tipo
                    de projeto, aprendi muito com esse projeto e me auxiliou
                    bastante no inicio
                    <br />
                    <Button
                      href="https://github.com/Felipe-Gs/Clone-Netflix"
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
          ))}
          {Array.from({ length: 1 }).map((_, idx) => (
            <Col data-aos="fade-up" className="text-center">
              <Card className="cardd">
                <Card.Img variant="top" src={NLW} />
                <Card.Body>
                  <Card.Title>App bolão da Copa NLW</Card.Title>
                  <Card.Text>
                    Projeto feito no bootcamp da Rockteseat, onde pude
                    desenvolver uma aplicação mobile, integrada com o node.js, e
                    fastify no lado do servidor
                    <br />
                    <Button
                      href="https://github.com/Felipe-Gs/NLW-frontend"
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
          ))}
          {Array.from({ length: 1 }).map((_, idx) => (
            <Col data-aos="fade-up" className="text-center">
              <Card className="cardd">
                <Card.Img variant="top" src={pae} />
                <Card.Body>
                  <Card.Title>
                    App de apoio a comunidade academica russana
                  </Card.Title>
                  <Card.Text>
                    Projeto sendo desenvolvido na faculdade, para auxiliar os
                    estudantes da faculdade federal de ceará(App de monitoria)
                    React Native.
                    <br />
                    <Button
                      href="https://github.com/PAE-UFC-Russas"
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
          ))}
          {Array.from({ length: 1 }).map((_, idx) => (
            <Col data-aos="fade-up" className="text-center">
              <Card className="cardd">
                <Card.Img variant="top" src={portifolio} />
                <Card.Body>
                  <Card.Title>1ª Portifolio Web </Card.Title>
                  <Card.Text>
                    Portifolio criado com Reactjs, primeiro projeto que fiz para
                    treinar as habilidades e aprender com os desafios do projeto
                    <br />
                    <Button
                      href="https://github.com/Felipe-Gs/Portifolio-Pessoal"
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
          ))}
          {Array.from({ length: 1 }).map((_, idx) => (
            <Col data-aos="fade-up" className="text-center">
              <Card className="cardd">
                <Card.Img variant="top" src={net} />
                <Card.Body>
                  <Card.Title>Netflix Mobile</Card.Title>
                  <Card.Text>
                    Clone Netflix, criado com React native, projeto muito legal
                    e divertido de ser criado, aprendi muito com esse projeto
                    <br />
                    <Button
                      href="https://github.com/Felipe-Gs/Clone_Netflix_ReactNative"
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
          ))}

          {Array.from({ length: 1 }).map((_, idx) => (
            <Col data-aos="fade-up" className="text-center">
              <Card className="cardd">
                <Card.Img variant="top" src={onibusApp} />
                <Card.Body>
                  <Card.Title>Ônibus app</Card.Title>
                  <Card.Text>
                    Projeto fullStack que se trata de um app de monitoramento de
                    alunos para ver quem volta e quem não volta no ônibus para
                    evitar um possível transtorno de ter que esquecer algum
                    aluno em outra cidade
                    <br />
                    <Button
                      href="https://github.com/Felipe-Gs/OnisbusApp"
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
          ))}
          {Array.from({ length: 1 }).map((_, idx) => (
            <Col data-aos="fade-up" className="text-center">
              <Card className="cardd">
                <Card.Img variant="top" src={""} />
                <Card.Body>
                  <Card.Title>Em breve</Card.Title>
                  <Card.Text>
                    Projeto sendo criado, logo mais estará disponivel...
                    <br />
                    <Button
                      href="https://github.com/Felipe-Gs"
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
          ))}
        </Row>
      </>
    );
  }

  return <GridExample />;
}
