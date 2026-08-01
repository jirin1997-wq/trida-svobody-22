import React, { useEffect, useRef } from 'react';
import { SCROLL_SCRUB_SCENES, BRAND_TOKENS } from './scroll-scrub-scenes';
import styles from './index.module.css';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initLenis = async () => {
      try {
        const Lenis = (await import('lenis')).default;
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

        let lastTime = Date.now();
        const onAnimationFrame = (time: number) => {
          lenis.raf(time - lastTime);
          lastTime = time;
          requestAnimationFrame(onAnimationFrame);
        };
        requestAnimationFrame(onAnimationFrame);

        const container = containerRef.current;
        if (!container) return;

        // ScrollTrigger setup
        SCROLL_SCRUB_SCENES.forEach((scene, idx) => {
          const proxy = { skew: 0, skewSetter(v: number) { this.skew = v; }, skewGetter() { return this.skew; }, onUpdate() {} },
            skewSetter = gsap.quickSetter(".scrubber", "skewY", "deg"),
            clamp = gsap.utils.clamp(-20, 20);
          gsap.set(".scrubber", { transformOrigin: "center center", force3D: true });
          ScrollTrigger.create({
            onUpdate: (self) => {
              let skew = clamp(self.getVelocity() / 300);
              if (Math.abs(skew) > Math.abs(proxy.skew)) {
                proxy.skew = skew;
              }
              skewSetter(proxy.skew);
              gsap.to(proxy, { skew: 0, duration: 0.8, ease: "power3", overwrite: false });
            },
          });
          gsap.set(".scrubber", { skewY: 0, force3D: true }, 0);

          gsap.timeline({ scrollTrigger: { trigger: `.scene-${idx}`, start: "top center", end: "bottom center", scrub: 1 } })
            .to(`.scene-${idx}`, { opacity: 1, duration: 0.5 }, 0);
        });
      } catch (err) {
        console.error("Lenis init failed:", err);
      }
    };

    initLenis();
  }, []);

  return (
    <div ref={containerRef} className={styles.container}>
      <div className={styles.scrubber}>
        {SCROLL_SCRUB_SCENES.map((scene, idx) => (
          <section key={idx} className={`${styles.scene} scene-${idx}`} style={{ backgroundColor: scene.bgColor }}>
            <div className={styles.sceneContent}>
              <h1 style={{ color: BRAND_TOKENS.colors.white }}>{scene.headline}</h1>
              <p style={{ color: BRAND_TOKENS.colors.gray }}>{scene.description}</p>
              {scene.content?.image && <img src={scene.content.image} alt={scene.headline} className={styles.sceneImage} />}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
