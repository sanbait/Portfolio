import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { X, TrendingUp, Users, Clock, Target, ChevronRight, Award } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CaseModal } from "./CaseModal";
import minerKombatImg from "figma:asset/cf4bedc31e2bbc4ce499df1bc4ca6f55a0f195f6.png";

const STAR_RISER = "https://images.unsplash.com/photo-1586763749650-70d7996310d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBnYW1lJTIwTElORSUyMG1lc3NlbmdlciUyMHRlbGVncmFtJTIwc29jaWFsfGVufDF8fHx8MTc3NTE2MDIxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const CORNER_SPACE = "https://images.unsplash.com/photo-1744113749099-4b7d3c26f8ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMGdhbWUlMjBzdHJhdGVneSUyMHJvZ3VlbGlrZSUyMHNjaS1maXxlbnwxfHx8fDE3NzUxNjAyMDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const WOLF = "https://images.unsplash.com/photo-1770223859882-636aa52f7612?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb25hbCUyMGdhbWlmaWNhdGlvbiUyMHdvbGYlMjBjYXJlZXIlMjBwcm9ncmVzc2lvbnxlbnwxfHx8fDE3NzUxNjAyMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

// Additional preview images
const PREVIEW_INTERFACE = "https://images.unsplash.com/photo-1587573089734-09cb69c0f2b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBnYW1lJTIwdGVsZWdyYW0lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzc1MTc2ODU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const PREVIEW_SPACE = "https://images.unsplash.com/photo-1633415560376-7068469d9d03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMHN0cmF0ZWd5JTIwZ2FtZSUyMHJvZ3VlbGlrZXxlbnwxfHx8fDE3NzUxNzY4NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const PREVIEW_ECONOMY = "https://images.unsplash.com/photo-1544819679-57b273c027a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1lJTIwZWNvbm9teSUyMHN5c3RlbSUyMGNoYXJ0fGVufDF8fHx8MTc3NTE3Njg1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const PREVIEW_PROGRESSION = "https://images.unsplash.com/photo-1573868056472-22834cad367c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1lJTIwZGVzaWduJTIwcHJvZ3Jlc3Npb24lMjBkaWFncmFtfGVufDF8fHx8MTc3NTE3Njg2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

interface CaseStudy {
  id: number;
  tag: string;
  tagColor: string;
  title: string;
  subtitle: string;
  image: string;
  accent: string;
  accentBg: string;
  metrics: { icon: React.ReactNode; value: string; label: string }[];
  // Structured data
  role?: string;
  platform?: string;
  stage?: string;
  genre?: string;
  status?: string;
  focus?: string;
  result?: string;
  about?: string;
  situation?: string;
  task?: string;
  actions?: string[];
  myRole?: string[];
  whatIDid?: {
    gameLoop?: string[];
    economy?: string[];
    progression?: string[];
    monetization?: string[];
    social?: string[];
    retention?: string[];
    testing?: string[];
  };
  outcome?: string[];
  mechanics?: string[];
  facts?: string[];
  materials?: string[];
  previewImages?: string[];
  // Legacy
  challenge?: string;
  solution?: string;
  duration: string;
  team: string;
}

const cases: CaseStudy[] = [
  {
    id: 1,
    tag: "Telegram Mini App",
    tagColor: "text-cyan-300 bg-cyan-500/15 border-cyan-500/30",
    title: "Miner Kombat — TMA-продукт с игровой экономикой",
    subtitle: "Продуктовая переработка второй версии: игровой цикл, экономика, прогрессия, монетизация и реферальная система.",
    image: minerKombatImg,
    accent: "from-cyan-600 to-cyan-400",
    accentBg: "border-cyan-500/20",
    metrics: [
      { icon: <Award size={14} />, value: "Ведущий геймдизайнер", label: "Роль" },
      { icon: <Target size={14} />, value: "Telegram Mini App", label: "Платформа" },
      { icon: <Clock size={14} />, value: "3 месяца", label: "Срок" },
      { icon: <Users size={14} />, value: "4 человека", label: "Команда" },
    ],
    role: "Product Lead / Game Producer",
    platform: "Telegram Mini App",
    stage: "Релизная версия",
    focus: "Экономика, прогрессия, монетизация",
    result: "Рабочая релизная версия",
    about:
      "TMA-проект с прогрессией, экономикой и социальными механиками. Первая версия показала органический интерес, но упёрлась в системные ограничения. Моя задача — пересобрать продуктовую основу второй версии с прочным игровым циклом, монетизацией и реферальным контуром.",
    situation:
      "Первая версия дала сильный ранний сигнал, но базовая архитектура не позволяла масштабироваться. Слабая связность систем, недостаточный контур удержания, нет основы для продуктовой проверки решений.",
    task:
      "Провести продуктовый пивот: пересобрать игровой цикл, экономику, прогрессию и монетизацию. Собрать живую систему для проверки на реальной аудитории.",
    myRole: [
      "Ответственность за продуктовую основу второй версии: игровой цикл, экономику и прогрессию",
      "Проектирование монетизационного контура и реферальной системы",
      "Принятие ключевых решений по балансу и системам удержания",
      "Проверка продуктовых гипотез на ограниченном трафике",
    ],
    whatIDid: {
      gameLoop: [
        "Переработал core loop: добавил возвратные механики и систему наград",
        "Выстроил прогрессию с чёткими точками прогресса и визуальными маркерами",
        "Интегрировал аналитику для отслеживания прохождения и вовлечения",
      ],
      economy: [
        "Спроектировал многовалютную систему с balance sink и source",
        "Выстроил контур внутриигровых покупок и бустеров",
        "Собрал экономическую модель для прогнозирования метрик",
      ],
      monetization: [
        "Разработал магазин с тестированием разных вариантов предложений",
        "Интегрировал IAP и систему платных улучшений",
        "Запустил A/B-тесты по ценообразованию и наполнению офферов",
      ],
      social: [
        "Переработал реферальную систему: привязка не к инвайтам, а к активности приглашённых",
        "Добавил социальные награды за совместный прогресс",
        "Интегрировал таблицы лидеров и клановые механики",
      ],
      retention: [
        "Настроил daily/weekly контур с наградами за возврат",
        "Добавил push-уведомления с триггерами на события в игре",
        "Запустил механики limited-time events для повышения активности",
      ],
      testing: [
        "Сравнивали варианты магазина, наград и вовлекающих механик",
        "Тестировали разные версии реферального контура",
        "Проверяли гипотезы на ограниченном трафике перед масштабированием",
      ],
    },
    outcome: [
      "Проект доведён до рабочей релизной версии и переведён в формат живой проверки на аудитории",
      "Средняя частота сессий: ~5 сессий на игрока в день — сигнал о вовлечённости базового цикла",
      "Вторая версия получила прочную продуктовую основу для масштабирования и дальнейшего развития",
    ],
    mechanics: ["Игровой цикл", "Экономика", "Прогрессия", "Монетизация", "Реферальная система", "Внутренняя валюта", "Тесты гипотез", "Удержание"],
    facts: [
      "Проект был доведен до рабочей релизной версии и переведен в формат живой проверки на аудитории. Это позволило получить ранние сигналы по вовлеченности, монетизации и жизнеспособности базового цикла.",
      "Средняя частота доходила примерно до 5 сессий на игрока в день, а сама вторая версия уже стала значительно более пригодной для продуктового развития, чем исходная база первой итерации.",
    ],
    duration: "3 месяца",
    team: "4 человека",
    status: "Заморожен инвестором",
  },
  {
    id: 2,
    tag: "TMA / LINE",
    tagColor: "text-purple-300 bg-purple-500/15 border-purple-500/30",
    title: "Star Riser — аудит живого продукта и адаптация под LINE",
    subtitle: "Продуктовый аудит, пересборка контура развития и вывод 3D-игры на новую платформу.",
    image: STAR_RISER,
    accent: "from-purple-600 to-cyan-400",
    accentBg: "border-purple-500/20",
    metrics: [
      { icon: <Award size={14} />, value: "Продуктовый и геймдизайн-аудит", label: "Роль" },
      { icon: <Target size={14} />, value: "Telegram / LINE", label: "Платформы" },
      { icon: <Clock size={14} />, value: "2 месяца", label: "Срок" },
      { icon: <Users size={14} />, value: "6 человек", label: "Команда" },
    ],
    role: "Product & Game Design Auditor",
    platform: "Telegram Mini App → LINE",
    stage: "Живой продукт + адаптация",
    focus: "Аудит систем, прогрессия, платформа",
    result: "Выход на LINE с обновлённым контуром",
    about:
      "Star Riser — 3D-игра с элементами стратегии и прогрессии, которая уже работала в Telegram Mini Apps и показывала активность аудитории. Проект готовился к выходу на платформу LINE, но команде нужна была внешняя экспертиза: понять, что в текущей версии работает, что тормозит удержание, и как адаптировать продукт под новую платформу без потери основных механик.",
    situation:
      "Продукт уже был запущен в Telegram и имел живую аудиторию, но команда видела проблемы с удержанием и не до конца понимала, какие части игрового цикла работают слабо. Одновременно стояла задача адаптации под LINE — платформу с другими техническими ограничениями и поведенческими паттернами аудитории.",
    task:
      "Моя задача была провести полный продуктовый и геймдизайн-аудит: проанализировать текущую версию игры, выявить слабые места в прогрессии и удержании, предложить конкретные изменения для улучшения игрового цикла и подготовить рекомендации по адаптации продукта под LINE с учётом особенностей платформы.",
    actions: [
      "Провёл детальный аудит всех игровых систем: прогрессии, экономики, социальных механик и контура удержания.",
      "Выявил узкие места в балансе и игровом цикле, которые снижали возвращаемость игроков.",
      "Подготовил документ с приоритизированными рекомендациями по доработке систем.",
      "Отдельно проработал адаптацию под LINE: техническую интеграцию, изменения в UI/UX под особенности платформы, корректировку социальных механик и реферального контура с учётом поведения аудитории LINE.",
    ],
    mechanics: ["Аудит систем", "Прогрессия", "Адаптация платформы", "3D-контент", "Социальные механики"],
    facts: ["Команда получила детальный план доработки продукта с приоритетами и конкретными шагами.", "Обновлённая версия Star Riser успешно вышла на платформу LINE с переработанным контуром прогрессии и адаптированными под новую аудиторю механиками.", "Проект продолжил развитие на двух платформах одновременно."],
    duration: "2 месяца",
    team: "Консультант, команда 6 человек",
  },
  {
    id: 3,
    tag: "PC / Mobile",
    tagColor: "text-yellow-300 bg-yellow-500/15 border-yellow-500/30",
    title: "Corner of Space — F2P roguelike-стратегия от рамки до релиза",
    subtitle: "Вижн, геймдизайн и удержание проекта в рабочих границах до выхода на рынок.",
    image: CORNER_SPACE,
    accent: "from-yellow-500 to-orange-400",
    accentBg: "border-yellow-500/20",
    metrics: [
      { icon: <Award size={14} />, value: "Ведущий геймдизайнер", label: "Роль" },
      { icon: <Target size={14} />, value: "PC / Mobile", label: "Платформы" },
      { icon: <Clock size={14} />, value: "12 месяце��", label: "Срок" },
      { icon: <Users size={14} />, value: "8 человек", label: "Команда" },
    ],
    role: "Lead Game Designer",
    platform: "PC / Mobile (кросс-платформа)",
    stage: "От концепта до релиза",
    focus: "Roguelike-системы, F2P-модель, скоуп",
    result: "Релиз игры на PC и Mobile",
    about:
      "Corner of Space — тактическая roguelike-стратегия с элементами deck-building и F2P-монетизацией, которая разрабатывалась для одновременного выхода на PC и мобильных платформах. Проект стартовал с высокоуровневой концепции, но без чёткого геймдизайн-вижна и понимания границ. Моя роль была в том, чтобы выстроить игровую основу, удержать команду в рабочих рамках и довести продукт до финальной версии.",
    situation:
      "Проект начинался с амбициозной идеи, но без детальной проработки игровых систем и реалистичного понимания объёма работы. Команда была небольшая, сроки сжатые, а риск feature creep и размывания фокуса — высокий. Нужно было не просто собрать игру, а выстроить работающую основу и не уйти в бесконечную доработку фич.",
    task:
      "Моей задачей было создать цельный геймдизайн-вижн для roguelike-стратегии, спроектировать core loop, прогрессию и F2P-экономику, выстроить приоритеты фич и удержать проект в рабочих границах. Важно было не дать команде распылиться на второстепенные механики и довести игру до состояния, которое можно выпустить на рынок.",
    actions: [
      "Выстроил основу игрового цикла: тактические бои, deck-building механику, мета-прогрессию и систему улучшений.",
      "Спроектировал F2P-экономику с балансом между бесплатной прогрессией и монетизационными точками.",
      "Вместе с командой мы постоянно приоритизировали фичи, вырезали лишнее и фокусировались на том, что действительно важно для релиза.",
      "Собрал внутреннюю документацию по балансу, прогрессии и контенту.",
      "Проводил регулярные плейтесты и корректировал систему на основе обратной связи команды и тестовой аудитории.",
    ],
    mechanics: ["Roguelike-системы", "F2P-экономика", "Прогрессия", "Тактический геймплей", "Монетизация", "Deck-building", "Баланс"],
    facts: ["Проект был доведён до релиза на PC и Mobile. Игра получила рабочую roguelike-основу, сбалансированную экономику и контур монетизации.", "Удалось удержать команду в рамках реалистичного скоупа и выпустить продукт в запланированные сроки, не потеряв core vision проекта."],
    duration: "12 месяцев",
    team: "Команда 8 человек",
  },
  {
    id: 4,
    tag: "TMA / Mobile",
    tagColor: "text-pink-300 bg-pink-500/15 border-pink-500/30",
    title: "WOLF — геймификация сложной темы через карьерную прогрессию",
    subtitle: "Новый игровой цикл, обучение через прогресс и доведение продукта до MVP.",
    image: WOLF,
    accent: "from-pink-600 to-purple-500",
    accentBg: "border-pink-500/20",
    metrics: [
      { icon: <Award size={14} />, value: "Ведущий геймдизайнер / менеджер продукта", label: "Роль" },
      { icon: <Target size={14} />, value: "TMA / Mobile", label: "Формат" },
      { icon: <Clock size={14} />, value: "4 месяца", label: "Срок" },
      { icon: <Users size={14} />, value: "5 человек", label: "Команда" },
    ],
    role: "Lead Game Designer / Product Manager",
    platform: "Telegram Mini App / Mobile",
    stage: "Концепт → MVP",
    focus: "Геймификация обучения, прогрессия",
    result: "Рабочий MVP с игровым циклом",
    about:
      "WOLF — образовательный продукт с игровой оболочкой, который помогает пользователям изучать сложную профессиональную тему через систему карьерной прогрессии. Проект стартовал с общей идеи геймификации, но без чёткого понимания игрового цикла и того, как встроить обучение в прогрессию так, чтобы это не превратилось в набор разрозненных квизов.",
    situation:
      "Команда хотела создать образовательный продукт с геймификацией, но первые наброски были ближе к обычному курсу с баллами и бейджами. Не хватало цельного игрового цикла, который бы органично связывал обучение, прогрессию и мотивацию пользователя продолжать. Аудитория — профессионалы, для которых важна не игра ради игры, а ощущение реального развития.",
    task:
      "Моя задача была спроектировать игровой цикл, который превратит обучение в часть прогрессии, а не отдельную механику. Создать систему карьерного роста внутри продукта, где каждый шаг обучения даёт ощутимый результат в игровом контексте. Довести продукт от концепта до рабочего MVP, который можно тестировать на реальной аудитории.",
    actions: [
      "Спроектировал систему карьерной прогрессии, где обучение встроено в игровой цикл: пользователь проходит обучающие блоки, получает навыки, открывает новые уровни карьеры и видимые результаты своего развития.",
      "Вместо абстрактных баллов создал понятную структуру роста с визуальными маркерами прогресса.",
      "Вместе с командой мы за 4 месяца собрали MVP: базовый игровой цикл, контент-систему, механику прогрессии и первый набор обучающих материалов.",
      "Выстроили продуктовые приоритеты и сфокусировались на проверке главной гипотезы: работает ли связка обучения и прогрессии для целевой аудитории.",
    ],
    mechanics: ["Карьерная прогрессия", "Геймификация обучения", "Игровой цикл", "Контент-система", "Визуальный прогресс"],
    facts: ["Проект был доведён до рабочего MVP с игровым циклом и системой карьерной прогрессии. Продукт получил базу для дальнейшего развития и тестирования на аудитории.", "Геймификация перестала быть косметическим слоем и стала частью основного контура обучения."],
    duration: "4 месяца",
    team: "Команда 5 человек",
  },
];

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

export function CaseStudies() {
  const [selected, setSelected] = useState<CaseStudy | null>(null);

  return (
    <section id="cases" className="py-24 px-6" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        {/* Section header */}
        <FadeInSection>
          <h2 style={{ color: "var(--text-primary)", marginBottom: "var(--content-gap)" }}>
            КЕЙСЫ
          </h2>
        </FadeInSection>

        {/* Grid layout: 2 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "var(--card-gap)" }}>
          {cases.map((c, i) => (
            <FadeInSection key={c.id} delay={i * 0.08}>
              <motion.button
                onClick={() => setSelected(c)}
                whileHover={{ borderColor: "var(--accent-neon)" }}
                transition={{ duration: 0.2 }}
                className="w-full text-left group relative overflow-hidden"
                style={{
                  backgroundColor: "var(--bg-card)",
                  border: "2px solid var(--border-default)",
                }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={c.image}
                    alt={c.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to top, var(--bg-card), rgba(20, 20, 20, 0.6), transparent)",
                    }}
                  />

                  {/* Neon tag - top right */}
                  <span
                    className="absolute top-4 right-4 px-3 py-1.5 uppercase"
                    style={{
                      backgroundColor: "var(--accent-neon)",
                      color: "var(--accent-neon-dark)",
                      fontFamily: "var(--label-font)",
                      fontWeight: "var(--label-weight)",
                      fontSize: "var(--label-size)",
                      letterSpacing: "var(--label-ls)",
                    }}
                  >
                    {c.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className="mb-3 transition-colors group-hover:text-[#CCFF00]"
                    style={{
                      color: "var(--text-primary)",
                    }}
                  >
                    {c.title}
                  </h3>

                  <div className="mb-4 p-3" style={{ backgroundColor: "rgba(204, 255, 0, 0.05)", border: "1px solid rgba(204, 255, 0, 0.1)" }}>
                    <p
                      className="line-clamp-2"
                      style={{
                        fontFamily: "var(--body-font)",
                        fontSize: "var(--secondary-size)",
                        lineHeight: "var(--secondary-lh)",
                        color: "var(--text-primary)",
                      }}
                    >
                      {c.subtitle}
                    </p>
                  </div>

                  {/* Mini info */}
                  <div
                    className="flex items-center gap-4"
                    style={{
                      fontFamily: "var(--label-font)",
                      fontSize: "var(--label-size)",
                      letterSpacing: "var(--label-ls)",
                      color: "var(--text-tertiary)",
                      textTransform: "uppercase",
                    }}
                  >
                    <span>{c.duration}</span>
                    <span>•</span>
                    <span>{c.team}</span>
                  </div>
                </div>
              </motion.button>
            </FadeInSection>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && <CaseModal c={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}