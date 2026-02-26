function Contact() {

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;

    if (name === "" || email === "") {
      alert("Please fill in all required fields.");
    } else {
      alert("Form submitted successfully!");
    }
  };

  return (
    <section className="card contact">
      <h1>CONTACT ME</h1>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
        />

        <textarea placeholder="Message"></textarea>

        <button type="submit">
          SEND
        </button>
      </form>
    </section>
  );
}

export default Contact;
