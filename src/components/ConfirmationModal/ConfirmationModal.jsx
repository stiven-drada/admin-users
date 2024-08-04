import "./ConfirmationModal.css";
const ConfirmationModal = ({ isVisible, closeModal, deleteUser, user }) => {
  if (!isVisible) return null;
  return (
    <section className="container-form-confirmation">
      <form className="form-confirmation">
        <legend>
          Do you want to delete user:<mark>{user.first_name}</mark> ?
        </legend>
        <div className="form-confirmation__buttons">
          <input
            type="button"
            value="Yes"
            onClick={() => {
              closeModal();
              deleteUser(user);
            }}
          />
          <input type="button" value="No" onClick={closeModal} />
        </div>
      </form>
    </section>
  );
};

export default ConfirmationModal;
