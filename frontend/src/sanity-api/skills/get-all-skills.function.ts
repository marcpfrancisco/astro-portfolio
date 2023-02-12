import { useSanityClient } from "astro-sanity";

export async function getAllSkills() {
  const client = useSanityClient();
  const query = '*[_type== "skills"]';
  const skills = await client.fetch(query);
  return skills;
}
