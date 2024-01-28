import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>MY APP</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">Create New blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
