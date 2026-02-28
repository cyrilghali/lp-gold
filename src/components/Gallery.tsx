import Image from "next/image";

const galleryItems = [
  {
    id: 1,
    src: "/images/gallery/bague-or.jpg",
    alt: "Bague en or sur mesure",
    span: "col-span-2 row-span-2",
  },
  {
    id: 2,
    src: "/images/gallery/collier-or.jpg",
    alt: "Collier en or artisanal",
    span: "",
  },
  {
    id: 3,
    src: "/images/gallery/bracelet-or.jpg",
    alt: "Bracelet en or",
    span: "",
  },
  {
    id: 4,
    src: "/images/gallery/boucles-oreilles.jpg",
    alt: "Boucles d'oreilles en or",
    span: "",
  },
  {
    id: 5,
    src: "/images/gallery/alliance.jpg",
    alt: "Alliance sur mesure",
    span: "",
  },
  {
    id: 6,
    src: "/images/gallery/pendentif-or.jpg",
    alt: "Pendentif en or",
    span: "col-span-2",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-32 bg-noir">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 scroll-animate">
          <p className="text-[11px] tracking-[0.35em] uppercase text-gold/70 mb-5">
            Galerie
          </p>
          <h2 className="font-[var(--font-display)] text-3xl sm:text-5xl font-normal text-cream">
            Nos <span className="italic text-gold">créations</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`scroll-animate group relative aspect-square overflow-hidden border border-cream/5 hover:border-gold/20 transition-all duration-500 ${item.span}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes={item.span.includes("col-span-2") ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-noir/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                <p className="text-cream/80 text-sm font-[var(--font-display)] italic">{item.alt}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
