/**
 * Public, royalty-free imagery from Unsplash (https://unsplash.com).
 * Served directly from the Unsplash CDN with on-the-fly sizing params.
 * Curated to match the warm editorial art-direction of the site.
 */
const U = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

export const heroImage = U("photo-1614546843232-de724ea42ede", 1400);

export const workImages = {
  lumen: U("photo-1571513800374-df1bbe650e56"),
  atelierMare: U("photo-1580478491436-fd6a937acc9e"),
  formField: U("photo-1555181937-efe4e074a301"),
  nacre: U("photo-1657741146788-f14ecb62e716"),
};