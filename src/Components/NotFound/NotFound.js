import { Link, useNavigate } from "react-router-dom";

import "./NotFound.css";
import Footer from "../Footer/Footer";

function NotFound() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <section className="notfound">
      <div className="notfound__content">
        <p className="notfound__code">404</p>
        <h1 className="notfound__title">Страница не найдена</h1>
        <p className="notfound__text">
          Такой страницы не существует или она была перемещена.
        </p>
        <div className="notfound__actions">
          <Link to="/" className="notfound__button notfound__button_primary">
            На главную
          </Link>
          <button
            type="button"
            className="notfound__button notfound__button_secondary"
            onClick={handleBack}
          >
            Назад
          </button>
        </div>
      </div>
      <div className="notfound__footer">
        <Footer />
      </div>
    </section>
  );
}

export default NotFound;
