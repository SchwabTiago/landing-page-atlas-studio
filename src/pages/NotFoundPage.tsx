import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
      <h1>NotFoundPage</h1>
      <Link to="/">Voltar para a página principal</Link>
    </>
  );
}
