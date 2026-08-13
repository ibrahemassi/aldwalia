'use client';
import React from 'react';
import { PortableText } from '@portabletext/react';

function BlogAuthor({ post }) {
  // Extract text from bio if it's blockContent
  const getBioText = (bio) => {
    if (typeof bio === 'string') {
      return bio;
    }
    if (Array.isArray(bio)) {
      return bio
        .map(block => block.children?.map(child => child.text).join(' '))
        .join(' ')
        .trim();
    }
    return 'No bio available.';
  };

  return (
    <section className="blog-author section-padding sub-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="author-box">
              <div className="row align-items-center">
                <div className="col-md-3">
                  <div className="author-avatar">
                    <img 
                      src={post.author.avatar} 
                      alt={post.author.name} 
                      className="img-fluid radius-15"
                    />
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="author-info">
                    <h4 className="mb-15">About the Author</h4>
                    <h5 className="mb-10">{post.author.name}</h5>
                    {Array.isArray(post.author.bio) ? (
                      <div className="mb-20">
                        <PortableText value={post.author.bio} />
                      </div>
                    ) : (
                      <p className="mb-20">{getBioText(post.author.bio)}</p>
                    )}
                    <div className="author-meta">
                      <span className="mr-20">
                        <i className="ti-calendar mr-5"></i>
                        Published on {post.publishDate}
                      </span>
                      <span className="mr-20">
                        <i className="ti-time mr-5"></i>
                        {post.readTime}
                      </span>
                      <span>
                        <i className="ti-folder mr-5"></i>
                        {post.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogAuthor;

