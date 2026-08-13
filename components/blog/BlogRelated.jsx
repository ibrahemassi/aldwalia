import React from 'react';
import Link from 'next/link';

function BlogRelated({ post, relatedPosts }) {
  return (
    <section className="blog-related section-padding">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Related Posts</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  More <span className="fw-200">Articles</span>
                </span>
              </h3>
            </div>
            <div className="ml-auto">
              <Link href="/blog-classic" className="butn butn-sm butn-bord radius-30">
                <span>View All</span>
              </Link>
              <span className="icon ti-arrow-top-right"></span>
            </div>
          </div>
        </div>
        <div className="row">
          {relatedPosts.map((relatedPost) => (
            <div key={relatedPost.id} className="col-lg-4 col-md-6">
              <div className="item mb-30">
                <div className="img">
                  <img src={relatedPost.featuredImage} alt={relatedPost.title} className="radius-15" />
                  <div className="info">
                    <div className="cont">
                      <span className="tag main-color mb-10">{relatedPost.category}</span>
                      <h5 className="mb-10">{relatedPost.title}</h5>
                      <p className="mb-15">{relatedPost.excerpt}</p>
                      <div className="meta d-flex align-items-center">
                        <img 
                          src={relatedPost.author.avatar} 
                          alt={relatedPost.author.name} 
                          className="author-avatar mr-10"
                          style={{ width: '30px', height: '30px', borderRadius: '50%' }}
                        />
                        <span className="fz-14">{relatedPost.author.name}</span>
                        <span className="ml-auto fz-14">{relatedPost.publishDate}</span>
                      </div>
                    </div>
                    <Link href={relatedPost.link} className="link">
                      <span className="ti-arrow-top-right"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogRelated;












