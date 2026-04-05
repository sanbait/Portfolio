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
    genre: "Social MMO / Extraction",
    description: "Социальная мобильная игра с упором на создание контента и взаимодействие между игроками",
    tags: ["Economy", "Social", "Web3", "MMO", "Tokenomics"],
    platform: "Mobile F2P",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
    task: "Спроектировать экономику, социальные механики и систему прогрессии для долгосрочного удержания",
    result: "Retention D7: 32%, монетизация выше планового на 18%",
  },
  {
    title: "Alpha Bot",
    role: "Product Designer",
    genre: "Fintech Gamification",
    description: "Telegram-бот с элементами геймификации для финтех-платформы",
    tags: ["TMA", "Virality", "Retention", "Fintech", "UX"],
    platform: "Telegram Mini App",
    image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=400&h=300&fit=crop",
    task: "Создать геймифицированный опыт для fintech-продукта с focus на retention и virality",
    result: "CAC снижен на 40%, органический трафик +65%",
  },
  {
    title: "Gratio",
    role: "Product Consultant",
    genre: "Edutainment / SaaS",
    description: "Корпоративная платформа для управления обучением и развитием сотрудников",
    tags: ["Engagement", "Audit", "Corporate", "HR Tech", "LMS"],
    platform: "Enterprise SaaS",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop",
    task: "Провести аудит продукта и внедрить игровые механики для повышения engagement",
    result: "Активность пользователей +52%, NPS вырос с 6.2 до 8.1",
  },
  {
    title: "Lootbox Reform",
    role: "Economy Designer",
    genre: "Live Ops / Monetization",
    description: "Редизайн монетизации для существующей игры с переходом на ethical F2P модель",
    tags: ["Ethical F2P", "Rework", "Compliance", "Revenue", "Lootbox"],
    platform: "PC / Mobile",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
    task: "Перестроить экономику и lootbox-систему под новые требования регуляторов",
    result: "Revenue удержан на уровне 95%, негативные отзывы снизились на 60%",
  },
  {
    title: "NFT Marketplace",
    role: "Game Design Consultant",
    genre: "Web3 Ecosystem",
    description: "Web3 маркетплейс с игровыми механиками для трейдинга NFT",
    tags: ["Trading", "Gamification", "LTV", "Web3", "Marketplace"],
    platform: "Web3",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop",
    task: "Спроектировать игровой слой поверх базового функционала маркетплейса",
    result: "Средний LTV пользователя +120%, retention D30: 28%",
  },
  {
    title: "Cyber Arena",
    role: "Lead Designer",
    genre: "Battler / PvP",
    description: "Киберспортивная арена с упором на соревновательный баланс и турниры",
    tags: ["Combat", "Balancing", "eSports", "PvP", "Matchmaking"],
    platform: "PC",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
    task: "Сбалансировать PvP-систему и спроектировать турнирную сетку",
    result: "MAU +45%, среднее время сессии выросло на 20%",
  },
  {
    title: "EduQuest",
    role: "Game Architect",
    genre: "Mobile Education",
    description: "Образовательная платформа с RPG-механиками для повышения вовлеченности",
    tags: ["Learning", "Quests", "RPG", "Kids", "Mobile"],
    platform: "Mobile",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
    task: "Создать RPG-надстройку над образовательным контентом для детей",
    result: "Completion rate курсов вырос на 75%",
  },
  {
    title: "Crypto Farm",
    role: "Economy Lead",
    genre: "Idle / Web3",
    description: "Децентрализованная ферма с элементами добычи и стейкинга активов",
    tags: ["Tokenomics", "Staking", "Mining", "Idle", "Blockchain"],
    platform: "Web3 / TMA",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop",
    task: "Разработать устойчивую токеномику для децентрализованной фермы",
    result: "ТВЛ вырос в 3 раза за первый месяц без гиперинфляции",
  },
];

function FlipCard({ project, delay, isFlipped, onFlip }: { project: typeof otherCases[0]; delay: number; isFlipped: boolean; onFlip: () => void }) {
  return (
    <FadeInSection delay={delay}>
      <div
        className="relative h-[420px] cursor-pointer perspective-1000"
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
            className="absolute inset-0 backface-hidden overflow-hidden transition-all"
            style={{
              backfaceVisibility: "hidden",
              border: "1px solid var(--border-default)",
              backgroundColor: "var(--bg-card)",
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = "var(--accent-neon)"}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = "var(--border-default)"}
          >
            {/* Image */}
            <div className="relative h-36 overflow-hidden">
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

            {/* Content - fixed layout */}
            <div className="p-5 flex flex-col" style={{ height: "calc(100% - 144px)" }}>
              {/* Title - fixed height */}
              <h3 className="mb-2 h-[28px] flex items-center" style={{ color: "var(--text-primary)" }}>
                {project.title}
              </h3>
              
              {/* Description - fixed height with clamp */}
              <p
                className="line-clamp-2 mb-3 h-[36px]"
                style={{
                  fontFamily: "var(--body-font)",
                  fontSize: "12px",
                  lineHeight: "1.4",
                  color: "var(--text-tertiary)",
                }}
              >
                {project.description}
              </p>

              {/* Tags - fixed height */}
              <div className="flex flex-wrap gap-1.5 mb-3 h-[22px] overflow-hidden">
                {project.tags.slice(0, 4).map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 text-[9px] uppercase tracking-widest bg-white/5"
                    style={{
                      border: "1px solid rgba(204, 255, 0, 0.3)",
                      color: "var(--accent-neon)",
                      borderRadius: "2px"
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Role/Genre - fixed height */}
              <div className="space-y-1.5 mb-3 text-[11px] uppercase tracking-wider font-mono h-[42px]">
                <div className="flex justify-between">
                  <span style={{ color: "var(--text-secondary)" }}>Роль:</span>
                  <span style={{ color: "var(--text-primary)" }} className="text-right truncate ml-2">{project.role}</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: "var(--text-secondary)" }}>Жанр:</span>
                  <span style={{ color: "var(--text-primary)" }} className="text-right truncate ml-2">{project.genre}</span>
                </div>
              </div>

              {/* Arrow - always at bottom */}
              <div className="flex justify-end mt-auto">
                <span
                  style={{
                    fontSize: "24px",
                    color: "var(--accent-neon)",
                    fontWeight: "900"
                  }}
                >
                  →
                </span>
              </div>
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
            {/* Top: Task and Result */}
            <div className="space-y-6">
              <div>
                <p
                  className="mb-2 uppercase"
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
                  className="mb-2 uppercase"
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

            {/* Bottom: Back link */}
            <div className="flex justify-start">
              <span 
                style={{ 
                  fontSize: "24px", 
                  color: "var(--accent-neon)",
                  fontWeight: "900" 
                }}
              >
                ←
              </span>
            </div>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: "var(--card-gap)" }}>
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