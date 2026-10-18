import React, { useEffect, useState, useContext } from "react";
import InvestigacaoHero from "../components/InvestigacaoHero";
import ProductCard from "../components/ProductCard";
import DepoimentoList from "../components/DepoimentoList";
import "../styles/hero.css";
import "../styles/global.css";
import { I18nContext } from "../context/I18nContext";
import { getProdutosRanking, getPostsBlog, getDepoimentos } from "../utils/api";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";

export default function Home() {
  const { t } = useContext(I18nContext);
  const [ranking, setRanking] = useState([]);
  const [posts, setPosts] = useState([]);
  const [depoimentos, setDepoimentos] = useState([]);

  useEffect(() => {
    getProdutosRanking().then(setRanking);
    getPostsBlog().then(setPosts);
    getDepoimentos().then(setDepoimentos);
  }, []);

  return (
    <PageTransition>
      <div className="home-container">
        <InvestigacaoHero />

        {/* Produtos mais populares */}
        <section className="home-ranking">
          <h2 style={{color: "var(--primary)"}}>Produtos mais populares</h2>
          <div className="ranking-list" style={{display: "flex", flexWrap: "wrap", gap: 24}}>
            {ranking.slice(0,4).map(prod => (
              <ProductCard key={prod._id} produto={prod} />
            ))}
          </div>
          <Link to="/produtos" className="more-link">Ver todos os produtos</Link>
        </section>

        {/* Blog */}
        <section className="home-blog">
          <h2 style={{color: "var(--primary)"}}>Últimas do Blog</h2>
          <ul>
            {posts.slice(0,3).map(post => (
              <li key={post.slug}>
                <Link to={`/blog/${post.slug}`}>{post.titulo}</Link>
                <span className="blog-date">{new Date(post.data).toLocaleDateString()}</span>
              </li>
            ))}
          </ul>
          <Link to="/blog" className="more-link">Ver todos os artigos</Link>
        </section>

        {/* Depoimentos */}
        <section className="home-depoimentos">
          <h2 style={{color: "var(--primary)"}}>O que nossos clientes dizem</h2>
          <DepoimentoList depoimentos={depoimentos.slice(0,3)} />
          <Link to="/depoimentos" className="more-link">Ver mais depoimentos</Link>
        </section>

        {/* Segurança e LGPD */}
        <section className="home-info">
          <h3>Segurança • Rapidez • Privacidade garantida</h3>
          <img src="/icons/ssl.svg" alt="SSL" width={40} />
          <img src="/icons/lgpd.svg" alt="LGPD" width={40} style={{marginLeft: 8}} />
          <p>
            Todas as operações são protegidas por criptografia e seguem as normas da LGPD.
          </p>
        </section>
      </div>
    </PageTransition>
  );
}