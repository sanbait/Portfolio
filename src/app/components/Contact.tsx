import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Send } from "lucide-react";

const CV_URL = "https://drive.google.com/file/d/1CefF2K42lhG9cDMnvd3N90YZkjchYGqL/view?usp=drive_link";
const TG_URL = "https://t.me/Alexsunpro";
const EMAIL = "Sanbaititl@gmail.com";

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
          <h2 className="screen-title" style={{ color: "var(--text-primary)", marginBottom: "var(--heading-gap)" }}>
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
          <div className="flex flex-wrap gap-6">
            <motion.a
              href={TG_URL}
              target="_blank"
              rel="noreferrer"
              whileHover={{ backgroundColor: "var(--accent-neon)", color: "#000000" }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 cursor-pointer font-bold uppercase tracking-widest"
              style={{
                padding: "25px 65px",
                backgroundColor: "transparent",
                color: "#FFFFFF",
                borderRadius: "0",
                border: "1px solid var(--accent-neon)",
                fontSize: "18px",
                textDecoration: "none",
                transition: "none"
              }}
              transition={{ duration: 0 }}
            >
              <Send size={20} />
              Написать мне
            </motion.a>
            <motion.a
              href={`mailto:${EMAIL}`}
              whileHover={{ backgroundColor: "var(--accent-neon)", color: "#000000" }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 cursor-pointer font-bold uppercase tracking-widest"
              style={{
                padding: "25px 65px",
                backgroundColor: "transparent",
                color: "#FFFFFF",
                borderRadius: "0",
                border: "1px solid var(--accent-neon)",
                fontSize: "18px",
                textDecoration: "none",
                transition: "none"
              }}
              transition={{ duration: 0 }}
            >
              Email
            </motion.a>
            <motion.a
              href={CV_URL}
              target="_blank"
              rel="noreferrer"
              whileHover={{ backgroundColor: "transparent", color: "var(--accent-neon)" }}
              whileTap={{ scale: 0.98 }}
              className="cv-button flex items-center gap-2 cursor-pointer font-bold uppercase tracking-widest"
              style={{
                padding: "25px 65px",
                borderRadius: "0",
                fontSize: "18px",
                transition: "none"
              }}
              transition={{ duration: 0 }}
            >
              CV
            </motion.a>
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
                @Alexsunpro
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
                {EMAIL}
              </p>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
