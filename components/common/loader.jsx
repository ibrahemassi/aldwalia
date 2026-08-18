'use client';
import React, { useEffect } from 'react';

function LoadingScreen() {
  useEffect(() => {
    document.documentElement.classList.add('is-loading');

    const interval = setInterval(() => {
      if (typeof gsap === 'undefined') return;

      clearInterval(interval);
      const svg = document.getElementById('svg');
      const tl = gsap.timeline();
      const curve = 'M0 502S175 272 500 272s500 230 500 230V0H0Z';
      const flat = 'M0 2S175 1 500 1s500 1 500 1V0H0Z';

      tl.to('.loader-wrap-heading .load-text , .loader-wrap-heading .cont', {
        delay: 1.5,
        y: -100,
        opacity: 0,
      });
      tl.to(svg, {
        duration: 0.5,
        attr: { d: curve },
        ease: 'power2.easeIn',
      }).to(svg, {
        duration: 0.5,
        attr: { d: flat },
        ease: 'power2.easeOut',
      });
      tl.to('.loader-wrap', { y: '-150vh' });
      tl.add(() => {
        const wrap = document.querySelector('.loader-wrap');
        if (wrap) {
          wrap.style.display = 'none';
          wrap.style.zIndex = '-1';
        }
        document.documentElement.classList.remove('is-loading');
      });
    }, 100);

    return () => {
      clearInterval(interval);
      document.documentElement.classList.remove('is-loading');
    };
  }, []);

  return (
    <div
      className="loader-wrap"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '120dvh',
        minHeight: '120vh',
        background: '#0a1628',
        overflow: 'hidden',
        zIndex: 2147483647,
      }}
    >
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
      </svg>

      <div className="loader-wrap-heading">
        <div className="load-text">
          <span>L</span>
          <span>o</span>
          <span>a</span>
          <span>d</span>
          <span>i</span>
          <span>n</span>
          <span>g</span>
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
