import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import WolfMain from "../../assets/Wolf_main(1).jpg";
import AlfaImg from "../../assets/Alfa(1).png";
import MotivImg from "../../assets/MOTIV.webp";
import DixyImg from "../../assets/Dixy(1).jpg";
import VrImg from "../../assets/VR.jpg";
import StellarisImg from "../../assets/Tirstellar.png";
import CryptoPunksImg from "../../assets/CP.png";
import UnderdogsImg from "../../assets/underdogs.jpg";

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

type OtherCase = {
  title: string;
  role: string;
  description: string;
  tags: string[];
  platform: string;
  image: string;
  task: string;
  result: string;
  taskLabel?: string;
  resultLabel?: string;
};

const otherCases: OtherCase[] = [
  {
    title: "WOLF",
    role: "PRODUCT DESIGNER",
    description: "Геймифицированный инвестиционный сервис с прогрессией, обучением и системой мотивации",
    tags: ["TMA", "MOBILE", "FINTECH", "GAMIFICATION", "PROGRESSION", "LEARNING"],
    platform: "TMA / MOBILE",
    image: WolfMain,
    task: "Сервис про флиппинг-инвестиции, где финансовый сценарий был переведён в понятный путь пользователя через прогрессию, обучение и систему целей.",
    result: "Отвечал за вижн проекта, математику наград, мета-прогрессию и общую логику движения пользователя к целевому действию.",
  },
  {
    title: "Alfa Bot",
    role: "GAME DESIGNER",
    description: "Игровая реферальная система для партнёрской компании одного из топ-3 банков РФ",
    tags: ["TMA", "BANKING", "REFERRAL", "REWARDS", "PROGRESSION", "META"],
    platform: "TMA",
    image: AlfaImg,
    task: "Приложение для партнёрской компании одного из крупнейших банков РФ, где реферальная система была упакована в игровой сценарий с прогрессией и мотивацией пользователя.",
    result: "Отвечал за вижн, игровую логику, структуру наград, математику, мета-прогрессию и развитие базового игрового цикла.",
  },
  {
    title: "Русская Арматура",
    role: "PRODUCT LEAD",
    description: "Приложение для мотивации сотрудников через игровые механики и систему прогресса",
    tags: ["MOBILE", "B2B", "RETAIL", "MOTIVATION", "GOALS", "PROGRESSION"],
    platform: "MOBILE / B2B",
    image: MotivImg,
    task: "NDA-проект для одного из топ-5 ритейл-холдингов РФ: мобильное B2B-приложение для мотивации сотрудников через игровые механики, цели и прогрессию.",
    result: "Отвечал за вижн, продуктовое видение приложения, кор-цикл, мета-цикл и метрики.",
  },
  {
    title: "DIXY Event",
    role: "PRODUCT MANAGER",
    description: "Геймифицированная промо-механика для крупного ритейла",
    tags: ["MOBILE", "RETAIL", "PROMO", "GAMIFICATION", "SCENARIO", "TESTING"],
    platform: "MOBILE",
    image: DixyImg,
    task: "Мобильная промо-механика для крупной розничной сети, где игровой сценарий использовался как инструмент вовлечения и мотивации аудитории.",
    result: "Отвечал за концепцию механики, пользовательский сценарий, систему мотивации и общую логику проверки идеи в реальной среде.",
  },
  {
    title: "VR Healthcare",
    role: "GAME DESIGNER",
    description: "VR-игра для релакса пациентов в сети клиник ОАЭ",
    tags: ["VR", "HEALTHCARE", "RELAX", "INTERACTIVE", "MINI-GAMES", "UX"],
    platform: "VR",
    image: VrImg,
    task: "VR-игра для сети клиник в ОАЭ, созданная как инструмент релаксации пациентов через спокойный интерактивный опыт и простые игровые сценарии.",
    result: "Отвечал за общий вижн проекта, кор-механики и визуальное направление.",
  },
  {
    title: "Stellaris",
    role: "LEAD GAME DESIGNER",
    description: "Масштабная MMORPG в космическом сеттинге с развитой экономикой",
    tags: ["MMORPG", "ECONOMY", "META", "SYSTEMS", "PVP", "PVE"],
    platform: "PC / MOBILE / WEB",
    image: StellarisImg,
    task: "Масштабная MMORPG в космическом сеттинге с глубокой экономикой, развитием игрока и большим системным слоем.",
    result: "Отвечал за направление геймдизайна в компании, экономику проекта, мета-системы и общение с заказчиками.",
  },
  {
    title: "Крипто Панки",
    role: "GAME DESIGNER",
    description: "Одна из первых успешных крипто-игр в TMA с амбассадорами NFT",
    tags: ["TMA", "CRYPTO", "NFT", "COMMUNITY", "ECONOMY", "LIVE-OPS"],
    platform: "TMA",
    image: CryptoPunksImg,
    task: "Одна из первых заметных крипто-игр в TMA, построенная вокруг комьюнити, NFT-амбассадоров, обновлений и живой игровой экономики.",
    result: "Отвечал за разработку и балансировку обновлений, кейсы и дорожную карту проекта.",
  },
  {
    title: "Underdogs",
    role: "GAME DESIGNER",
    description: "Изометрический тактический MMO-шутер в постапокалиптическом сеттинге США",
    tags: ["PC", "MMO", "SHOOTER", "TACTICAL", "EXTRACTION", "UNITY"],
    platform: "PC",
    image: UnderdogsImg,
    task: "Изометрический тактический MMO-шутер с элементами экстракшена в постапокалиптическом сеттинге США.",
    result: "Отвечал за вижн продукта, разработку кор-геймплея, балансировку ассетов, настройку в Unity и нарративную составляющую.",
  },
];

function FlipCard({ project, delay, isFlipped, onFlip }: { project: OtherCase; delay: number; isFlipped: boolean; onFlip: () => void }) {
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
            className="foil-card absolute inset-0 backface-hidden overflow-hidden transition-all flex flex-col"
            style={{
              backfaceVisibility: "hidden",
              border: "2px solid var(--border-default)",
              backgroundColor: "var(--bg-card)",
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = "var(--accent-neon)"}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = "var(--border-default)"}
          >
            {/* Image */}
            <div className="relative h-48 flex-shrink-0 overflow-hidden">
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              {/* Smooth transition gradient */}
              <div 
                className="absolute inset-0" 
                style={{ 
                  background: "linear-gradient(to bottom, transparent 60%, var(--bg-card) 100%)" 
                }} 
              />
              <span
                className="foil-content absolute top-2 right-2 px-2 py-0.5 uppercase text-[9px]"
                style={{
                  backgroundColor: "var(--accent-neon)",
                  color: "var(--accent-neon-dark)",
                  fontFamily: "var(--label-font)",
                  fontWeight: "var(--label-weight)",
                  letterSpacing: "var(--label-ls)",
                }}
              >
                {project.platform}
              </span>
            </div>

            {/* Content */}
            <div className="foil-content foil-panel p-4 flex flex-col h-full">
              {/* Spacer to push content down */}
              <div className="flex-1" />
              
              {/* Role */}
              <p className="text-[12px] uppercase tracking-wider mb-2" style={{ color: "var(--accent-neon)", fontWeight: 800 }}>
                {project.role}
              </p>
              
              {/* Title */}
              <h3 className="text-lg font-medium mb-1" style={{ color: "var(--text-primary)" }}>
                {project.title}
              </h3>
              
              {/* Description */}
              <p className="text-xs leading-relaxed mb-3" style={{ color: "var(--text-secondary)" }}>
                {project.description}
              </p>

              {/* Arrow at bottom */}
              <div className="flex justify-end">
                <span
                  style={{
                    fontSize: "24px",
                    color: "var(--accent-neon)",
                    fontWeight: "900",
                    lineHeight: "1"
                  }}
                >
                  ↓
                </span>
              </div>
            </div>
          </div>

          {/* Back side */}
          <div
            className="absolute inset-0 backface-hidden overflow-hidden flex flex-col"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              border: "2px solid var(--border-default)",
              backgroundColor: "var(--bg-card)",
            }}
          >
            {/* Top: Task and Result */}
            <div className="p-4 flex-1">
              <div className="mb-3">
                <p
                  className="mb-2 uppercase text-[10px]"
                  style={{
                    fontFamily: "var(--label-font)",
                    fontWeight: "var(--label-weight)",
                    fontSize: "var(--label-size)",
                    letterSpacing: "var(--label-ls)",
                    color: "var(--accent-neon)",
                  }}
                >
                  {project.taskLabel ?? "→ ОПИСАНИЕ"}
                </p>
                <p
                  className="text-[11px]"
                  style={{
                    fontFamily: "var(--body-font)",
                    lineHeight: "1.45",
                    color: "var(--text-secondary)",
                  }}
                >
                  {project.task}
                </p>
              </div>

              <div className="mb-3">
                <p
                  className="mb-2 uppercase text-[10px]"
                  style={{
                    fontFamily: "var(--label-font)",
                    fontWeight: "var(--label-weight)",
                    fontSize: "var(--label-size)",
                    letterSpacing: "var(--label-ls)",
                    color: "var(--accent-neon)",
                  }}
                >
                  {project.resultLabel ?? "→ РОЛЬ"}
                </p>
                <p
                  className="text-[11px]"
                  style={{
                    fontFamily: "var(--body-font)",
                    lineHeight: "1.45",
                    color: "var(--text-secondary)",
                  }}
                >
                  {project.result}
                </p>
              </div>
            </div>

            {/* Bottom: Tags and Back link */}
            <div className="p-4 flex-shrink-0">
              <div className="mb-3">
                <p
                  className="mb-2 uppercase text-[10px]"
                  style={{
                    fontFamily: "var(--label-font)",
                    fontWeight: "var(--label-weight)",
                    fontSize: "var(--label-size)",
                    letterSpacing: "var(--label-ls)",
                    color: "var(--accent-neon)",
                  }}
                >
                  → ТЕГИ
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-1.5 py-0.5 text-[8px] uppercase tracking-widest bg-white/5"
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
              </div>
              {/* Back link */}
              <div className="flex justify-start">
                <span
                  style={{
                    fontSize: "24px",
                    color: "var(--accent-neon)",
                    fontWeight: "900",
                    lineHeight: "1"
                  }}
                >
                  ↑
                </span>
              </div>
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
          <h2 className="screen-title" style={{ color: "var(--text-primary)", marginBottom: "var(--content-gap)" }}>
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
