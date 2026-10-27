export const site = {
  name: 'Rusydee Izzat',
  role: 'EV Retail & Commercial Operations',
  description: 'Rusydee Izzat’s personal portfolio. Over a decade of experience connecting people and technology across EV retail, customer experience and commercial operations in Malaysia.',
  summary: 'Connecting people with technology through thoughtful customer experiences and hands-on commercial operations.',
}
export function pageMeta(title: string, description: string) {
  const fullTitle = `${title} | ${site.name}`
  return { meta: [{ title: fullTitle }, { name: 'description', content: description }, { property: 'og:title', content: fullTitle }, { property: 'og:description', content: description }] }
}
