/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Contact() {
  return (
    <div className="contact-page">
      <div className="heading">
        <h2>// contact</h2>
        <Link to="/">
          <i className="fas fa-angle-double-left fa-2x"></i>
        </Link>
      </div>
      <div className="desc">
        <p>i'll be in touch as soon as possible...</p>
      </div>
      <form name="contact" className="form" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <div className="first-half">
          <div className="name top">
            <label htmlFor="name">name: </label>
            <input type="text" name="name" id="name" placeholder="name" />
          </div>
          <div className="email top">
            <label htmlFor="email">e-mail: </label>
            <input type="email" name="email" id="email" placeholder="e-mail id" />
          </div>
        </div>
        <div className="msg">
          <label htmlFor="msg">message: </label>
          <input type="text" name="message" id="msg" placeholder="contacting me for..." />
        </div>
        <div className="submit-btn">
          <input type="submit" value="Submit" />
        </div>
      </form>
      <div className="email">
        <p>or write to me @ <a href="mailto:sunnithdev@gmail.com">sunnithdev@gmail.com</a></p>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;

