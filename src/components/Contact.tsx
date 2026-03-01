const contactInfo = [
  {
    label: "Téléphone",
    value: "+33 6 68 42 27 50",
    href: "tel:+33668422750",
  },
  {
    label: "Email",
    value: "contact@lp-gold.com",
    href: "mailto:contact@lp-gold.com",
  },
  {
    label: "Adresse",
    value: "21 Av. Émile Cossonneau, 93160 Noisy-le-Grand",
    href: "https://maps.google.com/?q=21+Av.+Emile+Cossonneau,+93160+Noisy-le-Grand",
  },
];

const hours = [
  { day: "Lundi \u2014 Samedi", time: "10h00 \u2013 19h00" },
  { day: "Dimanche", time: "Fermé" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-noir-light">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 scroll-animate">
          <p className="text-[11px] tracking-[0.35em] uppercase text-gold/70 mb-5">
            Contact
          </p>
          <h2 className="font-[var(--font-display)] text-3xl sm:text-5xl font-normal text-cream">
            Rendez-nous <span className="italic text-gold">visite</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left — Info + Hours */}
          <div className="scroll-animate space-y-12">
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === "Adresse" ? "_blank" : undefined}
                  rel={item.label === "Adresse" ? "noopener noreferrer" : undefined}
                  className="block group"
                >
                  <p className="text-[11px] tracking-[0.2em] uppercase text-cream/30 mb-1">
                    {item.label}
                  </p>
                  <p className="text-cream/70 group-hover:text-gold transition-colors text-[15px]">
                    {item.value}
                  </p>
                </a>
              ))}
            </div>

            <div className="border-t border-cream/5 pt-8">
              <p className="text-[11px] tracking-[0.2em] uppercase text-cream/30 mb-4">
                Horaires d&apos;ouverture
              </p>
              <div className="space-y-2">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between text-[15px]">
                    <span className="text-cream/50">{h.day}</span>
                    <span className={h.time === "Fermé" ? "text-cream/25" : "text-cream/70"}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick CTA */}
            <a
              href="https://wa.me/33668422750?text=Bonjour%2C%20je%20souhaite%20des%20informations%20sur%20vos%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-[13px] tracking-[0.12em] uppercase text-gold hover:text-gold-light transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Écrire sur WhatsApp
            </a>
          </div>

          {/* Right — Map */}
          <div className="scroll-animate overflow-hidden border border-cream/5 min-h-[450px]">
            <iframe
              title="LP Gold \u2014 Noisy-le-Grand"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.8!2d2.5519!3d48.8489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e60e4f1b6b1b1b%3A0x0!2s21+Avenue+Emile+Cossonneau%2C+93160+Noisy-le-Grand!5e0!3m2!1sfr!2sfr!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 450 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
