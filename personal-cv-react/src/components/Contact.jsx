import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost/cv-api/process.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, message })
    })
      .then(res => res.json())
      .then(data => {
        if (data.message) {
          alert(data.message);
        } else {
          alert("Unexpected error occurred.");
        }
      })
      .catch(err => {
        alert("Error: " + err.message);
        console.error(err);
      });
  }

  return (
    <section className="card">
      <h2 className="education-title">CONTACT ME</h2>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          style={inputStyle}
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          style={inputStyle}
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
          rows={5}
          style={{ ...inputStyle, resize: "vertical" }}
        />
        <div style={{ textAlign: "center" }}>
          <button type="submit" style={{
            backgroundColor: "#1976d2",
            color: "#fff",
            border: "none",
            padding: "10px 32px",
            borderRadius: "6px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer"
          }}>SEND</button>
        </div>
      </form>
    </section>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px 16px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  fontSize: "15px",
  outline: "none",
  boxSizing: "border-box"
};

export default Contact;