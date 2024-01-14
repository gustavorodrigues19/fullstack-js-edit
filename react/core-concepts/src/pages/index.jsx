import { Link } from "react-router-dom";
import { ROUTES_LIST } from "../routes";
import "./style.css";

function HomePage() {
  const getItemName = (route, key) => `${key}. ${route.title}`;

  return (
    <div className="home-container">
      <h1 className="home-title">React Core Concepts</h1>
      <ul className="home-list">
        {ROUTES_LIST.map((route, key) =>
          route?.title ? (
            <li className="home-list-item" key={route.title}>
              <Link to={route.path}>{getItemName(route, key)}</Link>
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
}

export default HomePage;
