import { useState, useEffect } from 'react';
import { Mail, Instagram, Twitter, Facebook } from 'lucide-react';

const Other = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { value: '27', label: 'Age' },
    { value: 'Downhill, Super-G', label: 'Specialty' },
    { value: '8th', label: 'Current Ranking' },
    { value: '18', label: 'Podiums' }
  ];

  const events = [
    { date: 'March 12', location: 'Kitzbühel, Austria', countdown: '3 WEEKS' },
    { date: 'April 5', location: 'Val Gardena, Italy', countdown: '7 WEEKS' }
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop'
  ];

  return (
    <div className="container">
      {/* Navigation */}
      <nav className={`nav ${isScrolled ? 'nav--scrolled' : 'nav--transparent'}`}>
        <div className="nav__container">
          <div className={`nav__logo ${isScrolled ? 'nav__logo--dark' : 'nav__logo--light'}`}>
            BRODIE SEGER
          </div>
          <div className="nav__links">
            {['Home', 'About', 'Results', 'Events', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`nav__link ${isScrolled ? 'nav__link--dark' : 'nav__link--light'}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero__background" />
        <div className="hero__content">
          <div className="hero__container">
            <div className="hero__text">
              <h1 className="hero__title">
                BRODIE<br />SEGER
              </h1>
              <p className="hero__subtitle">
                Pushing limits, seeking speed.<br />
                Open for partnerships.
              </p>
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn btn--primary"
              >
                Partner with me
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stats__container">
          {stats.map((stat, index) => (
            <div key={index} className="stats__item">
              <div className="stats__label">{stat.label}</div>
              <div className="stats__value">{stat.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section section--gray">
        <div className="section__container">
          <div className="grid grid--two-col">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=700&fit=crop" 
                alt="Brodie Seger Portrait"
                className="about__image"
              />
            </div>
            <div className="about__content">
              <h2 className="section__title">About</h2>
              <p className="about__text">
                From racing the slopes as a junior in British Columbia to competing on the world stage, 
                my commitment to excellence has driven my journey / aim to push my limits and reach 
                new heights in downhill skiing.
              </p>
              <p className="about__text">
                With years of dedication and countless hours perfecting my craft, I continue to challenge 
                myself on the most demanding courses around the globe. My focus remains on speed, 
                precision, and pushing the boundaries of what's possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results and Sponsors Section */}
      <section id="results" className="section section--white">
        <div className="section__container">
          <div className="grid grid--two-col">
            {/* Results */}
            <div>
              <h2 className="section__title">Results</h2>
              <div>
                <h3 className="section__subtitle">2026</h3>
                <div className="results__grid">
                  {[1, 2, 3, 4].map((num) => (
                    <div key={num} className="results__item">
                      <div className="results__box">
                        <div className="results__number">{num}</div>
                      </div>
                      {num === 1 && <div className="results__label">World Cup</div>}
                      {num === 2 && <div className="results__label">World Cup 2+</div>}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sponsors */}
            <div>
              <h2 className="section__title">Sponsors</h2>
              <div className="sponsors__grid">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="sponsors__box">
                    <span className="sponsors__text">LOGO</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="events" className="section section--gray">
        <div className="section__container">
          <h2 className="section__title">Upcoming Events</h2>
          <div className="grid grid--two-col">
            {events.map((event, index) => (
              <div key={index}>
                <h3 className="event__date">{event.date}</h3>
                <p className="event__location">{event.location}</p>
                <div className="event__countdown">{event.countdown}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section section--white">
        <div className="section__container">
          <h2 className="section__title">Gallery</h2>
          <div className="gallery__grid">
            {galleryImages.map((image, index) => (
              <div key={index} className="gallery__item">
                <img 
                  src={image} 
                  alt={`Gallery ${index + 1}`}
                  className="gallery__image"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section section--blue">
        <div className="contact__container">
          <h2 className="section__title section__title--white">Ready to Partner?</h2>
          <p className="contact__text">
            Join me in pushing the limits of downhill skiing. Let's create something extraordinary together 
            and reach new heights in extreme sports marketing.
          </p>
          <div className="contact__buttons">
            <button className="btn btn--secondary">
              Sponsorship Deck
            </button>
            <button className="btn btn--outline">
              Media Kit
            </button>
          </div>
          <div className="contact__social">
            <Mail className="contact__icon" size={32} />
            <Instagram className="contact__icon" size={32} />
            <Twitter className="contact__icon" size={32} />
            <Facebook className="contact__icon" size={32} />
          </div>
          <div className="contact__info">
            <p>brodie.seger@promail.com</p>
            <p>+1 604 123 4567</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__logo">BRODIE SEGER</div>
          <p className="footer__text">© 2025 Brodie Seger. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Other;