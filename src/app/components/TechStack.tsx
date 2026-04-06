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

const cards = [
  {
    title: "Игровая экономика",
    description:
      "Специализируюсь на создании устойчивых экономических моделей. Математически верифицирую баланс, источники и стоки ресурсов до начала разработки. Это позволяет прогнозировать инфляцию и купировать риски стагнации рынка на дистанции 12+ месяцев.",
  },
  {
    title: "Системный дизайн и социальные механики",
    description:
      "Проектирую игровые циклы, объединяющие прогрессию, экономику и социальное взаимодействие. Создаю системы, где дефицит, конкуренция и кооперация превращаются в инструменты удержания и формируют долгосрочную мотивацию игроков.",
  },
  {
    title: "Данные, продукт, реализация",
    description:
      "Принимаю решения на основе поведенческой аналитики и продуктовых метрик. Благодаря опыту прототипирования на Unreal Engine 5 (Blueprints), проверяю системные гипотезы в реальном геймплее и говорю на одном языке с командой разработки.",
  },
] as const;

export function TechStack() {
  return (
    <section id="expertise" className="py-24 px-6" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        <FadeInSection>
          <h2 style={{ color: "var(--text-primary)" }}>
            ПРОЕКТИРОВАНИЕ ИГРОВЫХ СИСТЕМ
          </h2>
          <p style={{ color: "var(--text-secondary)", marginTop: "0.75rem", marginBottom: "var(--content-gap)" }}>
            Из чего состоит моя работа и какие задачи я решаю на уровне систем, экономики и поведения игроков.
          </p>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {cards.map((card, i) => (
            <FadeInSection key={card.title} delay={0.1 + i * 0.1}>
              <div
                className="h-full p-6"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid var(--border-default)",
                  borderRadius: "var(--radius-card)",
                }}
              >
                <h3
                  className="mb-4"
                  style={{
                    fontFamily: "var(--label-font)",
                    fontWeight: "var(--label-weight)",
                    fontSize: "var(--label-size)",
                    letterSpacing: "var(--label-ls)",
                    color: "var(--accent-neon)",
                  }}
                >
                  {card.title}
                </h3>
                <p style={{ color: "var(--text-primary)" }}>{card.description}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
