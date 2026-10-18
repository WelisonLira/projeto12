import bonecoNotFound from "../assets/illustrations/notfound-3d.png";
export default function NotFound() {
  return (
    <div style={{textAlign: 'center', marginTop: 40}}>
      <img src={bonecoNotFound} height={160} alt="Não encontrado" />
      <h2>Página não encontrada</h2>
      <p>Ops, não localizamos essa página.</p>
    </div>
  );
}