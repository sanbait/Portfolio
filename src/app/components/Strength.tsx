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

export function Strength() {
  const content = [
    {
      title: "СИСТЕМНЫЙ ГЕЙМДИЗАЙН",
      description:
        "Собираю игру как единую структуру, где core loop, meta loop, прогрессия и социальные механики работают синхронно. Связываю элементы в модель, которая сохраняет баланс при масштабировании контента и надежно работает на живой аудитории.",
    },
    {
      title: "ПРОЕКТИРОВАНИЕ СЛОЖНЫХ СИСТЕМ",
      description:
        "Сильнее всего раскрываюсь в проектах с несколькими взаимосвязанными слоями: экономикой, дефицитом, социальным взаимодействием и длинным циклом развития. Проектирую системы, где решения игрока влияют на состояние продукта и формируют долгосрочную мотивацию.",
    },
    {
      title: "ПРОДУКТОВЫЙ ПОДХОД",
      description:
        "Принимаю решения на основе аналитики и логики систем. Смотрю на геймдизайн через поведение игроков, ключевые метрики и влияние решений на развитие продукта. Для меня качественный дизайн — это рабочая модель, которая дает игре устойчивость, а бизнесу — измеримый результат.",
    },
  ];

  return (
    <section 
      id="strength" 
      className="py-16 px-6 md:px-12" 
      style={{ backgroundColor: "var(--accent-neon)" }}
    >
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        <FadeInSection>
          <div className="mb-12">
            <h2
              className="screen-title screen-title--black"
              style={{
                fontFamily: "var(--h2-font)",
                fontWeight: "900",
                fontSize: "clamp(2.1rem, 7vw, 5.8rem)",
                lineHeight: "0.9",
                color: "#000000",
                letterSpacing: "-0.04em",
                textTransform: "uppercase"
              }}
            >
              ГЕЙМ-АРХИТЕКТОР
            </h2>
            <p
              className="mt-6"
              style={{
                color: "#000000",
                fontFamily: "var(--body-font)",
                fontSize: "1.35rem",
                lineHeight: "1.55",
                fontWeight: 750,
                maxWidth: "none"
              }}
            >
              Обладаю продуктовым взглядом на игру. Проектирую системы как цельный пользовательский опыт и как экономическую модель с фокусом на удержание и монетизацию. Собираю жизнеспособные продукты с устойчивой структурой и долгим жизненным циклом.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
            {content.map((item, i) => (
              <FadeInSection key={i} delay={0.1 + i * 0.1}>
                <div
                  className="module-card flex flex-col h-full p-7"
                >
                  <h3 
                    className="mb-3 font-black" 
                    style={{ 
                      color: "#000000",
                      fontSize: "1.35rem",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase"
                    }}
                  >
                    {item.title}
                  </h3>
                  <div 
                    className="w-full h-[2px] mb-6" 
                    style={{ backgroundColor: "#000000" }} 
                  />
                  <p
                    style={{
                      fontFamily: "var(--body-font)",
                      fontSize: "1.15rem",
                      lineHeight: "1.5",
                      color: "#000000",
                      fontWeight: "500",
                      flex: 1
                    }}
                  >
                    {item.description}
                  </p>
                  <div className="module-footer mt-6">
                    <span className="module-dot" />
                    <span className="module-line" />
                    <span className="module-label">ACTIVE MODULE</span>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
