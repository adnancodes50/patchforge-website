import { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  ArrowUp,
  Check,
  ChevronRight,
  Menu,
  MessageCircle,
  Minus,
  Plus,
  Send,
  X,
} from 'lucide-react';
import {
  categories,
  brandName,
  contact,
  faqs,
  footerLinks,
  gallery,
  galleryFilters,
  iconSet,
  navItems,
  process,
  reasons,
  stats,
  testimonials,
} from './data';

function Brand() {
  return (
    <a href="#top" className="brand" aria-label={`${brandName} home`}>
      <img
        className="brand-logo"
        src="/tmy-logo.png"
        alt={brandName}
        width={48}
        height={48}
      />
      <span className="brand-name">{brandName}</span>
    </a>
  );
}

function SectionIntro({ eyebrow, title, text, align = 'center' }) {
  return (
    <div className={`section-intro ${align === 'left' ? 'section-intro-left' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

function AnnouncementBar() {
  return (
    <div className="announcement">
      <span>Premium sportswear patches, labels, and emblems with free artwork review</span>
      <a href="#quote">Get pricing <ChevronRight size={15} /></a>
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav-wrap" aria-label="Primary navigation">
        <Brand />
        <div className={`nav-links ${open ? 'is-open' : ''}`}>
          {navItems.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </div>
        <a className="btn btn-primary nav-cta" href="#quote">
          Get Quote <ArrowRight size={17} />
        </a>
        <button className="icon-btn menu-btn" type="button" aria-label="Toggle menu" onClick={() => setOpen((value) => !value)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
    </header>
  );
}

function Hero() {
  const { BadgeCheck, Gem, Star } = iconSet;

  return (
    <section className="hero section" id="top">
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <span className="hero-badge">
            <BadgeCheck size={16} /> Custom hoodies &amp; patch manufacturer
          </span>
          <h1>
            Premium custom apparel made for teams, brands, and sportswear.
          </h1>
          <p>
            TMY Sports wear creates custom hoodies, embroidered patches, PVC badges, woven labels,
            and iron-on emblems with sharp artwork proofing and export-ready finishing.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#quote">
              Get a Free Quote <ArrowRight size={18} />
            </a>
            <a className="btn btn-outline" href="#gallery">
              View Gallery
            </a>
          </div>
          <div className="trust-row" aria-label="Service highlights">
            <span><Gem size={17} /> Premium materials</span>
            <span><Star size={17} /> 24-hour artwork response</span>
          </div>
        </div>
        <div className="hero-visual reveal delay-1">
          <div className="visual-card">
            <img
              src="/gallery/hoodie-burgundy.png"
              alt="Custom TMY Sports wear hoodie sample"
            />
          </div>
          <div className="floating-spec spec-a">Free artwork proof</div>
          <div className="floating-spec spec-b">Custom hoodies</div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <>
      <section className="stats-band" aria-label={`${brandName} statistics`}>
        <div className="container stats-grid">
          {stats.map(([value, label]) => (
            <div className="stat motion-item" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>
      <div className="marquee-band" aria-hidden="true">
        <div>
          <span>Embroidered patches</span>
          <span>PVC badges</span>
          <span>Leather labels</span>
          <span>Woven emblems</span>
          <span>Custom hoodies</span>
          <span>Sportswear trims</span>
          <span>Custom proofing</span>
        </div>
        <div>
          <span>Embroidered patches</span>
          <span>PVC badges</span>
          <span>Leather labels</span>
          <span>Woven emblems</span>
          <span>Custom hoodies</span>
          <span>Sportswear trims</span>
          <span>Custom proofing</span>
        </div>
      </div>
    </>
  );
}

function Categories() {
  const [active, setActive] = useState(0);
  const selected = categories[active];
  const previewImages = selected.images.slice(0, 3);

  return (
    <section className="section" id="categories">
      <div className="container">
        <SectionIntro
          eyebrow="Product categories"
          title="Every style your project needs"
          text="Choose the material, edge, texture, and backing that matches your product, uniform, merchandise, or campaign."
        />
        <div className="category-tabs" role="tablist" aria-label="Product categories">
          {categories.map((item, index) => (
            <button
              className={active === index ? 'is-active' : ''}
              type="button"
              key={item.title}
              onClick={() => setActive(index)}
              role="tab"
              aria-selected={active === index}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="category-panel motion-item">
          <div>
            <span className="eyebrow">Featured style</span>
            <h3>{selected.heading}</h3>
            <p>{selected.desc}</p>
            <ul className="check-list">
              {selected.points.map((point) => (
                <li key={point}><Check size={17} /> {point}</li>
              ))}
            </ul>
            <a
              className="btn btn-dark"
              href={selected.title === 'Hoodies' ? '#gallery' : '#quote'}
              onClick={() => {
                if (selected.title === 'Hoodies') {
                  window.dispatchEvent(new CustomEvent('gallery-filter', { detail: 'Hoodies' }));
                }
              }}
            >
              {selected.title === 'Hoodies' ? 'View All Hoodies' : 'Start Custom Order'}
            </a>
          </div>
          <div className={`category-image-grid ${selected.title === 'Hoodies' ? 'is-hoodies' : ''}`} key={selected.title}>
            {previewImages.map((image, index) => (
              <img
                className={index === 0 ? 'tab-image-main' : 'tab-image-thumb'}
                key={image}
                src={image}
                alt={`${selected.heading} sample ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const [filter, setFilter] = useState('All');
  const items = useMemo(
    () => (filter === 'All' ? gallery : gallery.filter(([, , type]) => type === filter)),
    [filter],
  );
  const marqueeItems = useMemo(() => [...items, ...items], [items]);

  useEffect(() => {
    const onFilter = (event) => setFilter(event.detail);
    window.addEventListener('gallery-filter', onFilter);
    return () => window.removeEventListener('gallery-filter', onFilter);
  }, []);

  return (
    <section className="section gallery-section" id="gallery">
      <div className="container">
        <div className="split-heading">
          <SectionIntro
            align="left"
            eyebrow="Product gallery"
            title="Patches, hoodies, and custom apparel"
            text="Browse real production samples across embroidered patches, PVC badges, custom hoodies, and printed tees."
          />
          <div className="pill-row" role="tablist" aria-label="Gallery filters">
            {galleryFilters.map((label) => (
              <button
                key={label}
                type="button"
                className={filter === label ? 'is-active' : ''}
                onClick={() => setFilter(label)}
                role="tab"
                aria-selected={filter === label}
              >
                {label === 'Hoodies' ? 'All Hoodies' : label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="gallery-marquee" aria-label="Scrolling product gallery" key={`marquee-${filter}`}>
        <div className="gallery-marquee-track">
          {marqueeItems.map(([title, image, type], index) => (
            <article className="gallery-marquee-card" key={`${type}-${title}-${index}`}>
              <img src={image} alt={title} loading="lazy" />
              <div>
                <span>{type}</span>
                <strong>{title}</strong>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="section">
      <div className="container">
        <SectionIntro
          eyebrow="Why choose us"
          title="A smoother way to order custom patches"
          text="Professional guidance, proof-first production, premium materials, and quality checks help your order move from idea to delivery with confidence."
        />
        <div className="reason-grid">
          {reasons.map(([Icon, title, text]) => (
            <article className="feature-card motion-item" key={title}>
              <div className="feature-icon"><Icon size={24} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="section process-section" id="process">
      <div className="container">
        <SectionIntro
          eyebrow="Ordering process"
          title="Simple process, polished results"
          text="Send the idea, approve the proof, start production, and receive patches that are ready to sell, wear, or distribute."
        />
        <div className="process-line">
          {process.map(([Icon, title, text], index) => (
            <article className="process-step motion-item" key={title}>
              <div className="step-icon"><Icon size={22} /></div>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section className="section cta-section">
      <div className="container cta-banner">
        <div>
          <span className="eyebrow">Production slots open</span>
          <h2>Launch your next patch order with a professional proof first.</h2>
          <p>Send your artwork and receive clear pricing, material guidance, and a production-ready recommendation.</p>
        </div>
        <a className="btn btn-primary" href="#quote">
          Request Pricing <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <SectionIntro
          eyebrow="Testimonials"
          title="Made for people who care about the final detail"
          text="TMY Sports wear supports brands, agencies, teams, and organizations that need patches to feel premium from the first sample."
        />
        <div className="testimonial-grid">
          {testimonials.map(([name, role, quote]) => (
            <article className="quote-card motion-item" key={name}>
              <div className="stars">★★★★★</div>
              <p>"{quote}"</p>
              <strong>{name}</strong>
              <span>{role}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section faq-section" id="faq">
      <div className="container narrow">
        <SectionIntro
          eyebrow="FAQ"
          title="Common questions"
          text="Production details, order quantities, artwork help, and shipping basics."
        />
        <div className="faq-list">
          {faqs.map(([question, answer], index) => (
            <article className={`faq-item ${open === index ? 'is-open' : ''}`} key={question}>
              <button type="button" onClick={() => setOpen(open === index ? -1 : index)}>
                <span>{question}</span>
                {open === index ? <Minus size={20} /> : <Plus size={20} />}
              </button>
              <p>{answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=Sialkot%2C%20Pakistan';

  return (
    <section className="section quote-section" id="quote">
      <div className="container">
        <div className="quote-top-row">
          <div className="quote-copy">
            <span className="eyebrow">Contact</span>
            <h2>Start your custom order with a clear brief</h2>
            <p>
              Whether you need custom hoodies, embroidered patches, PVC badges, or woven labels,
              our team reviews every request carefully and replies with practical recommendations.
            </p>
            <p>
              Include your quantity, preferred size, material, and deadline if you have one.
              We typically respond within 24 business hours with pricing guidance and next steps.
            </p>
            <ul className="quote-points">
              <li><Check size={17} /> Free artwork review before production</li>
              <li><Check size={17} /> Flexible quantities for samples and wholesale</li>
              <li><Check size={17} /> Worldwide shipping with tracking support</li>
              <li><Check size={17} /> Dedicated WhatsApp and email support</li>
            </ul>
          </div>
          <form
            className="quote-form"
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
          >
            <label>
              Name
              <input name="name" placeholder="Your full name" required />
            </label>
            <label>
              Email
              <input name="email" type="email" placeholder="you@email.com" required />
            </label>
            <label>
              Phone
              <input name="phone" type="tel" placeholder="+92 300 0000000" required />
            </label>
            <label>
              Message
              <textarea name="message" rows="5" placeholder="Tell us about your product type, quantity, size, and deadline..." required />
            </label>
            <button className="btn btn-primary form-submit" type="submit">
              Send Message <Send size={17} />
            </button>
            {submitted && <p className="form-note">Message captured for this demo.</p>}
          </form>
        </div>

        <div className="quote-bottom-row">
          <div className="contact-card">
            {contact.map(([Icon, label, value]) => (
              <div className="contact-row" key={label}>
                <Icon size={21} />
                <div>
                  <strong>{label}</strong>
                  <span>{value}</span>
                </div>
              </div>
            ))}
          </div>
          <a className="map-card" href={mapsUrl} target="_blank" rel="noreferrer" aria-label="Open Sialkot Pakistan in Google Maps">
            <iframe
              title="Sialkot Pakistan map"
              src="https://maps.google.com/maps?q=Sialkot%2C%20Pakistan&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <span>Open in Google Maps</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Brand />
          <p>Premium sportswear patch manufacturing with precise proofs, strong materials, and dependable production timelines.</p>
        </div>
        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <h3>{heading}</h3>
            {links.map((link) => (
              <a key={link} href="#quote">{link}</a>
            ))}
          </div>
        ))}
      </div>
      <div className="container footer-bottom">
        <span>Copyright 2026 TMY Sports wear. All rights reserved.</span>
        <span>Custom patches, labels, emblems, and trims.</span>
      </div>
    </footer>
  );
}

function FloatingActions() {
  return (
    <div className="floating-actions" aria-label="Quick actions">
      <a className="whatsapp" href="https://wa.me/923406473164" target="_blank" rel="noreferrer" aria-label="Contact TMY Sports wear on WhatsApp">
        <MessageCircle size={24} />
      </a>
      <button
        className="top-button"
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ArrowUp size={22} />
      </button>
    </div>
  );
}

export default function App() {
  useEffect(() => {
    const animated = document.querySelectorAll('.motion-item, .section-intro, .quote-form, .map-card, .contact-card');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            entry.target.classList.remove('in-view');
          }
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' },
    );

    animated.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Categories />
        <Gallery />
        <WhyChooseUs />
        <Process />
        <CtaBanner />
        <Testimonials />
        <Faq />
        <QuoteForm />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
