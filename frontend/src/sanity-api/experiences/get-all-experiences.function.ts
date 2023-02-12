import { useSanityClient } from "astro-sanity";

export async function getAllExperiences() {
  const client = useSanityClient();
  const query = '*[_type== "experiences"]';
  const experiences = await client.fetch(query);
  return experiences;
}
