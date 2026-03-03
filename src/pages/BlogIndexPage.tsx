import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { getPosts, type BlogPost } from "../blog/getPosts";

function formatDate(iso?: string) {
  if (!iso) return null;
  try {
    return new Date(iso).toLocaleDateString("es-AR", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  } catch {
    return null;
  }
}

export default function BlogIndexPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;

    setIsLoading(true);
    setErrorMsg(null);

    getPosts()
      .then((data) => {
        if (!alive) return;
        setPosts(data);
      })
      .catch((err) => {
        console.error(err);
        if (!alive) return;
        setErrorMsg("No pudimos cargar el blog. Probá de nuevo.");
      })
      .finally(() => {
        if (!alive) return;
        setIsLoading(false);
      });

    return () => {
      alive = false;
    };
  }, []);

  const content = useMemo(() => {
    if (isLoading) {
      return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="dsc-card animate-pulse">
              <div className="h-6 bg-gray-200 rounded mb-3" />
              <div className="h-4 bg-gray-200 rounded w-1/2" />
              <div className="h-4 bg-gray-200 rounded w-2/3 mt-6" />
            </div>
          ))}
        </div>
      );
    }

    if (errorMsg) {
      return (
        <div className="dsc-card">
          <p className="text-gray-700">{errorMsg}</p>
        </div>
      );
    }

    if (posts.length === 0) {
      return (
        <div className="dsc-card">
          <p className="text-gray-700">No hay posts todavía.</p>
          <p className="text-sm text-gray-500 mt-2">
            Publicá uno desde Sanity Studio y va a aparecer acá.
          </p>
        </div>
      );
    }

    return (
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => {
          const d = formatDate(p.publishedAt);
          return (
            <li key={p.slug} className="dsc-card group">
              <Link to={`/blog/${p.slug}`} className="block">
                <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {p.title}
                </h2>

                {d ? (
                  <p className="text-sm text-gray-500 mt-2">{d}</p>
                ) : (
                  <p className="text-sm text-gray-400 mt-2">Sin fecha</p>
                )}

                <div className="mt-6 inline-flex items-center gap-2 text-blue-600 font-medium">
                  Leer post <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }, [errorMsg, isLoading, posts]);

  return (
    <section className="pt-24 pb-24 dsc-gradient-bg">
      <div className="dsc-container">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center text-sm text-gray-600 hover:text-blue-500 transition-colors"
            >
              ← Volver al inicio
            </Link>
          </div>

          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <h1 className="text-4xl font-semibold text-gray-900">Blog</h1>
              <p className="text-gray-600 mt-2">
                Publicaciones administradas desde Sanity.
              </p>
            </div>
          </div>

          {content}
        </div>
      </div>
    </section>
  );
}
