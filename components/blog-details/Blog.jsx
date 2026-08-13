'use client';
import React from 'react';
import { PortableText } from '@portabletext/react';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';

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

function Blog({ blog, categories = [], latestPosts = [] }) {
  // Format date for sidebar
  const formatSidebarDate = (dateString) => {
    if (!dateString) return { day: '1', month: '1' };
    try {
      const date = new Date(dateString);
      const day = date.getDate();
      const month = date.getMonth() + 1;
      return { day: day.toString(), month: month.toString() };
    } catch {
      // Try to parse formatted date like "January 15, 2024"
      const parts = dateString.split(' ');
      if (parts.length >= 2) {
        const day = parts[1].replace(',', '');
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const monthIndex = monthNames.indexOf(parts[0]);
        const month = monthIndex >= 0 ? (monthIndex + 1).toString() : '1';
        return { day, month };
      }
      return { day: '1', month: '1' };
    }
  };

  return (
    <section className="blog section-padding">
      <div className="container">
        <div className="row xlg-marg">
          <div className="col-lg-8">
            <div className="main-post">
              <div className="item pb-60">
                <article>
                  {blog.body && (
                    <div className="content">
                      <PortableText value={blog.body} components={components} />
                    </div>
                  )}
                </article>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="sidebar">
              <div className="widget catogry">
                <h6 className="title-widget">Categories</h6>
                <ul className="rest">
                  {categories.length > 0 ? (
                    categories.map((category) => (
                      <li key={category._id || category.title}>
                        <span>
                          <a href="/blog-classic">{category.title}</a>
                        </span>
                        <span className="ml-auto">{category.count}</span>
                      </li>
                    ))
                  ) : (
                    <li>
                      <span>
                        <a href="/blog-classic">Uncategorized</a>
                      </span>
                      <span className="ml-auto">0</span>
                    </li>
                  )}
                </ul>
              </div>
              <div className="widget last-post-thum">
                <h6 className="title-widget">Latest Posts</h6>
                {latestPosts.filter(post => post.slug).length > 0 ? (
                  latestPosts
                    .filter(post => post.slug) // Only show posts with valid slugs
                    .map((post) => {
                      const dateInfo = formatSidebarDate(post.publishDate);
                      const postSlug = post.slug;
                      if (!postSlug) return null;
                      
                      return (
                        <div key={post.id} className="item d-flex align-items-center">
                          <div>
                            <div className="img">
                              <Link href={`/blog-classic/${postSlug}`}>
                                {post.featuredImage && (
                                  <img src={post.featuredImage} alt={post.title} />
                                )}
                                <span className="date">
                                  <span>
                                    {dateInfo.day} / <br /> {dateInfo.month}
                                  </span>
                                </span>
                              </Link>
                            </div>
                          </div>
                          <div className="cont">
                            <span className="tag">
                              <Link href={`/blog-classic/${postSlug}`}>{post.category}</Link>
                            </span>
                            <h6>
                              <Link href={`/blog-classic/${postSlug}`}>
                                {post.title}
                              </Link>
                            </h6>
                          </div>
                        </div>
                      );
                    })
                ) : (
                  <p className="opacity-7">No posts available</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
