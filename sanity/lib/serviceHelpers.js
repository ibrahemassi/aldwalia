/**
 * Map Sanity service document(s) to the shape expected by app components.
 * Components expect: name, slug, desc, description1, description2, features, process, stats, img, link, id (optional).
 */
export function mapServiceFromSanity(service, urlFor, index = 0) {
  if (!service) return null
  const slug = service.slug?.current || service.slug
  return {
    id: index + 1,
    name: service.name,
    slug,
    icon: service.icon,
    desc: service.desc,
    description1: service.description1,
    description2: service.description2,
    features: service.features || [],
    process: service.process || [],
    stats: service.stats || { satisfaction: '', projects: '', clients: '' },
    link: `/page-services/${slug}`,
    img: service.mainImage
      ? urlFor(service.mainImage).width(1200).height(800).url()
      : '/assets/imgs/works/1/1.jpg',
  }
}

export function mapServicesFromSanity(services, urlFor) {
  return (services || []).map((s, i) => mapServiceFromSanity(s, urlFor, i))
}
