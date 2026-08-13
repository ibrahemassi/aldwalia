'use client';

import { useEffect } from 'react';
import { basePath } from '@/lib/basePath';

function shouldPrefix(value) {
  if (!value || !basePath) return false;
  if (
    value.startsWith('http://') ||
    value.startsWith('https://') ||
    value.startsWith('data:') ||
    value.startsWith('mailto:') ||
    value.startsWith('tel:') ||
    value.startsWith('#') ||
    value.startsWith('//') ||
    value.startsWith(basePath)
  ) {
    return false;
  }
  return value.startsWith('/');
}

function prefixAttr(el, attr) {
  const value = el.getAttribute(attr);
  if (shouldPrefix(value)) {
    el.setAttribute(attr, `${basePath}${value}`);
    if (el.tagName === 'SOURCE' || el.tagName === 'VIDEO') {
      const video = el.tagName === 'VIDEO' ? el : el.closest('video');
      if (video) video.load();
    }
  }
}

/**
 * Prefix absolute /paths with the GitHub Pages basePath for raw <a>, <img>, etc.
 * next/link is already handled by Next.js.
 */
export default function BasePathFix() {
  useEffect(() => {
    if (!basePath) return;

    const rewrite = (root = document) => {
      root.querySelectorAll('a[href], img[src], source[src], video[src], audio[src], use[href]').forEach((el) => {
        if (el.hasAttribute('href')) prefixAttr(el, 'href');
        if (el.hasAttribute('src')) prefixAttr(el, 'src');
      });
    };

    rewrite();

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType !== 1) return;
          if (node.matches?.('a[href], img[src], source[src], video[src], audio[src], use[href]')) {
            rewrite(node.parentElement || document);
          } else if (node.querySelectorAll) {
            rewrite(node);
          }
        });
      });
    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
