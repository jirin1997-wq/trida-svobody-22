'use client';

import React, { useEffect, useRef } from 'react';
import { ScrollScrub } from '@/components/scroll-scrub/scroll-scrub';
import { SCROLL_SCRUB_SCENES, BRAND_TOKENS } from '@/scroll-scrub-scenes';
import styles from './index.module.css';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Lenis smooth scroll + GSAP integration (Phase 4)
    const initLenis = async () => {
      try {
        const Lenis = (await import('@studio-freight/lenis')).default;
        const gsap = (await import('gsap')).default;
        const ScrollTrigger = (await import('gsap/ScrollTrigger')).default;

        gsap.registerPlugin(ScrollTrigger);

        const lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          direction: 'vertical',
          gestureDirection: 'vertical',
          smooth: true,
          smoothTouch: false,
          touchMultiplier: 2,
        });

        lenis.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((time: number) => {
          lenis.raf(time * 1000);
        });

        gsap.set('html', { scrollBehavior: 'auto' });
      } catch (err) {
        console.warn('Lenis/GSAP not available, falling back to native scroll');
      }
    };

    initLenis();
  }, []);

  return (
    <div ref={containerRef} className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <h1>Třída Svobody 22</h1>
          <p>Pronájem prostorů v centru Olomouce</p>
        </div>
        <nav className={styles.nav}>
          <a href="#heritage">Dům</a>
          <a href="#spaces-apt">Byt</a>
          <a href="#contact">Kontakt</a>
        </nav>
      </header>

      {/* ScrollScrub Hero */}
      <ScrollScrub scenes={SCROLL_SCRUB_SCENES} />

      {/* Section: Heritage */}
      <section id="heritage" className={styles.section} style={{ backgroundColor: BRAND_TOKENS.colors.black }}>
        <div className={styles.content}>
          <h2 style={{ color: BRAND_TOKENS.colors.white }}>Historický dům v centru</h2>
          <p style={{ color: BRAND_TOKENS.colors.lightGrey }}>
            Třída Svobody 22 je elegantní historická nemovitost v srdci Olomouce s bohatou historií a moderním komfortem.
          </p>
          <img src="/images/hero-facade.jpg" alt="Historická fasáda" className={styles.sectionImage} />
        </div>
      </section>

      {/* Section: Spaces - Apartment */}
      <section id="spaces-apt" className={styles.section}>
        <div className={styles.content}>
          <h2>Byt 4+1</h2>
          <div className={styles.specs}>
            <div className={styles.spec}>
              <span className={styles.label}>Plocha</span>
              <span className={styles.value}>127 m²</span>
            </div>
            <div className={styles.spec}>
              <span className={styles.label}>Místnosti</span>
              <span className={styles.value}>4+1</span>
            </div>
            <div className={styles.spec}>
              <span className={styles.label}>Cena</span>
              <span className={styles.value} style={{ color: BRAND_TOKENS.colors.copper }}>24 000 Kč/měsíc</span>
            </div>
          </div>
          <img src="/images/apartment.jpg" alt="Byt 4+1" className={styles.sectionImage} />
          <button
            className={styles.cta}
            style={{ backgroundColor: BRAND_TOKENS.colors.copper }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Kontaktuj nás
          </button>
        </div>
      </section>

      {/* Section: Spaces - Cellar */}
      <section id="spaces-cellar" className={styles.section} style={{ backgroundColor: BRAND_TOKENS.colors.darkGrey }}>
        <div className={styles.content}>
          <h2 style={{ color: BRAND_TOKENS.colors.white }}>Sklepy k pronájmu</h2>
          <p style={{ color: BRAND_TOKENS.colors.lightGrey }}>
            Bezpečné prostory s historickou architekturu vhodné pro úložiště nebo sklepní kanceláře.
          </p>
          <img src="/images/cellar.jpg" alt="Sklepy" className={styles.sectionImage} />
        </div>
      </section>

      {/* Section: Contact */}
      <section id="contact" className={styles.section} style={{ backgroundColor: BRAND_TOKENS.colors.lightGrey }}>
        <div className={styles.content}>
          <h2>Kontakt</h2>
          <div className={styles.contactInfo}>
            <p>
              <strong>Telefon:</strong>{' '}
              <a href="tel:+420732613208">+420 732 613 208</a>
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:jiri.n@outlook.com">jiri.n@outlook.com</a>
            </p>
            <p>
              <strong>Adresa:</strong> Tř. Svobody 619/22, 779 00 Olomouc
            </p>
          </div>

          {/* Google Maps Embed */}
          <iframe
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: '8px', marginTop: '32px' }}
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2595.1234567!2d17.2499975!3d49.5914115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471098765432%3A0x1234567890abcdef!2sTř.%20Svobody%20619%2F22%2C%20Olomouc!5e0!3m2!1scs!2scz!4v1234567890"
            title="Mapa umístění Třída Svobody 22"
          />

          <button
            className={styles.cta}
            style={{ backgroundColor: BRAND_TOKENS.colors.copper, marginTop: '32px' }}
            onClick={() => alert('Kliknutí na CTA — integrovat s kontaktním formulářem')}
          >
            Prohlédnout si prostor
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>&copy; 2026 Třída Svobody 22 | Pronájem prostor v Olomouci</p>
      </footer>
    </div>
  );
}
