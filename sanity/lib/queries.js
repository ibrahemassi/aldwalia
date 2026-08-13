import { groq } from 'next-sanity'

// Query to get all projects with basic info
export const projectsQuery = groq`*[_type == "project"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  mainImage,
  category->{title, slug},
  service->{name, slug},
  client,
  projectDate,
  designer,
  technologies,
  url,
  githubUrl,
  featured,
  description,
  publishedAt
}`

// Query to get a single project by slug with full details
export const projectBySlugQuery = groq`*[_type == "project" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  mainImage,
  category->{title, slug},
  service->{name, slug, _id},
  client,
  projectDate,
  designer,
  description,
  description2,
  features,
  process,
  stats,
  images,
  technologies,
  url,
  githubUrl,
  featured,
  publishedAt
}`

// Query to get all project slugs for static generation
export const projectSlugsQuery = groq`*[_type == "project" && defined(slug.current)][] {
  "project-details": slug.current
}`

// Query to get all blog posts with basic info
export const postsQuery = groq`*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  mainImage,
  excerpt,
  author->{name, image, bio},
  categories[]->{title, slug},
  publishedAt,
  body
}`

// Query to get a single blog post by slug with full details
export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  mainImage,
  author->{name, image, bio},
  categories[]->{title, slug},
  publishedAt,
  body
}`

// Query to get all blog post slugs for static generation
export const postSlugsQuery = groq`*[_type == "post" && defined(slug.current)][] {
  "slug": slug.current
}`

// Services
export const servicesQuery = groq`*[_type == "service"] | order(order asc, name asc) {
  _id,
  name,
  slug,
  icon,
  desc,
  mainImage,
  description1,
  description2,
  features,
  process,
  stats,
  order
}`

export const serviceBySlugQuery = groq`*[_type == "service" && slug.current == $slug][0] {
  _id,
  name,
  slug,
  icon,
  desc,
  mainImage,
  description1,
  description2,
  features,
  process,
  stats,
  order
}`

export const serviceSlugsQuery = groq`*[_type == "service" && defined(slug.current)][] {
  "slug": slug.current
}`

// Projects by Service
export const projectsByServiceQuery = groq`*[_type == "project" && service._ref == $serviceId] | order(publishedAt desc) {
  _id,
  title,
  slug,
  mainImage,
  category->{title, slug},
  service->{name, slug},
  client,
  projectDate,
  designer,
  description,
  publishedAt
}`
