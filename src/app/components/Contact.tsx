import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Send } from "lucide-react";

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay }}
    >
      {children}
    </motion.div>
  );
}

export function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-6 relative overflow-hidden"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-3xl pointer-events-none" style={{ backgroundColor: "rgba(204, 255, 0, 0.1)" }} />

      <div className="relative z-10" style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        <FadeInSection>
          <h2 style={{ color: "var(--text-primary)", marginBottom: "var(--heading-gap)" }}>
            READY TO LEVEL UP?
          </h2>
        </FadeInSection>

        <FadeInSection delay={0.1}>
          <p
            className="max-w-2xl mb-12"
            style={{
              fontFamily: "var(--body-font)",
              fontSize: "var(--body-size)",
              lineHeight: "var(--body-lh)",
              color: "var(--text-secondary)",
            }}
          >
            Готов обсудить проект, провести аудит или помочь с системным дизайном.
            Свяжитесь со мной удобным способом.
          </p>
        </FadeInSection>

        {/* CTA buttons */}
        <FadeInSection delay={0.2}>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://t.me/alexander_baturin"
              className="flex items-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(204,255,0,0.6)]"
              style={{
                padding: "var(--btn-padding)",
                backgroundColor: "var(--accent-neon)",
                color: "var(--accent-neon-dark)",
                borderRadius: "var(--radius-button)",
                fontFamily: "var(--label-font)",
                fontWeight: "var(--label-weight)",
                fontSize: "var(--label-size)",
                letterSpacing: "var(--label-ls)",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              <Send size={18} />
              Написать мне
            </a>
            <a
              href="mailto:a.baturin@gamedesign.ru"
              className="flex items-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(204,255,0,0.4)] hover:border-[var(--accent-neon)]"
              style={{
                padding: "var(--btn-padding)",
                backgroundColor: "transparent",
                color: "var(--accent-neon)",
                border: "1px solid var(--border-button)",
                borderRadius: "var(--radius-button)",
                fontFamily: "var(--label-font)",
                fontWeight: "var(--label-weight)",
                fontSize: "var(--label-size)",
                letterSpacing: "var(--label-ls)",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              Email
            </a>
          </div>
        </FadeInSection>

        {/* Contact info */}
        <FadeInSection delay={0.3}>
          <div className="mt-16 pt-12 flex flex-wrap gap-8" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
            <div>
              <p
                className="mb-2 uppercase"
                style={{
                  fontFamily: "var(--label-font)",
                  fontWeight: "var(--label-weight)",
                  fontSize: "var(--label-size)",
                  letterSpacing: "var(--label-ls)",
                  color: "var(--text-tertiary)",
                }}
              >
                Telegram
              </p>
              <p style={{ fontFamily: "var(--body-font)", color: "var(--text-secondary)" }}>
                @alexander_baturin
              </p>
            </div>
            <div>
              <p
                className="mb-2 uppercase"
                style={{
                  fontFamily: "var(--label-font)",
                  fontWeight: "var(--label-weight)",
                  fontSize: "var(--label-size)",
                  letterSpacing: "var(--label-ls)",
                  color: "var(--text-tertiary)",
                }}
              >
                Email
              </p>
              <p style={{ fontFamily: "var(--body-font)", color: "var(--text-secondary)" }}>
                a.baturin@gamedesign.ru
              </p>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}