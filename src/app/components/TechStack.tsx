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

const competencies = {
  core: [
    "Игровой цикл",
    "Экономика и баланс",
    "Прогрессия",
    "F2P-монетизация",
    "Удержание (Retention)",
    "Социальные механики",
    "Live Ops",
    "Системный дизайн",
  ],
  product: [
    "Продуктовый подход",
    "Метрики и аналитика",
    "A/B тестирование",
    "Аудит систем",
    "Скоуп-менеджмент",
    "Приоритизация фич",
    "Roadmap",
    "MVP-разработка",
  ],
  platforms: [
    "Telegram Mini Apps",
    "Mobile (iOS/Android)",
    "PC (Steam)",
    "Cross-platform",
    "Web3 / Blockchain",
    "Enterprise gamification",
  ],
  tools: [
    "Figma",
    "Miro",
    "Notion",
    "JIRA / Linear",
    "Amplitude",
    "Google Analytics",
    "Excel / Sheets",
    "Tableau",
  ],
};

export function TechStack() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        <FadeInSection>
          <h2 style={{ color: "var(--text-primary)", marginBottom: "var(--content-gap)" }}>
            КОМПЕТЕНЦИИ
          </h2>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <FadeInSection delay={0.1}>
            <div>
              <h3
                className="mb-6 uppercase"
                style={{
                  fontFamily: "var(--label-font)",
                  fontWeight: "var(--label-weight)",
                  fontSize: "var(--label-size)",
                  letterSpacing: "var(--label-ls)",
                  color: "var(--accent-neon)",
                }}
              >
                → CORE
              </h3>
              <div className="flex flex-wrap gap-2">
                {competencies.core.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 transition-all"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid var(--border-default)",
                      borderRadius: "var(--radius-card-sm)",
                      fontFamily: "var(--label-font)",
                      fontSize: "var(--label-size)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div>
              <h3
                className="mb-6 uppercase"
                style={{
                  fontFamily: "var(--label-font)",
                  fontWeight: "var(--label-weight)",
                  fontSize: "var(--label-size)",
                  letterSpacing: "var(--label-ls)",
                  color: "var(--accent-neon)",
                }}
              >
                → ПРОДУКТ
              </h3>
              <div className="flex flex-wrap gap-2">
                {competencies.product.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 transition-all"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid var(--border-default)",
                      borderRadius: "var(--radius-card-sm)",
                      fontFamily: "var(--label-font)",
                      fontSize: "var(--label-size)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.3}>
            <div>
              <h3
                className="mb-6 uppercase"
                style={{
                  fontFamily: "var(--label-font)",
                  fontWeight: "var(--label-weight)",
                  fontSize: "var(--label-size)",
                  letterSpacing: "var(--label-ls)",
                  color: "var(--accent-neon)",
                }}
              >
                → ПЛАТФОРМЫ
              </h3>
              <div className="flex flex-wrap gap-2">
                {competencies.platforms.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 transition-all"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid var(--border-default)",
                      borderRadius: "var(--radius-card-sm)",
                      fontFamily: "var(--label-font)",
                      fontSize: "var(--label-size)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.4}>
            <div>
              <h3
                className="mb-6 uppercase"
                style={{
                  fontFamily: "var(--label-font)",
                  fontWeight: "var(--label-weight)",
                  fontSize: "var(--label-size)",
                  letterSpacing: "var(--label-ls)",
                  color: "var(--accent-neon)",
                }}
              >
                → ИНСТРУМЕНТЫ
              </h3>
              <div className="flex flex-wrap gap-2">
                {competencies.tools.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 transition-all"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid var(--border-default)",
                      borderRadius: "var(--radius-card-sm)",
                      fontFamily: "var(--label-font)",
                      fontSize: "var(--label-size)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
