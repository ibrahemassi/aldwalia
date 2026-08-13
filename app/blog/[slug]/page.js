import Lines from '@/components/common/Lines';
import ProgressScroll from '@/components/common/ProgressScroll';
import Cursor from '@/components/common/cusor';
import LoadingScreen from '@/components/common/loader';
import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import ThemeScripts from '@/components/common/ThemeScripts';
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

export default async function BlogPostPage({ params }) {
  const resolvedParams = params instanceof Promise ? await params : params;
  const slug = resolvedParams?.slug;
  const post = getPostBySlug(slug);
  if (!post) notFound();

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

  const relatedPostsData = getRelatedPosts(slug).map((item) => ({
    ...item,
    link: `/blog/${item.slug}`,
    excerpt: item.excerpt || '',
  }));

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
      <ThemeScripts />
    </body>
  );
}
