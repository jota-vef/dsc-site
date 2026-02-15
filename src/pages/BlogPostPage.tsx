import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PortableText } from "@portabletext/react";
import { getPostBySlug, type BlogPostFull } from "../blog/getPostBySlug";

export default function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPostFull | null>(null);

  useEffect(() => {
    if (!slug) return;
    getPostBySlug(slug).then(setPost).catch(console.error);
  }, [slug]);

  if (!post) {
    return (
      <main className="p-6">
        <p className="mb-6">
          <Link to="/blog" className="underline">
            ← Volver al blog
          </Link>
        </p>
        <p>Cargando…</p>
      </main>
    );
  }

  return (
    <main className="p-6">
      <p className="mb-6">
        <Link to="/blog" className="underline">
          ← Volver al blog
        </Link>
      </p>

      <article className="prose max-w-none">
        <h1 className="text-3xl font-semibold text-gray-900 mb-4">
          {post.title}
        </h1>
        <PortableText value={post.body} />
      </article>
    </main>
  );
}
