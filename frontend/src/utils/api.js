import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:4000/api"
});

export async function getProdutosRanking() {
  const res = await api.get("/produto/ranking");
  return res.data;
}
export async function getPostsBlog() {
  const res = await api.get("/blog/posts");
  return res.data;
}
export async function getDepoimentos() {
  const res = await api.get("/depoimento?aprovado=1");
  return res.data;
}