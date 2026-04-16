import { useEffect, useState } from "react";

function ContactList() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("http://localhost/cv-api/getContacts.php")
      .then(res => res.json())
      .then(data => setContacts(data))
      .catch(err => console.error("Error fetching contacts:", err));
  }, []);

  return (
    <section className="card">
      <h2 style={{ textAlign: "center", color: "#1a1a6e", marginBottom: "16px" }}>
        SAVED CONTACTS
      </h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {contacts.map(contact => (
          <li key={contact.id} style={{
            padding: "10px 16px",
            borderBottom: "1px solid #eee",
            fontSize: "15px"
          }}>
            {contact.name} — <small style={{ color: "#888" }}>{contact.created_at}</small>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ContactList;