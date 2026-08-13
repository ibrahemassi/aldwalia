'use client';
import React, { useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import loadBackgroudImages from '@/common/loadBackgroudImages';

function BlogHeader({ post }) {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.header', { y: 200 }, { y: 0 }, '+=2.5');
    tl.fromTo(
      '.header .container',
      { opacity: 0, translateY: 40 },
      { opacity: 1, translateY: 0 },
      '-=0'
    );

    return () => tl.kill();
  }, [post]);

  useEffect(() => {
    loadBackgroudImages();
  }, [post]);

  return (
    <div
      className="header page-header bg-img section-padding valign"
      data-background={post.featuredImage}
      data-overlay-dark="8"
    >
      <div className="container pt-80">
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <div className="mb-30">
                <span className="tag main-color">{post.category}</span>
                <span className="tag ml-10">{post.readTime}</span>
              </div>
              <h1 className="text-u ls1 fz-80 mb-30">
                {post.title}
              </h1>
              <p className="mt-30 fz-18 opacity-7 mb-30">{post.excerpt}</p>
              <div className="author-info d-flex align-items-center justify-content-center">
                <img 
                  src={post.author.avatar} 
                  alt={post.author.name} 
                  className="author-avatar mr-15"
                  style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                />
                <div className="text-left">
                  <h6 className="mb-5">{post.author.name}</h6>
                  <p className="fz-14 opacity-7">{post.publishDate}</p>
                </div>
              </div>
              <div className="tags mt-30">
                {post.tags.map((tag, index) => (
                  <span key={index} className="tag mr-10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogHeader;












