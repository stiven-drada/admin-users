import "./UserForm.css";
import { useForm } from "react-hook-form";
const UserForm = ({ onClose, onSend, initialData }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: initialData,
  });

  const onSubmit = (data) => {
    if (initialData) onSend({ id: initialData.id, ...data });
    else onSend(data);
  };
  return (
    <form className="user-form" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="user-form_title">
        {initialData ? "Edit User" : "New User"}
      </h2>
      <button
        type="button"
        className="user-form__close-btn"
        onClick={() => onClose()}
      >
        X
      </button>
      <div className="user-form__inputs">
        <div className="use-form_input-container">
          <label htmlFor="nameId" className="user-form__label">
            First Name
          </label>
          <input
            className="inputs"
            type="text"
            placeholder="juanito"
            id="nameId"
            {...register("first_name")}
          />
          <div className="highlight"></div>
        </div>

        <div className="use-form_input-container">
          <label htmlFor="lastNameId" className="user-form__label">
            Last Name
          </label>
          <input
            className="inputs"
            type="text"
            placeholder="Ramirez"
            id="lastNameId"
            {...register("last_name")}
          />
          <div className="highlight"></div>
        </div>

        <div className="use-form_input-container">
          <label htmlFor="emailId" className="user-form__label">
            Email
          </label>
          <input
            className="inputs"
            type="email"
            placeholder="example@mail.com"
            id="emailId"
            {...register("email")}
          />
          <div className="highlight"></div>
        </div>

        <div className="use-form_input-container">
          <label htmlFor="passwordId" className="user-form__label">
            Password
          </label>
          <input
            className="inputs"
            type="password"
            placeholder="xxxxxx"
            id="passwordId"
            {...register("password")}
          />
          <div className="highlight"></div>
        </div>

        <div className="use-form_input-container">
          <label htmlFor="birthdayId" className="user-form__label">
            Birthday
          </label>
          <input
            className="inputs"
            type="date"
            id="birthdayId"
            {...register("birthday")}
          />
          <div className="highlight"></div>
        </div>
      </div>

      <button type="submit" className="user-form__submit">
        {" "}
        {initialData ? "save changes" : "Add new user"}
      </button>
    </form>
  );
};

export default UserForm;
