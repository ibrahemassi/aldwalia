'use client';
import React from 'react';

function BlogContent({ post }) {
  if (!post.body && !post.content) {
    return null;
  }

  const paragraphs = Array.isArray(post.body)
    ? post.body.map((block) => {
        const text = block.children?.map((child) => child.text).join('') || '';
        return { style: block.style || 'normal', text };
      })
    : String(post.content || '')
        .split('\n\n')
        .filter(Boolean)
        .map((text) => ({
          style: text.trim().startsWith('## ') ? 'h2' : 'normal',
          text: text.trim().startsWith('## ') ? text.trim().slice(3) : text.trim(),
        }));

  return (
    <section className="blog-content section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="blog-post">
              {post.featuredImage && (
                <div className="featured-image mb-40">
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="img-fluid radius-15"
                  />
                </div>
              )}

              <div className="content">
                {paragraphs.map((block, index) => {
                  if (block.style === 'h2') {
                    return (
                      <h2 key={index} className="mb-25 mt-40">
                        {block.text}
                      </h2>
                    );
                  }
                  return (
                    <p key={index} className="mb-20">
                      {block.text}
                    </p>
                  );
                })}
              </div>

              {post.gallery && post.gallery.length > 0 && (
                <div className="blog-gallery mt-50">
                  <h4 className="mb-30">Gallery</h4>
                  <div className="row">
                    {post.gallery.map((image, index) => (
                      <div key={index} className="col-md-4 mb-20">
                        <img
                          src={image}
                          alt={`${post.title} - Image ${index + 1}`}
                          className="img-fluid radius-15"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogContent;
