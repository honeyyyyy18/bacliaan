function Contact() {
    return (
      <section className="contact">
        <h1>CONTACT ME</h1>
  
        <form>
          <input type="text" id="name" placeholder="Name" /><br /><br />
          <input type="email" id="email" placeholder="Email" /><br /><br />
          <textarea placeholder="Message"></textarea><br /><br />
          <button type="submit" id="submitBtn">SEND</button>
        </form>
  
      </section>
    );
  }
  
  export default Contact;