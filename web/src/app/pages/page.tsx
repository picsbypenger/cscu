import { client } from "@/sanity/client";
import { defineQuery, type SanityDocument } from "next-sanity";
import Link from "next/link";

const PAGES_QUERY = defineQuery(
  `*[_type == "page" && defined(slug.current)] | order(_createdAt desc){ _id, title, slug }`
);

const options = { next: { revalidate: 30 } };

export default async function PagesIndex() {
  const pages = await client.fetch<SanityDocument[]>(PAGES_QUERY, {}, options);

  return (
    <div className="section" style={{ padding: '4rem 2rem' }}>
      <h1>Pages</h1>
      <ul>
        {pages.map((page) => (
          <li key={page._id} style={{ marginBottom: '1rem' }}>
            <Link href={`/pages/${(page.slug as { current?: string })?.current}`} style={{ textDecoration: 'underline', color: 'blue' }}>
              {page.title as string}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

