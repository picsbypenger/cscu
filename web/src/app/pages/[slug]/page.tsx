import { PortableText, defineQuery, type SanityDocument } from "next-sanity";
import { notFound } from "next/navigation";
import { client } from "@/sanity/client";

const PAGE_QUERY = defineQuery(
  `*[_type == "page" && slug.current == $slug][0]{ _id, title, body }`
);

const options = { next: { revalidate: 30 } };

export default async function PageDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = await client.fetch<SanityDocument | null>(PAGE_QUERY, { slug }, options);

  if (!page) return notFound();

  return (
    <article className="section" style={{ padding: '4rem 2rem' }}>
      <h1>{page.title as string}</h1>
      {Array.isArray(page.body) && <PortableText value={page.body} />}
    </article>
  );
}

