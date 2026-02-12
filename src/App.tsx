import { BrowserRouter } from "react-router-dom";
import { PathRoutes } from "./routes/PathRoutes";

export default function App() {
  return (
    <BrowserRouter>
      <PathRoutes />
    </BrowserRouter>
  );
}
