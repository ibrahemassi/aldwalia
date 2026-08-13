'use client';
import React from 'react';
import Link from 'next/link';

function Blog({ blog, categories = [], latestPosts = [] }) {
  const formatSidebarDate = (dateString) => {
    if (!dateString) return { day: '1', month: '1' };
    try {
      const date = new Date(dateString);
      return {
        day: date.getDate().toString(),
        month: (date.getMonth() + 1).toString(),
      };
    } catch {
      const parts = dateString.split(' ');
      if (parts.length >= 2) {
        const day = parts[1].replace(',', '');
        const monthNames = [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ];
        const monthIndex = monthNames.indexOf(parts[0]);
        const month = monthIndex >= 0 ? (monthIndex + 1).toString() : '1';
        return { day, month };
      }
      return { day: '1', month: '1' };
    }
  };

  const paragraphs = Array.isArray(blog.body)
    ? blog.body.map((block) => {
        const text = block.children?.map((child) => child.text).join('') || '';
        return { style: block.style || 'normal', text };
      })
    : String(blog.content || '')
        .split('\n\n')
        .filter(Boolean)
        .map((text) => ({
          style: text.trim().startsWith('## ') ? 'h2' : 'normal',
          text: text.trim().startsWith('## ')
            ? text.trim().slice(3)
            : text.trim(),
        }));

  return (
    <section className="blog section-padding">
      <div className="container">
        <div className="row xlg-marg">
          <div className="col-lg-8">
            <div className="main-post">
              <div className="item pb-60">
                <article>
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
                {latestPosts.filter((post) => post.slug).length > 0 ? (
                  latestPosts
                    .filter((post) => post.slug)
                    .map((post) => {
                      const dateInfo = formatSidebarDate(post.publishDate);
                      return (
                        <div
                          key={post.id}
                          className="item d-flex align-items-center"
                        >
                          <div>
                            <div className="img">
                              <Link href={`/blog-classic/${post.slug}`}>
                                {post.featuredImage && (
                                  <img
                                    src={post.featuredImage}
                                    alt={post.title}
                                  />
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
                              <Link href={`/blog-classic/${post.slug}`}>
                                {post.category}
                              </Link>
                            </span>
                            <h6>
                              <Link href={`/blog-classic/${post.slug}`}>
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
