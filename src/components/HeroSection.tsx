import React, { useEffect, useState } from "react";
import { ArrowRight, Globe, Clock } from "lucide-react";
import { BlogPost, getPosts } from "../blog/getPosts";
import { PortableText } from "@portabletext/react";
import { getPostBySlug, type BlogPostFull } from "../blog/getPostBySlug"; // ajustá el path si hace falta

const HeroSection: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPostFull | null>(null);
  const [loadingPost, setLoadingPost] = useState(false);

  // 1) Traer listado de posts al cargar
  useEffect(() => {
    getPosts()
      .then(setPosts)
      .catch((err) => {
        console.error("Error trayendo posts:", err);
      });
  }, []);

  // 2) Traer el post completo cuando elegís uno
  useEffect(() => {
    if (!selectedSlug) {
      setSelectedPost(null);
      return;
    }

    setLoadingPost(true);
    getPostBySlug(selectedSlug)
      .then((post) => {
        setSelectedPost(post);
      })
      .catch((err) => {
        console.error("Error trayendo post:", err);
        setSelectedPost(null);
      })
      .finally(() => setLoadingPost(false));
  }, [selectedSlug]);

  return (
    <section className="pt-20 pb-16 dsc-gradient-bg">
      <div className="dsc-container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Geographic Advantage Banner */}
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-8 text-sm font-medium text-gray-700 border border-gray-200">
            <Globe className="w-4 h-4 text-blue-500" />
            <span>Equipo de desarrollo con alcance global y enfoque local</span>
          </div>

          {/* Main Headlines */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 dsc-fade-in">
            Creamos soluciones web que hacen{" "}
            <span className="text-blue-500">crecer</span> a las startups y las
            pymes
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto dsc-fade-in dsc-animate-delay-1">
            Desarrollo personalizado con enfoque flexible, comunicación directa
            y ventajas competitivas de nuestro equipo en Buenos Aires
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16 dsc-fade-in dsc-animate-delay-2">
            <a
              href="#contact"
              className="dsc-btn-primary text-lg px-8 py-4 flex items-center space-x-2"
            >
              <span>Comience su proyecto</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#process" className="dsc-btn-secondary text-lg px-8 py-4">
              Vea nuestro proceso
            </a>
          </div>

          {/* Sanity */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 dsc-fade-in">
            Posts de Sanity
          </h2>
          {posts.length === 0 ? (
            <p>No hay posts todavía.</p>
          ) : (
            <>
              <ul>
                {posts.map((p) => (
                  <li key={p.slug} className="mb-2">
                    <button
                      type="button"
                      onClick={() => setSelectedSlug(p.slug)}
                      className="text-left underline text-blue-600 hover:text-blue-800"
                    >
                      {p.title}
                    </button>

                    {p.publishedAt ? (
                      <small className="text-gray-500">
                        {" "}
                        — {new Date(p.publishedAt).toLocaleDateString()}
                      </small>
                    ) : null}
                  </li>
                ))}
              </ul>

              {loadingPost ? (
                <p className="mt-6">Cargando post…</p>
              ) : selectedPost ? (
                <article className="mt-8 prose max-w-none">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {selectedPost.title}
                  </h3>

                  <PortableText value={selectedPost.body} />
                </article>
              ) : selectedSlug ? (
                <p className="mt-6 text-gray-600">No se encontró el post.</p>
              ) : null}
            </>
          )}
          {/* Sanity */}

          {/* Time Zone Coverage */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto dsc-fade-in dsc-animate-delay-3">
            <div className="flex items-center justify-center space-x-3 bg-white/60 backdrop-blur-sm rounded-lg p-4">
              <Clock className="w-5 h-5 text-blue-500" />
              <div className="text-left">
                <div className="font-medium text-gray-800">
                  GMT-3 Buenos Aires
                </div>
                <div className="text-sm text-gray-600">
                  Horario base de operaciones
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/60 backdrop-blur-sm rounded-lg p-4">
              <Globe className="w-5 h-5 text-blue-500" />
              <div className="text-left">
                <div className="font-medium text-gray-800">
                  Cobertura internacional
                </div>
                <div className="text-sm text-gray-600">
                  Adaptamos horarios según proyecto
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
