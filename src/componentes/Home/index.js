import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Sobre from "../Sobre";
import Header from "../Header";
import Footer from "../Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import { Parallax } from "react-parallax";
import "./Home.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const sobreRef = useRef(null);
  const handleSobre = () => {
    sobreRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Parallax strength={300}>
      <div
        style={{
          // backgroundImage: `url(${img3})`,
          // backgroundSize: "cover",
          // backgroundRepeat: "no-repeat",
          backgroundColor: "#000000",
          color: "white",
          flex: 1,
        }}
      >
        <Header />
        <div
          className="div-container"
          style={{
            color: "whitesmoke",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            margin: 10,
            width: "100vw",
            height: "100vh",
            marginTop: "5rem",
          }}
        >
          <div
            className="div-text"
            style={{
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              marginTop: "5rem",
              alignItems: "center",
              position: "relative",
              // marginTop: "7rem",
            }}
          >
            <p
              className="text-nome"
              data-aos="fade-right"
              style={{ color: "white", fontSize: "4rem", fontWeight: 100 }}
            >
              Olá, sou Felipe Gomes
            </p>
            <h2 data-aos="fade-left" style={{ color: "white" }}>
              Desenvolvedor FullStack
            </h2>

            <div className="textoinicio" style={{ width: "70%" }}></div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div>
                <Button
                  data-aos="fade-up"
                  href="https://docs.google.com/uc?export=download&id=1QzKQWbozgDCSSFSRhcQz4xuHKNPzDoHW"
                  target="_blanck"
                  // variant="dark"

                  style={{
                    width: "100%",
                    marginTop: "2%",
                    backgroundColor: "#0D0D0D",
                    border: "none",
                    marginBottom: "15px",
                  }}
                >
                  Baixe meu curriculo
                </Button>
              </div>
              <FontAwesomeIcon
                onClick={handleSobre}
                className="icon-pula fa-xl"
                data-aos="flip-left"
                icon={faArrowDown}
                color={"green"}
                size={"20px"}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
        </div>
        <div
          ref={sobreRef}
          style={{
            width: "100vw",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            marginBottom: "3rem",
          }}
          data-aos="fade-up"
        >
          <Sobre />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </Parallax>
  );
}
