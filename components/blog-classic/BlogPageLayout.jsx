'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import loadBackgroudImages from '@/common/loadBackgroudImages';

const WORKS = '/assets/imgs/works/1';

function BlogPageLayout({ blogData = [] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const featured = blogData[0];
  const latestThree = blogData.slice(1, 4);
  const allPosts = blogData;
  const categories = [
    ...new Set(
      blogData.flatMap((p) => [
        ...(p.category ? [p.category] : []),
        ...(Array.isArray(p.tags) ? p.tags.filter(Boolean) : []),
      ])
    ),
  ];

  const filteredPosts = useMemo(() => {
    let list = allPosts;
    if (categoryFilter) {
      list = list.filter((p) => p.category === categoryFilter || (p.tags && p.tags.includes(categoryFilter)));
    }
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      list = list.filter(
        (p) =>
          (p.title && p.title.toLowerCase().includes(q)) ||
          (p.excerpt && p.excerpt.toLowerCase().includes(q)) ||
          (p.author?.name && p.author.name.toLowerCase().includes(q))
      );
    }
    return list;
  }, [allPosts, categoryFilter, searchQuery]);

  const postUrl = (post) => `/blog-classic/${post.slug || post.id}`;

  const filterKey = `${categoryFilter || 'all'}-${searchQuery.trim()}`;

  return (
    <>
      <style>{`
        @keyframes blogCardFadeIn {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      {/* Hero */}
      <section
        className="position-re overflow-hidden"
        style={{ minHeight: 420, background: '#0a1628' }}
      >
        <div
          className="absolute-full"
          style={{
            backgroundImage: `url('/assets/imgs/patterns/lines1.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div
          className="absolute-full"
          style={{
            background: 'linear-gradient(to bottom, rgba(10,22,40,0.88) 0%, rgba(10,22,40,0.5) 100%)',
          }}
        />
        <div className="container position-re" style={{ zIndex: 2, paddingTop: 120, paddingBottom: 80 }}>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="text-white fz-52 fw-700 ls1" style={{ lineHeight: 1.2, marginBottom: 20 }}>
                Discover our <span className="fw-200">latest stories.</span>
              </h1>
              <p className="fz-18 text-white opacity-8" style={{ lineHeight: 1.7, marginBottom: 30 }}>
                Ideas, insights, and updates from our team. Read about what we're building and how we approach design and development.
              </p>
              <Link
                href="#all-stories"
                className="butn butn-md butn-light radius-30"
              >
                <span>Explore all posts</span>
                <i className="ti-arrow-right" style={{ marginLeft: 10 }}></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories strip */}
      {categories.length > 0 && (
        <section style={{ paddingTop: 40, paddingBottom: 20, background: '#0a1628' }}>
          <div className="container">
            <div className="d-flex flex-wrap align-items-center" style={{ gap: 12 }}>
              <span className="fz-14 text-white opacity-7 text-u">Categories:</span>
              {categories.map((cat, i) => (
                <Link
                  key={i}
                  href="#all-stories"
                  className="radius-30 fz-13 text-white"
                  style={{ padding: '8px 20px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  {cat}
                </Link>
              ))}
              <Link href="#all-stories" className="fz-13 main-color fw-600" style={{ marginLeft: 8 }}>
                View all
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Latest Stories: 1 featured + 3 small */}
      {featured && (
        <section style={{ paddingTop: 60, paddingBottom: 80, background: '#0a1628' }}>
          <div className="container">
            <div className="d-flex align-items-center justify-content-between" style={{ marginBottom: 40 }}>
              <h2 className="fz-38 fw-700 text-white text-u mb-0">Latest stories</h2>
              <Link href="#all-stories" className="fz-14 fw-600 main-color text-u">
                Read more stories
              </Link>
            </div>
            <div className="row">
              <div className="col-lg-7" style={{ marginBottom: 24 }}>
                <Link href={postUrl(featured)} className="d-block radius-20 overflow-hidden position-re" style={{ height: 380, textDecoration: 'none' }}>
                  <div className="absolute-full">
                    <img src={featured.featuredImage || `${WORKS}/1.jpg`} alt={featured.title} className="w-100 h-100" style={{ objectFit: 'cover' }} />
                  </div>
                  <div className="absolute-full" style={{ background: 'linear-gradient(to top, rgba(10,22,40,0.95) 0%, transparent 60%)' }} />
                  <div className="position-abs" style={{ bottom: 0, left: 0, right: 0, padding: 30 }}>
                    <span className="fz-12 text-white opacity-7 text-u main-color" style={{ marginBottom: 8, display: 'inline-block' }}>{featured.category}</span>
                    <h3 className="fz-26 fw-700 text-white mb-10" style={{ lineHeight: 1.3 }}>{featured.title}</h3>
                    <p className="fz-14 text-white opacity-8 mb-15" style={{ lineHeight: 1.5 }}>{featured.excerpt?.substring(0, 120)}...</p>
                    <span className="fz-13 text-white opacity-7">{featured.publishDate} · {featured.readTime}</span>
                  </div>
                </Link>
              </div>
              <div className="col-lg-5">
                {latestThree.map((post) => (
                  <Link key={post.id} href={postUrl(post)} className="d-flex align-items-center radius-20 overflow-hidden position-re mb-20" style={{ textDecoration: 'none', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ width: 120, height: 100, flexShrink: 0 }}>
                      <img src={post.featuredImage || `${WORKS}/1.jpg`} alt={post.title} className="w-100 h-100" style={{ objectFit: 'cover' }} />
                    </div>
                    <div style={{ padding: 16, flex: 1 }}>
                      <span className="fz-11 text-u main-color opacity-8">{post.category}</span>
                      <h6 className="fz-16 fw-600 text-white mb-5 mt-5" style={{ lineHeight: 1.35 }}>{post.title}</h6>
                      <span className="fz-12 text-white opacity-6">{post.publishDate}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Highlights */}
      {/* <section style={{ paddingTop: 60, paddingBottom: 80, background: '#1a2436' }}>
        <div className="container">
          <h2 className="fz-38 fw-700 text-white text-u mb-50">Highlights</h2>
          <div className="row align-items-center">
            <div className="col-lg-5 mb-4 mb-lg-0">
              <div className="radius-20 p-40" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="d-flex align-items-center mb-20">
                  <div className="radius-50 overflow-hidden" style={{ width: 56, height: 56, marginRight: 16 }}>
                    <img src="/assets/imgs/blog/1.jpg" alt="" className="w-100 h-100" style={{ objectFit: 'cover' }} />
                  </div>
                  <div>
                    <h6 className="text-white fw-600 mb-0">Client feedback</h6>
                    <span className="fz-13 text-white opacity-7">★★★★★</span>
                  </div>
                </div>
                <p className="fz-16 text-white opacity-8" style={{ lineHeight: 1.7 }}>
                  &ldquo;Professional team and clear communication. They delivered exactly what we needed.&rdquo;
                </p>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1">
              <div className="row">
                {latestThree.slice(0, 2).map((post) => (
                  <div key={post.id} className="col-6 mb-20">
                    <Link href={postUrl(post)} className="d-block radius-20 overflow-hidden position-re" style={{ height: 200, textDecoration: 'none' }}>
                      <img src={post.featuredImage || `${WORKS}/1.jpg`} alt={post.title} className="w-100 h-100" style={{ objectFit: 'cover' }} />
                      <div className="position-abs" style={{ bottom: 0, left: 0, right: 0, padding: 16, background: 'linear-gradient(to top, rgba(10,22,40,0.9), transparent)' }}>
                        <h6 className="fz-14 fw-600 text-white mb-0" style={{ lineHeight: 1.3 }}>{post.title}</h6>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
              <Link href="#all-stories" className="butn butn-bord butn-light radius-30">
                <span>See more highlights</span>
                <i className="ti-arrow-right" style={{ marginLeft: 10 }}></i>
              </Link>
            </div>
          </div>
        </div>
      </section> */}

      {/* All blogs grid - last section */}
      <section id="all-stories" style={{ paddingTop: 80, paddingBottom: 80, background: '#0a1628' }}>
        <div className="container">
          <h2 className="fz-38 fw-700 text-white text-u" style={{ marginBottom: 30 }}>All stories</h2>

          {/* Search + Filter toolbar */}
          <div className="d-flex flex-wrap align-items-center" style={{ gap: 16, marginBottom: 40 }}>
            <div className="position-re" style={{ flex: '1 1 260px', maxWidth: 320 }}>
              <i className="ti-search position-abs" style={{ left: 16, top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.5)', fontSize: 16 }} />
              <input
                type="text"
                placeholder="Search by title, excerpt, or author..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-100 radius-30"
                style={{
                  padding: '12px 16px 12px 44px',
                  border: '1px solid rgba(255,255,255,0.15)',
                  background: 'rgba(255,255,255,0.06)',
                  color: '#fff',
                  fontSize: 14,
                }}
              />
            </div>
            <div className="d-flex flex-wrap align-items-center" style={{ gap: 10 }}>
              <span className="fz-14 text-white opacity-7" style={{ marginRight: 4 }}>Category:</span>
              <button
                type="button"
                onClick={() => setCategoryFilter('')}
                style={{
                  padding: '10px 20px',
                  borderRadius: 999,
                  border: 'none',
                  background: categoryFilter === '' ? '#1a2436' : 'rgba(255,255,255,0.08)',
                  color: '#fff',
                  fontSize: 14,
                  fontWeight: 500,
                  cursor: 'pointer',
                  boxShadow: categoryFilter === '' ? '0 0 20px rgba(255, 200, 0, 0.5)' : 'none',
                  transition: 'background 0.25s ease, box-shadow 0.25s ease',
                }}
              >
                All
              </button>
              {categories.map((cat, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCategoryFilter(cat)}
                  style={{
                    padding: '10px 20px',
                    borderRadius: 999,
                    border: 'none',
                    background: categoryFilter === cat ? '#1a2436' : 'rgba(255,255,255,0.08)',
                    color: '#fff',
                    fontSize: 14,
                    fontWeight: 500,
                    cursor: 'pointer',
                    boxShadow: categoryFilter === cat ? '0 0 20px rgba(255, 200, 0, 0.5)' : 'none',
                    transition: 'background 0.25s ease, box-shadow 0.25s ease',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="row" key={filterKey} style={{ minHeight: 400 }}>
            {filteredPosts.length === 0 ? (
              <div className="col-12 text-center" style={{ paddingTop: 80, paddingBottom: 80 }}>
                <p className="fz-18 text-white opacity-7">
                  {allPosts.length === 0 ? 'No posts yet. Check back soon.' : 'No posts match your search or filter.'}
                </p>
              </div>
            ) : (
              filteredPosts.map((post, index) => (
                <div
                  key={post.id}
                  className="col-lg-4 col-md-6"
                  style={{
                    marginBottom: 30,
                    transition: 'opacity 0.35s ease, transform 0.35s ease',
                    animation: `blogCardFadeIn 0.45s ease ${index * 0.06}s forwards`,
                    opacity: 0,
                  }}
                >
                  <Link
                    href={postUrl(post)}
                    className="d-block radius-20 overflow-hidden position-re"
                    style={{
                      textDecoration: 'none',
                      minHeight: 480,
                      border: '1px solid rgba(255,255,255,0.1)',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.35)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    {/* Background image - full card */}
                    <div className="absolute-full">
                      <img
                        src={post.featuredImage || `${WORKS}/1.jpg`}
                        alt={post.title}
                        className="w-100 h-100"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>

                    {/* Dark overlay - same as services card: blur + gradient + mask */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '80%',
                        backdropFilter: 'blur(15px)',
                        WebkitBackdropFilter: 'blur(15px)',
                        background: 'linear-gradient(to top, rgba(10, 22, 40, 0.95) 0%, rgba(10, 22, 40, 0.4) 60%, transparent 100%)',
                        maskImage: 'linear-gradient(to top, black 50%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to top, black 50%, transparent 100%)',
                        zIndex: 1,
                      }}
                    />
                    {/* Content on top of overlay */}
                    <div
                      className="d-flex flex-column justify-content-end position-re"
                      style={{ zIndex: 2, height: '100%', minHeight: 480, padding: 24 }}
                    >
                      <h3 className="fz-20 fw-700 text-white" style={{ lineHeight: 1.35, marginBottom: 10 }}>{post.title}</h3>
                      <p className="fz-14 text-white opacity-8" style={{ lineHeight: 1.5, marginBottom: 16 }}>{post.excerpt?.substring(0, 100)}{(post.excerpt?.length > 100) ? '...' : ''}</p>

                      {/* Category tags - pill shape, white low opacity */}
                      <div className="d-flex flex-wrap" style={{ gap: 8, marginBottom: 16 }}>
                        {(post.tags && post.tags.length > 0 ? post.tags : [post.category]).filter(Boolean).map((tag, i) => (
                          <span
                            key={i}
                            style={{
                              padding: '6px 14px',
                              borderRadius: 999,
                              background: 'rgba(255,255,255,0.18)',
                              color: '#fff',
                              fontSize: 12,
                              fontWeight: 500,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Author row: avatar left, name, divider, date */}
                      <div className="d-flex align-items-center" style={{ marginBottom: 20, gap: 12 }}>
                        <div
                          style={{
                            width: 36,
                            height: 36,
                            borderRadius: '50%',
                            overflow: 'hidden',
                            border: '2px solid rgba(255,255,255,0.3)',
                            flexShrink: 0,
                            background: 'rgba(255,255,255,0.1)',
                          }}
                        >
                          {post.author?.image ? (
                            <img src={post.author.image} alt={post.author.name} className="w-100 h-100" style={{ objectFit: 'cover' }} />
                          ) : (
                            <div className="w-100 h-100 d-flex align-items-center justify-content-center text-white fz-14 fw-600" style={{ background: 'rgba(255,255,255,0.15)' }}>
                              {(post.author?.name || 'U').charAt(0).toUpperCase()}
                            </div>
                          )}
                        </div>
                        <span className="fz-13 text-white opacity-9 fw-500">{post.author?.name || 'Unknown'}</span>
                        <span className="fz-13 text-white opacity-5" style={{ width: 1, height: 14, background: 'rgba(255,255,255,0.3)' }} />
                        <span className="fz-13 text-white opacity-7">{post.publishDate}</span>
                      </div>

                      {/* Full-width Read more button */}
                      <span
                        className="butn butn-md butn-light radius-30 d-block text-center"
                        style={{ padding: '14px 24px', background: '#fff', color: '#0a1628', fontWeight: 600 }}
                      >
                        Read more
                      </span>
                    </div>
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section style={{ paddingTop: 60, paddingBottom: 60, background: '#1a2436', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h3 className="fz-32 fw-700 text-white mb-15">Get updates straight to your inbox</h3>
              <p className="fz-16 text-white opacity-7 mb-30">Subscribe for new posts and project updates. No spam.</p>
              <form className="d-flex flex-wrap justify-content-center" style={{ gap: 12 }}>
                <input
                  type="email"
                  placeholder="Your email"
                  className="radius-30"
                  style={{ padding: '14px 24px', minWidth: 260, border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.05)', color: '#fff' }}
                />
                <button type="submit" className="butn butn-md butn-light radius-30">
                  <span>Subscribe</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogPageLayout;
