function Contact() {
  return (
    <section className="card contact">

      <h1>CONTACT ME</h1>

      <form className="contact-form">
        <input
          type="text"
          id="name"
          placeholder="Name"
        />

        <input
          type="email"
          id="email"
          placeholder="Email"
        />

        <textarea
          placeholder="Message"
        ></textarea>

        <button type="submit" id="submitBtn">
          SEND
        </button>
      </form>

    </section>
  );
}

submitBtn.addEventListener("click", function(event){
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value; 
    if (name==="" || email===""){
        alert("Please fill in all required fields.")
    } else {
        alert("Form submitted successfully!");
    }
});

export default Contact;
