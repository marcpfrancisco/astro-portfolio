import { useSanityClient } from "astro-sanity";

export async function getAllSsocials() {
  const client = useSanityClient();
  const query = '*[_type== "socials"]';
  const socials = await client.fetch(query);
  return socials;
}
