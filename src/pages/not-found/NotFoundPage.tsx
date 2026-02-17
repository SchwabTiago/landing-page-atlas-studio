import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
      <h1>Not found page example</h1>
      <Link to="/">Return to main page</Link>
    </>
  );
}
