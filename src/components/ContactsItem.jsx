import React from "react";
import "./styles/ContactsItem.scss";
const ContactsItem = ({ contact }) => {
  return (
    <div className="contacts-item">
      <a className="contacts-item__link" target="_blank" href={contact.link}>
        <img src={contact.icon} alt={contact.title} />
      </a>
    </div>
  );
};

export default ContactsItem;
