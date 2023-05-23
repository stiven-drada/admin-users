import "./Header.css";
const Header = ({ onCreate }) => {
  return (
    <header className="header">
      <h1>Users</h1>
      <button onClick={() => onCreate()} className="btn-create">
        + Create a new form
      </button>
    </header>
  );
};

export default Header;
