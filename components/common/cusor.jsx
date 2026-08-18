'use client';
import React, { useEffect, useState } from 'react';

function isTouchDevice() {
  if (typeof window === 'undefined') return true;
  return (
    window.matchMedia('(hover: none), (pointer: coarse)').matches ||
    window.innerWidth <= 1024
  );
}

function Cursor() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (isTouchDevice()) return;

    setEnabled(true);

    const cursor = document.querySelector('.cursor');
    if (!cursor) return;

    const link = document.querySelectorAll('.hover-this');

    const animateit = function (e) {
      const hoverAnim = this.querySelector('.hover-anim');
      if (!hoverAnim) return;
      const { offsetX: x, offsetY: y } = e;
      const { offsetWidth: width, offsetHeight: height } = this;
      const move = 25;
      const xMove = (x / width) * (move * 2) - move;
      const yMove = (y / height) * (move * 2) - move;

      hoverAnim.style.transform = `translate(${xMove}px, ${yMove}px)`;
      if (e.type === 'mouseleave') hoverAnim.style.transform = '';
    };

    const editCursor = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    link.forEach((b) => b.addEventListener('mousemove', animateit));
    link.forEach((b) => b.addEventListener('mouseleave', animateit));
    window.addEventListener('mousemove', editCursor);

    const hoverTargets = document.querySelectorAll('a, .cursor-pointer');
    const onEnter = () => cursor.classList.add('cursor-active');
    const onLeave = () => cursor.classList.remove('cursor-active');
    hoverTargets.forEach((el) => {
      el.addEventListener('mousemove', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      window.removeEventListener('mousemove', editCursor);
      link.forEach((b) => b.removeEventListener('mousemove', animateit));
      link.forEach((b) => b.removeEventListener('mouseleave', animateit));
      hoverTargets.forEach((el) => {
        el.removeEventListener('mousemove', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, [enabled]);

  if (!enabled) return null;

  return <div className="cursor"></div>;
}

export default Cursor;
