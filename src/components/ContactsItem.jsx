import React from "react";
import "./styles/ContactsItem.scss";
const ContactsItem = ({ contact }) => {
  return (
    <div className="contacts-item">
      <a className="contacts-item__link">
        <img src={contact.icon} alt="icon" width={100} height={100} />
      </a>
    </div>
  );
};

export default ContactsItem;
