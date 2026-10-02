function ContactPage() {
  return (
    <div className="contact-page">
      <p className="section-label">CONTACT</p>

      <h1>Let's work together</h1>

      <p className="contact-page-description">
        I'm open to frontend opportunities, internships and interesting
        projects. Feel free to contact me through any of the platforms below.
      </p>

      <div className="contact-page-links">
        <a href="mailto:bozorovjavohir075@gmail.com">
          <span className="contact-number">01</span>

          <div>
            <strong>Email</strong>
            <span>bozorovjavohir075@gmail.com</span>
          </div>

          <span className="contact-arrow">↗</span>
        </a>

        <a href="https://t.me/JBSh71" target="_blank" rel="noreferrer">
          <span className="contact-number">02</span>

          <div>
            <strong>Telegram</strong>
            <span>@JBSh71</span>
          </div>

          <span className="contact-arrow">↗</span>
        </a>

        <a
          href="https://github.com/bozorovjavohir"
          target="_blank"
          rel="noreferrer"
        >
          <span className="contact-number">03</span>

          <div>
            <strong>GitHub</strong>
            <span>github.com/bozorovjavohir</span>
          </div>

          <span className="contact-arrow">↗</span>
        </a>
      </div>
    </div>
  );
}

export default ContactPage;
