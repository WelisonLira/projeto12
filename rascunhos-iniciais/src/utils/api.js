// Mock de API para exemplo
export async function getProdutosRanking() {
  return [
    { _id: "1", nome: "Consulta CPF", descricao: "Verifique a situação do CPF em minutos.", preco: "19,90" },
    { _id: "2", nome: "Consulta Placa", descricao: "Dados de veículos pela placa.", preco: "29,90" },
    { _id: "3", nome: "Consulta CNPJ", descricao: "Informações completas de empresas.", preco: "24,90" },
    { _id: "4", nome: "Consulta Endereço", descricao: "Descubra detalhes por endereço.", preco: "14,90" },
  ];
}

export async function getPostsBlog() {
  return [
    { slug: "como-funciona-consulta", titulo: "Como funciona uma consulta online?", data: "2024-06-10" },
    { slug: "lgpd-e-privacidade", titulo: "LGPD e segurança de dados", data: "2024-06-03" },
    { slug: "dicas-busca-eficiente", titulo: "Dicas para buscar informações com eficiência", data: "2024-05-29" },
  ];
}

export async function getDepoimentos() {
  return [
    { _id: "d1", nome: "Mariana S.", texto: "Rápido e confiável! Recomendo muito.", data: "2024-06-03" },
    { _id: "d2", nome: "Carlos P.", texto: "Me ajudou a resolver um problema importante.", data: "2024-05-28" },
    { _id: "d3", nome: "Fernanda L.", texto: "Atendimento excelente e muita segurança.", data: "2024-05-10" },
  ];
}