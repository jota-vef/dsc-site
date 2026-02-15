import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPosts, type BlogPost } from "../blog/getPosts";

export default function BlogIndexPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    getPosts().then(setPosts).catch(console.error);
  }, []);

  return (
    <main className="p-6">
      <p className="mb-6">
        <Link to="/" className="underline">
          ← Volver al inicio
        </Link>
      </p>

      <h1 className="text-4xl font-semibold text-gray-900 mb-6">Blog</h1>

      {posts.length === 0 ? (
        <p>No hay posts todavía.</p>
      ) : (
        <ul>
          {posts.map((p) => (
            <li key={p.slug} className="mb-2">
              <Link
                to={`/blog/${p.slug}`}
                className="underline text-blue-600 hover:text-blue-800"
              >
                {p.title}
              </Link>

              {p.publishedAt ? (
                <small className="text-gray-500">
                  {" "}
                  — {new Date(p.publishedAt).toLocaleDateString()}
                </small>
              ) : null}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
