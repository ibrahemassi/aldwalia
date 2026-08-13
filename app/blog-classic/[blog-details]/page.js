import generateStylesheetObject from '@/common/generateStylesheetsObject';
import Lines from '@/components/common/Lines';
import ProgressScroll from '@/components/common/ProgressScroll';
import Cursor from '@/components/common/cusor';
import LoadingScreen from '@/components/common/loader';
import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import Script from 'next/script';
import Header from '@/components/blog-details/Header';
import Blog from '@/components/blog-details/Blog';
import { notFound } from 'next/navigation';
import {
  getBlogCategories,
  getBlogSlugs,
  getLatestPosts,
  getPostBySlug,
} from '@/lib/data';

export const metadata = {
  title: 'aldwalya',
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

export async function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({
    'blog-details': slug,
  }));
}

export default async function BlogDetails({ params }) {
  const resolvedParams = params instanceof Promise ? await params : params;
  const slug =
    resolvedParams?.['blog-details'] ||
    resolvedParams?.slug ||
    Object.values(resolvedParams || {})[0];

  if (!slug || typeof slug !== 'string') {
    notFound();
  }

  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const blogData = {
    id: post.id,
    slug: post.slug,
    title: post.title,
    featuredImage: post.featuredImage,
    publishDate: post.publishDate,
    categories: post.categories?.length ? post.categories : ['Uncategorized'],
    author: {
      name: post.author.name,
      avatar: post.author.avatar,
    },
    body: post.body,
    content: post.content,
  };

  const categoriesData = getBlogCategories();
  const latestPostsData = getLatestPosts(slug);

  return (
    <body>
      <LoadingScreen />
      <Cursor />
      <ProgressScroll />
      <Lines />
      <div id="smooth-wrapper">
        <Navbar />
        <div id="smooth-content">
          <main className="main-bg">
            <Header blog={blogData} />
            <Blog
              blog={blogData}
              categories={categoriesData}
              latestPosts={latestPostsData}
            />
          </main>
          <Footer />
        </div>
      </div>

      <Script
        src="/assets/js/TweenMax.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/assets/js/gsap.min.js"
        strategy="beforeInteractive"
      />
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
        src="/assets/js/charming.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/countdown.js"
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
