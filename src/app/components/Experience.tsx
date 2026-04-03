import { useRef } from "react";
import { motion, useInView } from "motion/react";

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}

const experiences = [
  {
    role: "Senior Game Systems Designer",
    company: "MetaStudio",
    period: "2023 — Настоящее время",
    description:
      "Проектирую игровые системы для мобильных и Web3 проектов. Отвечаю за экономику, прогрессию и монетизацию. Работаю напрямую с бизнес-метриками.",
  },
  {
    role: "Lead System Designer",
    company: "GameCraft",
    period: "2022 — 2023",
    description:
      "Разрабатывал системы для F2P-игр и Telegram Mini Apps. Запустил 3 проекта от концепта до релиза. Работал с командами 4-8 человек.",
  },
  {
    role: "Product Designer",
    company: "EdTech Startup",
    period: "2021 — 2022",
    description:
      "Создавал геймифицированные образовательные продукты. Внедрял игровые механики в неигровые контексты. Работал с retention и engagement метриками.",
  },
  {
    role: "Junior Game Designer",
    company: "Indie Studio",
    period: "2020 — 2021",
    description:
      "Начинал карьеру в инди-студии. Работал над балансом, контентом и UX. Изучал основы системного дизайна и экономики.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        <FadeInSection>
          <h2 style={{ color: "var(--text-primary)", marginBottom: "var(--content-gap)" }}>
            ОПЫТ РАБОТЫ
          </h2>
        </FadeInSection>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px hidden md:block" style={{ backgroundColor: "rgba(204, 255, 0, 0.2)" }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "var(--card-gap)" }}>
            {experiences.map((exp, i) => (
              <FadeInSection key={i} delay={i * 0.1}>
                <div className="relative md:pl-12">
                  {/* Timeline dot */}
                  <div
                    className="absolute left-0 top-2 w-3 h-3 rounded-full hidden md:block"
                    style={{
                      backgroundColor: "var(--accent-neon)",
                      border: "4px solid var(--bg-secondary)",
                      transform: "translateX(-6px)",
                    }}
                  />

                  {/* Content */}
                  <div
                    className="p-6 transition-all"
                    style={{
                      border: "1px solid var(--border-default)",
                      borderRadius: "var(--radius-card-sm)",
                      backgroundColor: "rgba(255, 255, 255, 0.01)",
                    }}
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2 mb-3">
                      <h3 style={{ color: "var(--text-primary)" }}>{exp.role}</h3>
                      <span
                        className="uppercase"
                        style={{
                          fontFamily: "var(--label-font)",
                          fontWeight: "var(--label-weight)",
                          fontSize: "var(--label-size)",
                          letterSpacing: "var(--label-ls)",
                          color: "rgba(204, 255, 0, 0.7)",
                        }}
                      >
                        {exp.period}
                      </span>
                    </div>

                    <p
                      className="mb-3 uppercase"
                      style={{
                        fontFamily: "var(--label-font)",
                        fontWeight: "var(--label-weight)",
                        fontSize: "var(--label-size)",
                        letterSpacing: "var(--label-ls)",
                        color: "rgba(204, 255, 0, 0.6)",
                      }}
                    >
                      {exp.company}
                    </p>

                    <p
                      style={{
                        fontFamily: "var(--body-font)",
                        fontSize: "var(--secondary-size)",
                        lineHeight: "var(--secondary-lh)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {exp.description}
                    </p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
