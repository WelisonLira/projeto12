import InvestigacaoHero from "../components/InvestigacaoHero";
import "../styles/hero.css";
// ...restante do código da Home

export default function Home() {
  // ...
  return (
    <div className="home-container">
      <InvestigacaoHero />
      {/* ...restante da Home */}
    </div>
  );
}