import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PortableText } from "@portabletext/react";
import { getPostBySlug, type BlogPostFull } from "../blog/getPostBySlug";

function formatDate(iso?: string) {
  if (!iso) return null;
  try {
    return new Date(iso).toLocaleDateString("es-AR", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    });
  } catch {
    return null;
  }
}

export default function BlogPostPage() {
  const { slug } = useParams();

  // undefined = cargando, null = no encontrado, BlogPostFull = ok
  const [post, setPost] = useState<BlogPostFull | null | undefined>(undefined);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    let alive = true;
    setPost(undefined);
    setErrorMsg(null);

    // Si venís scrolleando de otra página, mejor arrancar arriba
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });

    getPostBySlug(slug)
      .then((p) => {
        if (!alive) return;
        setPost(p); // puede ser null si no existe
      })
      .catch((err) => {
        console.error(err);
        if (!alive) return;
        setErrorMsg("No pudimos cargar el post.");
        setPost(null);
      });

    return () => {
      alive = false;
    };
  }, [slug]);

  const components = useMemo(
    () => ({
      block: {
        h2: ({ children }: any) => (
          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
            {children}
          </h2>
        ),
        h3: ({ children }: any) => (
          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
            {children}
          </h3>
        ),
        normal: ({ children }: any) => (
          <p className="text-gray-700 leading-relaxed mb-5">{children}</p>
        ),
        blockquote: ({ children }: any) => (
          <blockquote className="border-l-4 border-blue-200 pl-4 italic text-gray-700 my-6">
            {children}
          </blockquote>
        ),
      },
      list: {
        bullet: ({ children }: any) => (
          <ul className="list-disc pl-6 space-y-2 my-6 text-gray-700">
            {children}
          </ul>
        ),
        number: ({ children }: any) => (
          <ol className="list-decimal pl-6 space-y-2 my-6 text-gray-700">
            {children}
          </ol>
        ),
      },
      marks: {
        link: ({ children, value }: any) => {
          const href = value?.href as string | undefined;
          const isExternal = href?.startsWith("http");
          return (
            <a
              href={href}
              className="text-blue-600 underline hover:text-blue-800"
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noreferrer" : undefined}
            >
              {children}
            </a>
          );
        },
        code: ({ children }: any) => (
          <code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800 text-sm">
            {children}
          </code>
        ),
      },
    }),
    [],
  );

  return (
    <section className="pt-24 pb-24 dsc-gradient-bg">
      <div className="dsc-container">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Link
              to="/blog"
              className="inline-flex items-center text-sm text-gray-600 hover:text-blue-500 transition-colors"
            >
              ← Volver al blog
            </Link>
          </div>

          {post === undefined ? (
            <div className="dsc-card animate-pulse">
              <div className="h-8 bg-gray-200 rounded mb-4" />
              <div className="h-4 bg-gray-200 rounded w-1/3 mb-8" />
              <div className="h-4 bg-gray-200 rounded mb-3" />
              <div className="h-4 bg-gray-200 rounded mb-3" />
              <div className="h-4 bg-gray-200 rounded w-2/3" />
            </div>
          ) : errorMsg ? (
            <div className="dsc-card">
              <p className="text-gray-700">{errorMsg}</p>
            </div>
          ) : post === null ? (
            <div className="dsc-card">
              <h1 className="text-2xl font-semibold text-gray-900">
                Post no encontrado
              </h1>
              <p className="text-gray-700 mt-2">
                Ese slug no existe (o el post no está publicado).
              </p>
              <div className="mt-6">
                <Link to="/blog" className="dsc-btn-secondary">
                  Volver al listado
                </Link>
              </div>
            </div>
          ) : (
            <article className="dsc-card">
              <header>
                <h1 className="text-4xl font-semibold text-gray-900">
                  {post.title}
                </h1>
                {formatDate(post.publishedAt) ? (
                  <p className="text-sm text-gray-500 mt-3">
                    {formatDate(post.publishedAt)}
                  </p>
                ) : null}
              </header>

              <div className="mt-10">
                <PortableText value={post.body} components={components} />
              </div>
            </article>
          )}
        </div>
      </div>
    </section>
  );
}
