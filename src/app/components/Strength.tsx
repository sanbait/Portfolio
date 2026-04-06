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
      title: "ПСИХОЛОГИЯ ИГРОКА",
      description: "Понимаю, что движет людьми. Использую дофаминовые петли и когнитивные искажения для создания устойчивой лояльности.",
    },
    {
      title: "МАТЕМАТИЧЕСКИЙ БАЛАНС",
      description: "Любая эмоция в продукте должна быть подкреплена жесткой математической моделью и просчитанной экономикой.",
    },
    {
      title: "ИТЕРАТИВНЫЙ ПРОЦЕСС",
      description: "Гипотеза — Тест — Анализ — Масштабирование. Только такой цикл гарантирует достижение бизнес-целей.",
    }
  ];

  return (
    <section 
      id="strength" 
      className="py-24 px-6 md:px-12" 
      style={{ backgroundColor: "var(--accent-neon)" }}
    >
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        <FadeInSection>
          <div className="mb-20">
            <h2
              style={{
                fontFamily: "var(--h2-font)",
                fontWeight: "900",
                fontSize: "clamp(3rem, 10vw, 8rem)",
                lineHeight: "0.9",
                color: "#000000",
                letterSpacing: "-0.04em",
                textTransform: "uppercase"
              }}
            >
              СИСТЕМНОЕ
              <br />
              МЫШЛЕНИЕ
            </h2>
            <p
              className="mt-6"
              style={{
                color: "#000000",
                fontFamily: "var(--body-font)",
                fontSize: "clamp(1.05rem, 4.2vw, 1.35rem)",
                lineHeight: "1.55",
                fontWeight: 750,
                maxWidth: "none"
              }}
            >
              Обладаю продуктовым взглядом на игру.
              <span className="hidden sm:inline">
                {" "}
                Проектирую системы как цельный пользовательский опыт и как экономическую модель с фокусом на удержание и монетизацию.
              </span>{" "}
              Собираю жизнеспособные продукты с устойчивой структурой и долгим жизненным циклом.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
            {content.map((item, i) => (
              <FadeInSection key={i} delay={0.1 + i * 0.1}>
                <div className="flex flex-col h-full">
                  <h3 
                    className="mb-3 font-black" 
                    style={{ 
                      color: "#000000",
                      fontSize: "1.2rem",
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
                      fontSize: "1.1rem",
                      lineHeight: "1.4",
                      color: "#000000",
                      fontWeight: "500"
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
