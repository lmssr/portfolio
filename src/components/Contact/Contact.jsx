import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta || 'Would you like to work with me?'}
            </p>
            <div className="col-12 col-sm-8 col-md-6 mx-auto">
              <form
                action="https://formspree.io/luc.mosser86@gmail.com"
                method="POST">
                <div className="form-group contact-wrapper__text">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    placeholder="Name"/>
                </div>
                <div className="form-group contact-wrapper__text">
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Email"/>
                </div>
                <div className="form-group contact-wrapper__text">
                  <textarea
                    name="description"
                    id="description"
                    className="form-control"
                    row="20"
                    placeholder="Your Message"/>
                </div>
                <button
                  type="submit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn cta-btn--resume"
                  href={email ? `mailto:${email}` : 'https://github.com/cobidev/react-simplefolio'}
                >
                <a>
                {btn || "Let's Talk"}
                </a>
                </button>
              </form>
            </div>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
