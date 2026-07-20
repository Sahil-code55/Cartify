export default function Contact() {
  return (
    <div className="page contact-page">
      <h1>Contact Us</h1>
      <p>Have questions? Reach out to our support team.</p>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Subject" required />
        <textarea placeholder="Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
