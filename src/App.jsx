import { useEffect, useState } from "react";
import { getAllUsers } from "./services/getAllUser";
import { createUser } from "./services/createUser";
import { updateUser } from "./services/updateUser";
import { deleteUser } from "./services/deleteUser";

import Header from "./components/Header/Header";
import UserList from "./components/UserList.jsx/UserList";
import Modal from "./components/Modal/Modal";
import UserForm from "./components/UserForm/UserForm";
import ConfirtmationModal from "./components/ConfirmationModal/ConfirmationModal";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [editingUserData, setEditingUserData] = useState(null);
  const [lodEdit, setLodEdit] = useState(false);
  const [isVisibleModalConfirm, setIsVisibleModalConfirm] = useState(false);
  const [user, setUser] = useState(null);

  const handlerCreate = () => {
    setIsVisibleModal(true);
  };

  const loadUsers = async () => {
    const userData = await getAllUsers();
    setUsers(userData);
  };

  const handleCloseModal = () => {
    setEditingUserData(null);
    setIsVisibleModal(false);
  };

  const handleSend = async (data) => {
    if (data.id) {
      await updateUser(data.id, data);
      setLodEdit(true);
    } else await createUser(data);

    await loadUsers();
    setIsVisibleModal(false);
  };

  const handleEditUser = (dataUser) => {
    setEditingUserData(dataUser);
    setIsVisibleModal(true);
  };

  const handleModalConfirmDeleteUser = (userId) => {
    setIsVisibleModalConfirm(!isVisibleModalConfirm);
    if (!isVisibleModalConfirm) {
      setUser(userId);
    } else {
      setUser(null);
    }
  };

  const handleDeleteUser = async (data) => {
    await deleteUser(data.id);
    await loadUsers();
  };

  useEffect(() => {
    loadUsers();
    setLodEdit(false);
  }, [lodEdit]);

  return (
    <>
      <Header onCreate={handlerCreate} />
      <UserList
        users={users}
        onEditUser={handleEditUser}
        onClose={handleModalConfirmDeleteUser}
      />
      <Modal isVisible={isVisibleModal}>
        <UserForm
          onClose={() => handleCloseModal()}
          onSend={handleSend}
          initialData={editingUserData}
          idUser={setUser}
        />
      </Modal>
      <ConfirtmationModal
        isVisible={isVisibleModalConfirm}
        closeModal={handleModalConfirmDeleteUser}
        deleteUser={handleDeleteUser}
        user={user}
      />
    </>
  );
}

export default App;
