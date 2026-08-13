import servicesJson from '@/data/services.json';
import portfoliosJson from '@/data/portfolios.json';
import blogJson from '@/data/blog.json';

export function getServices() {
  return servicesJson.map((service) => ({
    ...service,
    link: service.link || `/page-services/${service.slug}`,
  }));
}

export function getServiceBySlug(slugOrId) {
  return (
    getServices().find(
      (service) =>
        service.slug === slugOrId || service.id.toString() === slugOrId
    ) || null
  );
}

export function getServiceSlugs() {
  return getServices().map((service) => service.slug);
}

export function mapProjectForGrid(project) {
  return {
    _id: String(project.id),
    id: project.id,
    title: project.title,
    slug: { current: project.slug },
    mainImage: project.images?.main || '',
    category: { title: project.category || 'Project' },
    service: { name: project.category || 'Project' },
    description: project.description || project.shortDescription || '',
    projectDate: project.duration || '2024',
    tags: project.tags || [],
  };
}

export function getProjects() {
  return portfoliosJson.map(mapProjectForGrid);
}

export function getProjectBySlug(slug) {
  const project = portfoliosJson.find((item) => item.slug === slug);
  if (!project) return null;

  return {
    _id: String(project.id),
    title: project.title,
    slug: project.slug,
    images: {
      main: project.images?.main || '',
    },
    category: project.category || '',
    service: project.category || '',
    client: project.client || 'International Software',
    projectDate: project.duration || '',
    designer: project.team || '',
    description: project.description,
    description2: project.challenge || project.solution || '',
    features: project.results || project.technologies || [],
    process: [],
    stats: {},
    gallery: project.images?.gallery || [],
    technologies: project.technologies || [],
    url: project.link || '',
    githubUrl: '',
  };
}

export function getProjectSlugs() {
  return portfoliosJson.map((project) => project.slug);
}

export function getAdjacentProjects(slug) {
  const slugs = getProjectSlugs();
  const index = slugs.indexOf(slug);

  if (index === -1) {
    return { prev: null, next: null };
  }

  const prevSlug = index > 0 ? slugs[index - 1] : slugs[slugs.length - 1];
  const nextSlug = index < slugs.length - 1 ? slugs[index + 1] : slugs[0];

  const toNavItem = (projectSlug) => {
    const project = portfoliosJson.find((item) => item.slug === projectSlug);
    if (!project) return null;

    return {
      title: project.title,
      slug: project.slug,
      image: project.images?.main || '',
    };
  };

  return {
    prev: toNavItem(prevSlug),
    next: toNavItem(nextSlug),
  };
}

export function getProjectsByService(service) {
  if (!service) return [];

  const serviceName = (service.name || '').toLowerCase();
  const serviceSlug = (service.slug || '').toLowerCase().replace(/-/g, ' ');

  return portfoliosJson
    .filter((project) => {
      const category = (project.category || '').toLowerCase();
      return (
        category.includes(serviceName.split(' ')[0]) ||
        category.includes(serviceSlug.split(' ')[0]) ||
        serviceName.includes(category.split(' ')[0])
      );
    })
    .map(mapProjectForGrid);
}

export function formatDate(dateString) {
  if (!dateString) return '';

  try {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return dateString;
  }
}

export function contentToPortableText(content) {
  if (!content) return [];
  if (Array.isArray(content)) return content;

  return content
    .split('\n\n')
    .filter(Boolean)
    .map((block, index) => {
      const trimmed = block.trim();

      if (trimmed.startsWith('## ')) {
        return {
          _type: 'block',
          _key: `h2-${index}`,
          style: 'h2',
          children: [{ _type: 'span', _key: `s-${index}`, text: trimmed.slice(3) }],
        };
      }

      return {
        _type: 'block',
        _key: `p-${index}`,
        style: 'normal',
        children: [{ _type: 'span', _key: `s-${index}`, text: trimmed }],
      };
    });
}

export function getPostsForListing() {
  return blogJson.map((post) => ({
    id: post.slug || post.id,
    slug: post.slug,
    title: post.title,
    featuredImage: post.featuredImage || '',
    publishDate: formatDate(post.publishDate),
    readTime: post.readTime || '5 min read',
    excerpt: post.excerpt || '',
    category: post.category || 'Uncategorized',
    tags: post.tags || [],
    author: {
      name: post.author?.name || 'Unknown',
      image: post.author?.avatar || '',
    },
  }));
}

export function getPostBySlug(slug) {
  const post = blogJson.find((item) => item.slug === slug);
  if (!post) return null;

  const categories =
    post.categories?.length > 0
      ? post.categories
      : [post.category].filter(Boolean);

  return {
    id: post.id,
    slug: post.slug,
    title: post.title,
    featuredImage: post.featuredImage || '',
    publishDate: formatDate(post.publishDate),
    readTime: post.readTime || '5 min read',
    excerpt: post.excerpt || '',
    category: post.category || 'Uncategorized',
    categories,
    tags: post.tags || [],
    author: {
      name: post.author?.name || 'Unknown Author',
      avatar: post.author?.avatar || '/assets/imgs/default-avatar.png',
      bio: post.author?.bio || '',
    },
    body: contentToPortableText(post.content),
    content: post.content,
    gallery: post.gallery || [],
  };
}

export function getBlogSlugs() {
  return blogJson.map((post) => post.slug);
}

export function getBlogCategories() {
  const counts = {};

  blogJson.forEach((post) => {
    const categories =
      post.categories?.length > 0
        ? post.categories
        : [post.category].filter(Boolean);

    categories.forEach((category) => {
      counts[category] = (counts[category] || 0) + 1;
    });
  });

  return Object.entries(counts)
    .map(([title, count], index) => ({
      _id: `cat-${index}`,
      title,
      slug: title.toLowerCase().replace(/\s+/g, '-'),
      count,
    }))
    .sort((a, b) => b.count - a.count);
}

export function getLatestPosts(excludeSlug, limit = 3) {
  return blogJson
    .filter((post) => post.slug !== excludeSlug)
    .slice(0, limit)
    .map((post) => ({
      id: post.id,
      slug: post.slug,
      title: post.title,
      featuredImage: post.featuredImage || '',
      category: post.category || 'Uncategorized',
      publishDate: formatDate(post.publishDate),
    }));
}

export function getRelatedPosts(slug, limit = 3) {
  const current = blogJson.find((post) => post.slug === slug);
  if (!current) return getLatestPosts(slug, limit);

  const relatedIds = current.relatedPosts || [];
  let related = blogJson.filter(
    (post) => relatedIds.includes(post.id) && post.slug !== slug
  );

  if (related.length === 0) {
    related = blogJson.filter(
      (post) =>
        post.slug !== slug &&
        (post.category === current.category ||
          post.tags?.some((tag) => current.tags?.includes(tag)))
    );
  }

  return related.slice(0, limit).map((post) => ({
    id: post.id,
    title: post.title,
    slug: post.slug,
    featuredImage: post.featuredImage || '',
    category: post.category || 'Uncategorized',
    publishDate: formatDate(post.publishDate),
    author: {
      name: post.author?.name || 'Unknown',
      avatar: post.author?.avatar || '/assets/imgs/default-avatar.png',
    },
  }));
}
