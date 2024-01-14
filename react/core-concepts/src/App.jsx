import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./App.css";

export default function App(route) {
  if (route.path === "/") {
    return route.element;
  }

  return (
    <div className="app-container">
      {route.element}
      <div className="app-container-back-button">
        <Link to={"/"}>Voltar</Link>
      </div>
    </div>
  );
}

App.propTypes = {
  route: {
    title: PropTypes.string,
    path: PropTypes.string,
    element: PropTypes.element,
  },
};
