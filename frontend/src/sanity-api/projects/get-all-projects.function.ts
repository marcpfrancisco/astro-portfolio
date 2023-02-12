import { useSanityClient } from "astro-sanity";

export async function getAllProjects() {
  const client = useSanityClient();
  const query = '*[_type== "projects"]';
  const projects = await client.fetch(query);
  return projects;
}
