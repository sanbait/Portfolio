import { useRef } from "react";
import { motion, useInView } from "motion/react";

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

const strengths = [
  {
    title: "Вижу продукт целиком",
    description:
      "Понимаю, как игровые системы влияют на бизнес-метрики. Могу выстроить цельный продукт от игрового цикла до монетизации и удержания, а не просто набор фич. Умею работать с живыми данными и корректировать направление на основе реальных сигналов от аудитории.",
  },
  {
    title: "Держу фокус и границы",
    description:
      "Умею определять главное и не распыляться на второстепенное. Выстраиваю приоритеты так, чтобы команда двигалась к релизу, а не уходила в бесконечную доработку. Удерживаю проект в рабочих рамках по времени, ресурсам и скоупу.",
  },
  {
    title: "Делаю, а не только проектирую",
    description:
      "Не боюсь брать ответственность за результат и доводить проекты до финальной версии. Работаю в компактных командах, где нужно не просто писать документы, а собирать рабочие продукты. Перехожу от концепта к MVP и от MVP к релизу.",
  },
];

export function Strength() {
  return (
    <section id="strength" className="py-24 px-6" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        <FadeInSection>
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* Left: Large heading */}
            <div className="lg:w-2/5 flex-shrink-0">
              <h2
                style={{
                  fontFamily: "var(--h2-font)",
                  fontWeight: "var(--h2-weight)",
                  fontSize: "var(--h2-size)",
                  lineHeight: "var(--h2-lh)",
                  color: "var(--text-primary)",
                }}
              >
                СИСТЕМНОЕ
                <br />
                <span style={{ color: "var(--accent-neon)" }}>МЫШЛЕНИЕ</span>
              </h2>
            </div>

            {/* Right: Text content */}
            <div className="flex-1 space-y-8">
              {strengths.map((item, i) => (
                <FadeInSection key={i} delay={0.1 + i * 0.1}>
                  <div>
                    <h3 className="mb-3" style={{ color: "var(--text-primary)" }}>
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--body-font)",
                        fontSize: "var(--body-size)",
                        lineHeight: "var(--body-lh)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
