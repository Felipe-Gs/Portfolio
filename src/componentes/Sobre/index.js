import React, { useEffect } from "react";
import fotoperfil from "../imgs/fotoperfil.jpeg";
import Aos from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTurnRight } from "@fortawesome/free-solid-svg-icons";

export default function Sobre() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div style={{ marginTop: "5%", width: "100%", color: "white" }}>
        <div style={{ textAlign: "center", alignItems: "center" }}>
          <h2 style={{ color: "whitesmoke" }}>Sobre</h2>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <div data-aos="fade-up" style={{ width: "50%" }}>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <FontAwesomeIcon icon={faArrowTurnRight} color={"green"} />

              <h4>DESENVOLVEDOR FULLSTACK</h4>
            </div>
            <h5>
              Tenho experiencia com React, React Native, Node.js, JavaScript,
              entre outras
            </h5>
            <p data-aos="fade-up" style={{ color: "white" }}>
              Tenho 20 anos, me chamo Felipe Gomes da Silva, curso Engenharia de
              Software na Universidade Federal do Ceará, busco uma vaga de
              emprego como desenvolvedor.
            </p>
            <p style={{ color: "whitesmoke" }}>
              Gosto de praticar esportes, estudo sobre finanças, estou sempre
              ligado nas novas tecnologias e busco sempre está atualizado no
              mercado, sou bastante proativo, gosto de trabalhar em equipe,
              dedicação é uma das minhas principais caracteristicas.
            </p>
          </div>
          <div
            data-aos="fade-up"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <img
              alt="foto de minha de perfil"
              width={150}
              style={{ borderRadius: "50%" }}
              src={fotoperfil}
            />
          </div>
        </div>
      </div>
    </>
  );
}
