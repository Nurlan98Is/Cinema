import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div style={{ marginTop: "100px", textAlign: "center" }}>
      <h1 style={{ fontSize: "128px" }}>404</h1>
      <h2 style={{ fontSize: "128px" }}>Oops...</h2>
      <h2 style={{ fontSize: "64px", marginBottom: "50px" }}>
        Такой страницы не существует...
      </h2>
      <p style={{ fontSize: "20px", marginBottom: "50px" }}>
        Старница была удалена или еще не создана, обратитесь пожалуйста в тех.
        поддержку: "<strong>cinemate.tekhsupport@gmail.com</strong>"
      </p>
      <Link to="/" style={{ fontSize: "32px" }}>
        Домой
      </Link>
    </div>
  );
};
