'use client';
import React from 'react';
import { PortableText } from '@portabletext/react';
import { urlFor } from '@/sanity/lib/image';

const components = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="project-image mb-40">
          <img
            src={urlFor(value).width(1200).height(800).fit('max').auto('format').url()}
            alt={value.alt || 'Blog image'}
            className="img-fluid radius-15"
          />
        </div>
      );
    },
  },
  block: {
    h1: ({ children }) => <h1 className="mb-30">{children}</h1>,
    h2: ({ children }) => <h2 className="mb-25 mt-40">{children}</h2>,
    h3: ({ children }) => <h3 className="mb-20 mt-30">{children}</h3>,
    h4: ({ children }) => <h4 className="mb-15 mt-25">{children}</h4>,
    blockquote: ({ children }) => (
      <blockquote className="blockquote mb-30">{children}</blockquote>
    ),
    normal: ({ children }) => {
      if (children && children.length === 1 && children[0] === '') {
        return <br />;
      }
      return <p className="mb-20">{children}</p>;
    },
  },
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
      return (
        <a href={value?.href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined}>
          {children}
        </a>
      );
    },
  },
  list: {
    bullet: ({ children }) => <ul className="mb-20">{children}</ul>,
    number: ({ children }) => <ol className="mb-20">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-10">{children}</li>,
    number: ({ children }) => <li className="mb-10">{children}</li>,
  },
};

function BlogContent({ post }) {
  if (!post.body) {
    return null;
  }

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
                <PortableText value={post.body} components={components} />
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

