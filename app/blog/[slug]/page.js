import generateStylesheetObject from '@/common/generateStylesheetsObject';
import Lines from '@/components/common/Lines';
import ProgressScroll from '@/components/common/ProgressScroll';
import Cursor from '@/components/common/cusor';
import LoadingScreen from '@/components/common/loader';
import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import Script from 'next/script';
import BlogHeader from '@/components/blog/BlogHeader';
import BlogContent from '@/components/blog/BlogContent';
import BlogAuthor from '@/components/blog/BlogAuthor';
import BlogRelated from '@/components/blog/BlogRelated';
import { notFound } from 'next/navigation';
import {
  getBlogSlugs,
  getPostBySlug,
  getRelatedPosts,
} from '@/lib/data';

export async function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = params instanceof Promise ? await params : params;
  const slug = resolvedParams?.slug;
  const post = slug ? getPostBySlug(slug) : null;

  if (!post) {
    return { title: 'Blog Post Not Found' };
  }

  return {
    title: `${post.title} - Blog`,
    description: post.excerpt,
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.featuredImage ? [post.featuredImage] : [],
      type: 'article',
    },
    icons: {
      icon: '/assets/imgs/favicon.ico',
      shortcut: '/assets/imgs/favicon.ico',
      other: generateStylesheetObject([
        '/assets/css/plugins.css',
        '/assets/css/style.css',
        'https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap',
        'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&display=swap',
      ]),
    },
  };
}

export default async function BlogPostPage({ params }) {
  const resolvedParams = params instanceof Promise ? await params : params;
  const slug = resolvedParams?.slug;

  if (!slug) {
    notFound();
  }

  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const postData = {
    title: post.title,
    slug: post.slug,
    featuredImage: post.featuredImage,
    category: post.category,
    readTime: post.readTime,
    excerpt: post.excerpt,
    publishDate: post.publishDate,
    tags: post.tags,
    author: post.author,
    body: post.body,
    gallery: post.gallery,
  };

  const relatedPostsData = getRelatedPosts(slug);

  return (
    <body>
      <LoadingScreen />
      <Cursor />
      <ProgressScroll />
      <Lines />
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="main-bg o-hidden">
            <BlogHeader post={postData} />
            <BlogContent post={postData} />
            <BlogAuthor post={postData} />
            <BlogRelated post={postData} relatedPosts={relatedPostsData} />
          </main>
          <Footer />
        </div>
      </div>

      <Script
        src="/assets/js/ScrollTrigger.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/assets/js/ScrollSmoother.min.js"
        strategy="beforeInteractive"
      />
      <Script strategy="beforeInteractive" src="/assets/js/plugins.js"></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/TweenMax.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/charming.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/countdown.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/gsap.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/splitting.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/isotope.pkgd.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/imgReveal/imagesloaded.pkgd.min.js"
      ></Script>
      <Script src="/assets/js/scripts.js"></Script>
    </body>
  );
}
