import logo from "../logo.svg";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <>
      <Link to="/">
        <img src={logo} className="App-logo" alt="logo" />
      </Link>
      <Link to="/other">
        <img src={logo} className="App-logo" alt="logo" />
      </Link>
    </>
  );
};
