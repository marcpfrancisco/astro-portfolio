import { useSanityClient } from "astro-sanity";

export async function getAllServices() {
  const client = useSanityClient();
  const query = '*[_type== "services"]';
  const services = await client.fetch(query);
  return services;
}
