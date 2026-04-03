import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

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

const otherCases = [
  {
    title: "MetaLife",
    role: "Lead System Designer",
    platform: "Mobile F2P",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
    description: "Социальная мобильная игра с упором на создание контента и взаимодействие между игроками",
    task: "Спроектировать экономику, социальные механики и систему прогрессии для долгосрочного удержания",
    result: "Retention D7: 32%, монетизация выше планового на 18%",
  },
  {
    title: "Alpha Bot",
    role: "Product Designer",
    platform: "Telegram Mini App",
    image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=400&h=300&fit=crop",
    task: "Создать геймифицированный опыт для fintech-продукта с focus на retention и virality",
    description: "Telegram-бот с элементами геймификации для финтех-платформы",
    result: "CAC снижен на 40%, органический трафик +65%",
  },
  {
    title: "Gratio",
    role: "Product Consultant",
    platform: "Enterprise SaaS",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop",
    description: "Корпоративная платформа для управления обучением и развитием сотрудников",
    task: "Провести аудит продукта и внедрить игровые механики для повышения engagement",
    result: "Активность пользователей +52%, NPS вырос с 6.2 до 8.1",
  },
  {
    title: "Lootbox Reform",
    role: "Economy Designer",
    platform: "PC / Mobile",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
    description: "Редизайн монетизации для существующей игры с переходом на ethical F2P модель",
    task: "Перестроить экономику и lootbox-систему под новые требования регуляторов",
    result: "Revenue удержан на уровне 95%, негативные отзывы снизились на 60%",
  },
  {
    title: "NFT Marketplace",
    role: "Game Design Consultant",
    platform: "Web3",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop",
    description: "Web3 маркетплейс с игровыми механиками для трейдинга NFT",
    task: "Спроектировать игровой слой поверх базового функционала маркетплейса",
    result: "Средний LTV пользователя +120%, retention D30: 28%",
  },
];

function FlipCard({ project, delay, isFlipped, onFlip }: { project: typeof otherCases[0]; delay: number; isFlipped: boolean; onFlip: () => void }) {
  return (
    <FadeInSection delay={delay}>
      <div
        className="relative h-[320px] cursor-pointer perspective-1000"
        onClick={onFlip}
      >
        <motion.div
          className="relative w-full h-full"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        >
          {/* Front side */}
          <div
            className="absolute inset-0 backface-hidden overflow-hidden transition-all hover:border-[var(--accent-neon)] hover:shadow-[0_0_20px_rgba(204,255,0,0.3)]"
            style={{
              backfaceVisibility: "hidden",
              border: "1px solid var(--border-default)",
              backgroundColor: "var(--bg-card)",
            }}
          >
            {/* Image */}
            <div className="relative h-40 overflow-hidden">
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--bg-card), transparent)" }} />
              <span
                className="absolute top-3 right-3 px-2.5 py-1 uppercase"
                style={{
                  backgroundColor: "var(--accent-neon)",
                  color: "var(--accent-neon-dark)",
                  fontFamily: "var(--label-font)",
                  fontWeight: "var(--label-weight)",
                  fontSize: "var(--label-size)",
                  letterSpacing: "var(--label-ls)",
                }}
              >
                {project.platform}
              </span>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="mb-2" style={{ color: "var(--text-primary)" }}>
                {project.title}
              </h3>
              <p
                className="mb-3 uppercase"
                style={{
                  fontFamily: "var(--label-font)",
                  fontWeight: "var(--label-weight)",
                  fontSize: "var(--label-size)",
                  letterSpacing: "var(--label-ls)",
                  color: "rgba(204, 255, 0, 0.8)",
                }}
              >
                {project.role}
              </p>
              <p
                className="line-clamp-3"
                style={{
                  fontFamily: "var(--body-font)",
                  fontSize: "var(--secondary-size)",
                  lineHeight: "var(--secondary-lh)",
                  color: "var(--text-tertiary)",
                }}
              >
                {project.description}
              </p>
              <p
                className="mt-4 uppercase"
                style={{
                  fontFamily: "var(--label-font)",
                  fontSize: "var(--label-size)",
                  letterSpacing: "var(--label-ls)",
                  color: "rgba(204, 255, 0, 0.6)",
                }}
              >
                Нажмите для подробностей →
              </p>
            </div>
          </div>

          {/* Back side */}
          <div
            className="absolute inset-0 backface-hidden p-5 flex flex-col justify-between"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              border: "1px solid var(--border-default)",
              backgroundColor: "var(--bg-card)",
            }}
          >
            {/* Top: Title and badge */}
            <div>
              <div className="flex items-start justify-between mb-6">
                <h3 className="flex-1" style={{ color: "var(--text-primary)" }}>
                  {project.title}
                </h3>
                <span
                  className="ml-3 px-2.5 py-1 uppercase whitespace-nowrap"
                  style={{
                    backgroundColor: "var(--accent-neon)",
                    color: "var(--accent-neon-dark)",
                    fontFamily: "var(--label-font)",
                    fontWeight: "var(--label-weight)",
                    fontSize: "var(--label-size)",
                    letterSpacing: "var(--label-ls)",
                  }}
                >
                  {project.platform}
                </span>
              </div>

              <p
                className="mb-6 uppercase"
                style={{
                  fontFamily: "var(--label-font)",
                  fontWeight: "var(--label-weight)",
                  fontSize: "var(--label-size)",
                  letterSpacing: "var(--label-ls)",
                  color: "rgba(204, 255, 0, 0.8)",
                }}
              >
                {project.role}
              </p>

              {/* Task and Result */}
              <div className="space-y-4">
                <div>
                  <p
                    className="mb-1 uppercase"
                    style={{
                      fontFamily: "var(--label-font)",
                      fontWeight: "var(--label-weight)",
                      fontSize: "var(--label-size)",
                      letterSpacing: "var(--label-ls)",
                      color: "var(--accent-neon)",
                    }}
                  >
                    → ЗАДАЧА
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--body-font)",
                      fontSize: "var(--secondary-size)",
                      lineHeight: "var(--secondary-lh)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {project.task}
                  </p>
                </div>

                <div>
                  <p
                    className="mb-1 uppercase"
                    style={{
                      fontFamily: "var(--label-font)",
                      fontWeight: "var(--label-weight)",
                      fontSize: "var(--label-size)",
                      letterSpacing: "var(--label-ls)",
                      color: "var(--accent-neon)",
                    }}
                  >
                    → РЕЗУЛЬТАТ
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--body-font)",
                      fontSize: "var(--secondary-size)",
                      lineHeight: "var(--secondary-lh)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {project.result}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom: Back link */}
            <p
              className="uppercase"
              style={{
                fontFamily: "var(--label-font)",
                fontSize: "var(--label-size)",
                letterSpacing: "var(--label-ls)",
                color: "rgba(204, 255, 0, 0.6)",
              }}
            >
              Нажмите чтобы вернуться ←
            </p>
          </div>
        </motion.div>
      </div>
    </FadeInSection>
  );
}

export function OtherCases() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        <FadeInSection>
          <h2 style={{ color: "var(--text-primary)", marginBottom: "var(--content-gap)" }}>
            ОСТАЛЬНЫЕ КЕЙСЫ
          </h2>
        </FadeInSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: "var(--card-gap)" }}>
          {otherCases.map((project, i) => (
            <FlipCard
              key={i}
              project={project}
              delay={i * 0.08}
              isFlipped={flippedIndex === i}
              onFlip={() => setFlippedIndex(flippedIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}