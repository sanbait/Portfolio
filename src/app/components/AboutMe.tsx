import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import portrait from "../../assets/AVA.png";

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

export function AboutMe() {
  return (
    <section
      id="about"
      className="py-24 px-6"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left: Portrait */}
          <FadeInSection>
            <div className="relative flex-shrink-0 w-[280px] h-[347px] mx-auto sm:w-[360px] sm:h-[446px] lg:w-[420px] lg:h-[520px] lg:mx-0 mb-10 lg:mb-0">
              <div className="relative w-full h-full">
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ border: "1px solid var(--border-default)", backgroundColor: "rgba(0, 0, 0, 0.25)" }}
                >
                  <ImageWithFallback
                    src={portrait}
                    alt="Александр Батурин"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: "center 20%" }}
                  />
                </div>
                {/* Neon accent bars */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1"
                  style={{ backgroundColor: "var(--accent-neon)" }}
                />
                <div
                  className="absolute top-0 left-0 w-1 h-20"
                  style={{ backgroundColor: "var(--accent-neon)" }}
                />
              </div>
            </div>
          </FadeInSection>

          {/* Right: About content */}
          <div className="flex-1">
            <FadeInSection delay={0.1}>
              <h2 className="screen-title" style={{ color: "var(--text-primary)", marginBottom: "var(--heading-gap)" }}>
                ОБО МНЕ
              </h2>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div
                className="space-y-5"
                style={{
                  fontFamily: "var(--body-font)",
                  fontSize: "var(--body-size)",
                  lineHeight: "var(--body-lh)",
                  color: "var(--text-secondary)",
                }}
              >
                <p>
                  Senior Game Designer с 8+ годами опыта. Специализируюсь на экономике, системном дизайне и монетизации. Смотрю на проект не как на набор фич, а как на цельную игровую систему: прогрессия, баланс, награды, удержание, мотивация игрока и точки роста продукта.
                </p>
                <p>
                  Работаю с PC, mobile, Web3 и Telegram Mini Apps. Проектирую игровые экономики, системы прогрессии, социальные механики и монетизацию для F2P, MMO и геймифицированных продуктов. Моя сильная сторона — data-driven подход and макро-видение: умею видеть проект целиком, принимать решения на основе метрик и собирать решения, которые работают не только на уровне дизайна, но и на уровне продукта.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <div
                className="mt-10 pt-8"
                style={{ borderTop: "1px solid var(--border-default)" }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-6">
                  <div>
                    <p
                      className="mb-2 uppercase"
                      style={{
                        fontFamily: "var(--label-font)",
                        fontWeight: "var(--label-weight)",
                        fontSize: "var(--label-size)",
                        lineHeight: "var(--label-lh)",
                        letterSpacing: "var(--label-ls)",
                        color: "var(--accent-neon)",
                        opacity: 0.8
                      }}
                    >
                      ЛОКАЦИЯ
                    </p>
                    <p style={{ color: "var(--text-primary)" }}>Москва / удалённо</p>
                  </div>
                  <div>
                    <p
                      className="mb-2 uppercase"
                      style={{
                        fontFamily: "var(--label-font)",
                        fontWeight: "var(--label-weight)",
                        fontSize: "var(--label-size)",
                        lineHeight: "var(--label-lh)",
                        letterSpacing: "var(--label-ls)",
                        color: "var(--accent-neon)",
                        opacity: 0.8
                      }}
                    >
                      ОПЫТ
                    </p>
                    <p style={{ color: "var(--text-primary)" }}>8+ лет в game design</p>
                  </div>
                  <div>
                    <p
                      className="mb-2 uppercase"
                      style={{
                        fontFamily: "var(--label-font)",
                        fontWeight: "var(--label-weight)",
                        fontSize: "var(--label-size)",
                        lineHeight: "var(--label-lh)",
                        letterSpacing: "var(--label-ls)",
                        color: "var(--accent-neon)",
                        opacity: 0.8
                      }}
                    >
                      ПЛАТФОРМЫ
                    </p>
                    <p style={{ color: "var(--text-primary)" }}>PC, mobile, TMA, Web3</p>
                  </div>
                  <div>
                    <p
                      className="mb-2 uppercase"
                      style={{
                        fontFamily: "var(--label-font)",
                        fontWeight: "var(--label-weight)",
                        fontSize: "var(--label-size)",
                        lineHeight: "var(--label-lh)",
                        letterSpacing: "var(--label-ls)",
                        color: "var(--accent-neon)",
                        opacity: 0.8
                      }}
                    >
                      СПЕЦИАЛИЗАЦИЯ
                    </p>
                    <p style={{ color: "var(--text-primary)" }}>Economy, Systems, Data-Driven</p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  );
}
