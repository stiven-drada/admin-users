import { PascalCase } from "../../utils/PascalCase";
import "./UserList.css";

const UserList = ({ users, onEditUser, onClose }) => {
  if (!users.length) return <p>Without users</p>;
  return (
    <ul className="container_user_list">
      {users.map((user) => (
        <li key={user.id} className="User-card">
          <article>
            <h2>
              {PascalCase(user.first_name)} {PascalCase(user.last_name)}
            </h2>
            <hr />
            <h3>EMAIL</h3>
            <p className="email">{user.email}</p>
            <hr />
            <h3>BIRTHDAY</h3>
            <p>{user.birthday}</p>
            <hr />

            <div className="container-options">
              <button
                title="Delete User"
                onClick={() => onClose(user)}
                className="btn-delete"
              >
                <ion-icon name="trash-outline"></ion-icon>
              </button>
              <button
                title="Edit User"
                type="button"
                onClick={() => onEditUser(user)}
                className="btn-edit"
              >
                <ion-icon
                  className="icon-edit"
                  name="create-outline"
                ></ion-icon>
              </button>
            </div>
          </article>{" "}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
