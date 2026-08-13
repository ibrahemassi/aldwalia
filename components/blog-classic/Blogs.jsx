import React from 'react';

function Blogs({ blogDetails }) {
  return (
    <section className="blog-main section-padding">
      <div className="container">
        <div className="row lg-marg justify-content-around">
          <div className="col-lg-8">
            <div className="md-mb80">
              {blogDetails.map((post, index) => (
                <div key={post.id} className={`item ${index < blogDetails.length - 1 ? 'mb-80' : ''}`}>
                  <div className="img">
                    <img src={post.featuredImage} alt={post.title} />
                  </div>
                  <div className="content">
                    <div className="d-flex align-items-center mb-15">
                      <div className="post-date">{post.publishDate}</div>
                      <div className="commt opacity-7 fz-13">
                        <span className="ti-time mr-10"></span>{post.readTime}
                      </div>
                    </div>
                    <h3 className="mb-15">
                      <a href={`/blog-classic/${post.slug || post.id}`}>
                        {post.title ? (
                          <>
                            {post.title.split(' ').slice(0, -1).join(' ')}{' '}
                            <span className="fw-200">{post.title.split(' ').slice(-1)[0]}</span>
                          </>
                        ) : (
                          'Untitled Post'
                        )}
                      </a>
                    </h3>
                    <p>{post.excerpt}</p>
                    <a
                      href={`/blog-classic/${post.slug || post.id}`}
                      className="d-flex align-items-center main-color mt-40"
                    >
                      <span className="text mr-15">Read More</span>
                      <span className="ti-arrow-top-right"></span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="sidebar">
              <div className="widget">
                <h6 className="title-widget">Search Here</h6>
                <div className="search-box">
                  <input type="text" name="search-post" placeholder="Search" />
                  <span className="icon pe-7s-search"></span>
                </div>
              </div>
              <div className="widget catogry">
                <h6 className="title-widget">Categories</h6>
                <ul className="rest">
                  <li>
                    <span>
                      <a href="/blog-grid-sidebar">Web Development</a>
                    </span>
                    <span className="ml-auto">2</span>
                  </li>
                  <li>
                    <span>
                      <a href="/blog-grid-sidebar">UI/UX Design</a>
                    </span>
                    <span className="ml-auto">1</span>
                  </li>
                  <li>
                    <span>
                      <a href="/blog-grid-sidebar">Mobile Development</a>
                    </span>
                    <span className="ml-auto">1</span>
                  </li>
                  <li>
                    <span>
                      <a href="/blog-grid-sidebar">Digital Marketing</a>
                    </span>
                    <span className="ml-auto">1</span>
                  </li>
                  <li>
                    <span>
                      <a href="/blog-grid-sidebar">E-commerce</a>
                    </span>
                    <span className="ml-auto">1</span>
                  </li>
                </ul>
              </div>
              <div className="widget last-post-thum">
                <h6 className="title-widget">Latest Posts</h6>
                {blogDetails.slice(0, 3).map((post, index) => (
                  <div key={post.id} className="item d-flex align-items-center">
                    <div>
                      <div className="img">
                        <a href={`/blog-classic/${post.slug || post.id}`}>
                          <img src={post.featuredImage} alt={post.title} />
                          <span className="date">
                            <span>
                              {(() => {
                                try {
                                  const date = new Date(post.publishDate);
                                  const day = date.getDate();
                                  const month = date.getMonth() + 1;
                                  return `${day} / ${month}`;
                                } catch {
                                  // Fallback: try to parse formatted date like "January 15, 2024"
                                  const parts = post.publishDate.split(' ');
                                  if (parts.length >= 2) {
                                    const day = parts[1].replace(',', '');
                                    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                                    const monthIndex = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].indexOf(parts[0]);
                                    const month = monthIndex >= 0 ? monthIndex + 1 : 1;
                                    return `${day} / ${month}`;
                                  }
                                  return '1 / 1';
                                }
                              })()}
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="cont">
                      <span className="tag">
                        <a href={`/blog-classic/${post.slug || post.id}`}>{post.category}</a>
                      </span>
                      <h6>
                        <a href={`/blog-classic/${post.slug || post.id}`}>
                          {post.title}
                        </a>
                      </h6>
                    </div>
                  </div>
                ))}
              </div>
              <div className="widget tags">
                <h6 className="title-widget">Tags</h6>
                <div>
                  {blogDetails.flatMap(post => post.tags).slice(0, 10).map((tag, index) => (
                    <a key={index} href="/blog-grid-sidebar">{tag}</a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blogs;
