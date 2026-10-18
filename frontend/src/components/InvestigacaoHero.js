import React from "react";
import Lottie from "lottie-react";
import lupaAnimada from "../assets/illustrations/lupa-animada.json";
import boneco3d from "../assets/illustrations/boneco-lupa-3d.png";
import investigacaoSvg from "../assets/illustrations/investigacao.svg";

export default function InvestigacaoHero() {
  return (
    <section className="investigacao-hero">
      <div className="hero-text">
        <h1>
          Descubra o que precisa com <span className="highlight">consultas inteligentes</span>
        </h1>
        <p>
          Tecnologia de investigação online com confiabilidade, segurança e agilidade.
        </p>
      </div>
      <div className="hero-visuals">
        <div className="hero-lottie">
          <Lottie animationData={lupaAnimada} loop={true} style={{ height: 130, width: 130 }} />
        </div>
        <img src={boneco3d} alt="Boneco 3D segurando lupa" className="hero-boneco" height={120} />
        <img src={investigacaoSvg} alt="Cenário investigação" className="hero-svg" height={100} />
      </div>
    </section>
  );
}