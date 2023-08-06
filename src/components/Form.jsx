import { useState } from "react";
import "./styles/Form.scss";

const Form = () => {
  // ! form submit and the handle change
  // ! use emailJS for sending emails,
  // ! https://www.emailjs.com/docs/examples/reactjs/
  const [formData, setFormData] = useState({
    email: "",
    title: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form className="form" onSubmit={formSubmit}>
      <div className="form__group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="form__input"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="form__group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          className="form__input"
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div className="form__group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          className="form__input"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
