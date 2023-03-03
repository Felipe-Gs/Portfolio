import React from "react";
import ScrollToTop from "../BotaoUP/BotaoUp";

export default function Footer() {
  return (
    <>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          marginTop: "8%",
          backgroundColor: "#0D0D0D",
          color: "white",
          height: "5rem",
          display: "flex",
        }}
      >
        <div>
          contatofelipegomes.dev@gmail.com
          <br />
          Palhano-Ce
        </div>
        <div
          style={{ position: "absolute", right: "30px", marginBottom: "30px" }}
        >
          <ScrollToTop />
        </div>
      </div>
    </>
  );
}
