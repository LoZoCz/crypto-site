import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <main className="notFound__main">
      <h1 className="notFound__main-title h1">404 - Nie znaleziono</h1>
      <p className="notFound__main-text h4">
        Przepraszamy, strona, której szukasz, nie istnieje.
      </p>
      <Button
        title="Powróć na strone główną"
        addClasses={["notFound__main-link", "p", "primary-btn"]}
        clickFunc={() => navigate("/")}
      />
    </main>
  );
};

export default NotFound;
