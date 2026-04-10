function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact">
          <h2>Contact</h2>

          <p className="contact-message">
            お気軽にご連絡ください。ポートフォリオや開発内容についてお話しできます。
          </p>

          <div className="contact-buttons">
            <a href="mailto:tk56.devlab@gmail.com" className="contact-btn">
              📩 メールで連絡する
            </a>

            <a
              href="https://github.com/tk56-devlab"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn outline"
            >
              💻 GitHubを見る
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;