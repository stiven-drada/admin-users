import "./Header.css";
const Header = ({ onCreate }) => {
  return (
    <header className="header">
      <h1>Users</h1>
      <button onClick={() => onCreate()} className="btn-create">
        + Add User
      </button>
    </header>
  );
};

export default Header;
