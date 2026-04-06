import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { X, TrendingUp, Users, Clock, Target, ChevronRight, Award, Apple, Smartphone, Globe, Send, MessageCircle, Monitor } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CaseModal } from "./CaseModal";
import minerKombatImg from "../../assets/MK_main.png";
import mkPreview1 from "../../assets/MK_1.webp";
import mkPreview2 from "../../assets/MK_2.webp";
import starRiserImg from "../../assets/SR_main.png";
import srPreview1 from "../../assets/SR_1.jpg";
import srPreview2 from "../../assets/SR_2.png";
import srPreview3 from "../../assets/SR-3.png";
import cosPreview1 from "../../assets/CoS1.jpg";
import cosPreview2 from "../../assets/CoS2.jpg";
import cosPreview3 from "../../assets/CoS3.jpg";
import mtMainImg from "../../assets/Meta main.jpg";
import mtPreview1 from "../../assets/meta1.webp";
import mtPreview2 from "../../assets/meta3.avif";
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
  // Passport fields (right side in modal)
  role?: string;
  company?: string;
  platforms?: string;
  team?: string;
  deadline?: string;
  link?: string;
  // New Passport fields
  categories?: string[];
  genre?: string;
  status?: string;
  monetization?: string;
  availableOn?: ("apple" | "android" | "web" | "telegram" | "line" | "pc")[];
  developer?: string;
  // Legacy passport fields for backward compatibility
  platform?: string;
  stage?: string;
  projectLink?: string;
  focus?: string;
  result?: string;
  // Content sections
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
  videoUrl?: string;
  // Legacy
  challenge?: string;
  solution?: string;
  duration?: string;
}

const cases: CaseStudy[] = [
  {
    id: 1,
    tag: "Telegram Mini App",
    tagColor: "text-cyan-300 bg-cyan-500/15 border-cyan-500/30",
    title: "Miner Kombat - пересборка игрового цикла, экономики и удержания",
    subtitle: "Telegram Mini App с игровой экономикой, прогрессией и монетизацией",
    image: minerKombatImg,
    accent: "from-cyan-600 to-cyan-400",
    accentBg: "border-cyan-500/20",
    metrics: [
      { icon: <Award size={14} />, value: "Lead Game Designer / Product Lead", label: "Роль" },
      { icon: <Target size={14} />, value: "TMA", label: "Платформы" },
      { icon: <Clock size={14} />, value: "3,5 месяца", label: "Срок" },
      { icon: <Users size={14} />, value: "4 человека", label: "Команда" },
    ],
    // Passport fields (right side in modal)
    role: "Lead Game Designer / Product Lead",
    company: "MK",
    platforms: "TMA",
    team: "4 человека",
    deadline: "3,5 месяца",
    link: "@MinerKombat2bot",
    // New Passport fields
    categories: ["Mobile", "TMA", "P2E"],
    genre: "P2E мидкорный кликер + айдлер",
    status: "In Development",
    monetization: "F2P / IAP / подписка",
    availableOn: ["telegram"],
    developer: "Prom x HWC Studio",
    // Legacy fields for backward compatibility
    platform: "Telegram Mini App",
    stage: "Релизная версия",
    focus: "Экономика, прогрессия, монетизация",
    result: "Рабочая релизная версия",
    about:
      "Miner Kombat - мидкорная idle-игра в формате Telegram Mini App. Проект строится вокруг добычи ресурсов, мета-прогрессии и социального взаимодействия.",
    situation:
      "Первая версия игры привлекла 100k+ органики, но исходная структура продукта ограничивала дальнейший рост. В игре не хватало длинной прогрессии, устойчивых циклов возврата и рабочей экономики, которая поддерживала бы удержание и ценность платных предложений. Задача состояла в том, чтобы за 3,5 месяца провести второй пивот и полностью пересобрать V2.0: игровой цикл, экономику, социальные механики и системы удержания.",
    actions: [
      "Пересборка игрового цикла и прогрессии: спроектировал новую структуру развития и темп прогресса, чтобы убрать раннюю стагнацию и растянуть интерес на длинную дистанцию.",
      "Экономика и баланс: разработал модель дефицита ресурсов, структуру наград и ценность платных предложений.",
      "Социальные и реферальные механики: разработал реферальную систему, в которой награда зависит от игровой активности приглашённых пользователей. Социальный слой стал частью удерживающего контура.",
      "Механики возврата: спроектировал событийную сетку, офлайн-накопление ресурсов и возвратные стимулы, адаптированные под паттерны использования Telegram.",
      "Калибровка систем по данным: использовал опыт эксплуатации первой версии, чтобы точечно настроить математику V2.0 и отсечь слабых гипотезы.",
    ],
    outcome: [
      "После пивота проект получил новую системную основу с более устойчивой прогрессией, рабочей экономикой и более сильной ценностью для платящего игрока.",
      "Stickiness Rate (DAU/MAU) - ~47,4%",
      "ARPPU - $25,80",
      "Sessions per Day - ~5",
      "Срок второго пивота - 3,5 месяца",
      "Этот кейс показывает мою сильную сторону как Lead Game Designer: я умею пересобирать игру на уровне системного фундамента - цикла, прогрессии, экономики и удержания - и превращать опыт эксплуатации в новую рабочую модель с измеримым результатом.",
    ],
    previewImages: [minerKombatImg, mkPreview1, mkPreview2],
  },
  {
    id: 2,
    tag: "TMA / LINE",
    tagColor: "text-purple-300 bg-purple-500/15 border-purple-500/30",
    title: "STAR RISER: АУДИТ ПРОДУКТА И АДАПТАЦИЯ ПОД LINE",
    subtitle: "Аудит живого продукта и адаптация под новую платформу",
    image: starRiserImg,
    accent: "from-purple-600 to-cyan-400",
    accentBg: "border-purple-500/20",
    metrics: [
      { icon: <Award size={14} />, value: "Product / Game Design Consultant", label: "Роль" },
      { icon: <Target size={14} />, value: "TMA / LINE", label: "Платформы" },
      { icon: <Clock size={14} />, value: "2 месяца", label: "Срок" },
      { icon: <Users size={14} />, value: "6 человек", label: "Команда" },
    ],
    // Passport fields (right side in modal)
    role: "Senior Game Designer",
    company: "Star Riser",
    platforms: "TMA / LINE",
    team: "6 человек",
    deadline: "2 месяца",
    link: "по запросу",
    // New Passport fields
    categories: ["Mobile", "TMA", "P2E"],
    genre: "Archero-like / 3D P2E",
    status: "Live",
    monetization: "T2E / F2P",
    availableOn: ["telegram", "line"],
    developer: "Star Riser Team",
    // Legacy fields for backward compatibility
    platform: "TMA / LINE",
    stage: "Живой продукт + адаптация",
    focus: "Аудит продукта, адаптация под LINE",
    result: "Выход на LINE с обновлённым контуром",
    about:
      "Star Riser — это трехмерный боевик в стиле Archero для мессенджеров. На момент моего входа проект обладал широким охватом аудитории, но имел критически низкие показатели доходности.",
    situation:
      "При внешне стабильных игровых метриках (удержание, время сессии) бизнес-показатели были близки к нулю: игроки не совершали покупки и не взаимодействовали с рекламой. Моя задача: провести аудит, найти реальную причину отсутствия прибыли и подготовить продукт к запуску на платформе LINE.",
    actions: [
      "Провел поведенческий анализ аудитории: Выявил массовую накрутку трафика. Обнаружил, что большая часть пользователей имитирует игровую активность, но полностью игнорирует точки монетизации.",
      "Пересобрал мета-игру (систему прогрессии): Устранил разрывы в развитии персонажа, которые делали покупки бессмысленными для реальных игроков.",
      "Оптимизировал систему монетизации: Перенастроил баланс наград и точки продажи контента, убрав барьеры («точки трения»), мешавшие пользователям совершать платежи.",
      "Очистил воронку данных: Отсек закупку некачественного трафика, что позволило команде сфокусироваться на нуждах реальной платящей аудитории.",
      "Адаптировал продукт под LINE: Переработал систему долгосрочного удержания и монетизации с учетом специфики азиатского рынка.",
    ],
    outcome: [
      "Проект перешел от имитации успеха к реальной доходности. Очистка аудитории и полная переработка мета-игры позволили продукту стать прибыльным и успешно конкурировать на международном рынке.",
      "Рост ARPU — с $0,13 до $1",
      "Эффективность: $150 000 сохраненного бюджета — выявление накрутки остановило слив средств",
      "Рыночный успех: 86-е место в мировом рейтинге LINE — вхождение в Топ-100 глобальной платформы",
      "LTV вырос со $0,28 до $3,37 — выстроена прогнозируемая бизнес-модель развития проекта",
      "Сильный геймдизайн невозможен без честных данных. Если игровые метрики в порядке, а бизнес-метрики на нуле — ищи ботов. Геймдизайнер должен сначала очистить фундамент и починить мета-игру, чтобы каждый клик реального пользователя приносил доход.",
    ],
    previewImages: [starRiserImg, srPreview1, srPreview2, srPreview3],
  },
  {
    id: 3,
    tag: "PC / Mobile",
    tagColor: "text-yellow-300 bg-yellow-500/15 border-yellow-500/30",
    title: "Corner of Space — F2P roguelike-стратегия от рамки до релиза",
    subtitle: "Вижн, геймдизайн и удержание проекта в рабочих границах до выхода на рынок.",
    image: cosPreview1,
    accent: "from-yellow-500 to-orange-400",
    accentBg: "border-yellow-500/20",
    metrics: [
      { icon: <Award size={14} />, value: "Ведущий геймдизайнер", label: "Роль" },
      { icon: <Target size={14} />, value: "PC / Mobile", label: "Платформы" },
      { icon: <Clock size={14} />, value: "12 месяцев", label: "Срок" },
      { icon: <Users size={14} />, value: "8 человек", label: "Команда" },
    ],
    // Passport fields (right side in modal)
    role: "Lead Game Designer",
    company: "HWC",
    platforms: "PC / Mobile",
    team: "8 человек",
    deadline: "12 месяцев",
    link: "@corner_of_space_bot",
    // New Passport fields
    categories: ["PC", "Mobile", "Roguelike", "P2E"],
    genre: "Strategic Roguelike / Space Combat",
    status: "Released",
    monetization: "F2P / P2E",
    availableOn: ["apple", "android", "pc"],
    developer: "Internal Studio",
    // Legacy fields for backward compatibility
    platform: "PC / Mobile (кросс-платформа)",
    stage: "От концепта до релиза",
    focus: "Roguelike-системы, F2P-модель, скоуп",
    result: "Релиз игры на PC и Mobile",
    about:
      "Corner of Space — тактическая roguelike-стратегия (PC/Mobile) с F2P-моделью. Продукт с упором на короткие сессии и глубокую мета-прогрессию. Моя роль — проектирование систем, управление дизайн-командой и реализация Live Ops стратегии.",
    situation:
      "Требовалось за 10 месяцев собрать релизный билд и подготовить архитектуру для оперирования. Задача: сформировать устойчивый Core Loop и спроектировать экономику, способную выйти на положительную юнит-экономику (LTV > CPI) в кратчайшие сроки.",
    actions: [
      "System Design: Спроектировал основной цикл и мета-прогрессию, адаптированную под управление на PC и Mobile.",
      "Design Management: Сформировал и возглавил отдел из 3-х геймдизайнеров, выстроив процесс производства документации и настройки баланса.",
      "Economy & Monetization: Разработал F2P-модель и точки монетизации, сбалансировав Hard/Soft валюты для предотвращения инфляции.",
      "Live Ops Architecture: Спроектировал подготовку роадмапы обновлений и ивентовых циклов для управления поведением игроков после релиза.",
      "Data-Driven Design: Корректировал сложность и вознаграждения на основе анализа первых воронок и поведения платящих пользователей.",
    ],
    outcome: [
      "LTV — Рост на 30% за счет внедрения системы контентных обновлений",
      "Retention — Возврат 15% оттока через систему игровых событий",
      "Среднее время в игре — Увеличилось на 12% за счет внедрения ивент-механик",
      "Экономика — Проект вышел на положительную окупаемость в Q1 за счет выстроенного баланса",
      "Кейс подтверждает умение проектировать F2P-системы, влияющие на ключевые продуктовые метрики. Я умею не просто выпускать контент, а управлять удержанием и жизненным циклом игрока (LTV) через дизайн обновлений и ивент-менеджмент.",
    ],
    videoUrl: "https://www.youtube.com/embed/quDhJ9ldCvY",
    previewImages: [cosPreview1, cosPreview2, cosPreview3],
  },
  {
    id: 4,
    tag: "PC / Mobile",
    tagColor: "text-pink-300 bg-pink-500/15 border-pink-500/30",
    title: "MetaLife: Проектирование асимметричной макроэкономики",
    subtitle: "Проектирование экономики и социальных механик для мобильного симулятора жизни.",
    image: mtMainImg,
    accent: "from-pink-600 to-purple-500",
    accentBg: "border-pink-500/20",
    metrics: [
      { icon: <Award size={14} />, value: "Senior Game Designer / Economy Designer", label: "Роль" },
      { icon: <Target size={14} />, value: "Mobile / PC", label: "Платформы" },
      { icon: <Clock size={14} />, value: "4 месяца", label: "Срок" },
      { icon: <Users size={14} />, value: "5 человек", label: "Команда" },
    ],
    // Passport fields (right side in modal)
    role: "Senior Game Designer / Economy Designer",
    company: "Decartel Ltd.",
    platforms: "Mobile / PC",
    team: "5 человек",
    deadline: "4 месяца",
    link: "@wolf_edu_bot",
    // New Passport fields
    categories: ["Mobile", "PC", "MMORPG", "P2E"],
    genre: "Social MMO / UGC / Extraction",
    status: "MVP",
    monetization: "F2P / IAP / P2E",
    availableOn: ["apple", "android", "pc"],
    developer: "Decartel Studio",
    // Legacy fields for backward compatibility
    platform: "Mobile",
    stage: "Концепт → MVP",
    focus: "Экономика, социальные механики",
    result: "Рабочий MVP с игровым циклом",
    about:
      "MetaLife — постапокалиптическая MMORPG, гибрид Extraction-шутера и социального симулятора. Геймплей разделен на вылазки в пустоши за ресурсами и жизнь внутри города-хаба. Моя задача — создать «замкнутый цикл», где город производит снаряжение для рейдов, а рейдеры добывают сырье для заводов. Без взаимодействия этих групп прогресс в игре невозможен.",
    situation:
      "Спроектировать устойчивую экономику без NPC-торговцев. Нужно было настроить баланс между двумя ключевыми когортами игроков (добытчики и промышленники) и внедрить инструменты политического влияния (ДАО районов) так, чтобы торговые войны и эмбарго создавали геймплей, но не обрушивали рынок.",
    actions: [
      "Связал рейды и производство: Настроил цепочки крафта так, чтобы топовая экипировка требовала материалов из разных биомов. Это создало постоянный спрос на ресурсы и заставило рейдеров активно торговать.",
      "Внедрил региональную специализацию: Закрепил производство Т3-Т5 ресурсов за конкретными районами (DAO). Это превратило карту города в поле для политических маневров и торговых войн за контроль над дефицитом.",
      "Стресс-тестирование макромодели: Через 1000+ циклов симуляции (Monte Carlo) определил «точки излома» экономики. Это позволило вычислить критический порог налогов, при которых торговля замирает, и выставить безопасные лимиты системы.",
      "Сбалансировал Sinks (вывод активов): Настроил прогрессивный налог на заводы и систему безвозвратной потери вещей в рейдах. Это защищает экономику от затоваривания и удерживает ценность валюты и ресурсов.",
      "Создал Live-ops инструмент: Собрал дашборд для настройки баланса «на лету» (налоги, дроп, комиссии). Это позволило оперативно корректировать экономику по данным тестов без привлечения программистов.",
    ],
    outcome: [
      "Технические тесты подтвердили: асимметричная модель жизнеспособна и сохраняет устойчивость в целевых коридорах инфляции (до 15%). Благодаря симуляциям удалось еще до запуска выявить и купировать 5+ критических уязвимостей крафта, что позволило пройти все этапы плейтестов без технических откатов базы и сохранить 100% прогресса игроков.",
      "Стабильность: 0 технических отказов — за счет верификации модели через 1000+ симуляций",
      "Монетизация: +13,5% к ARPU проекта — прямой результат внедрения ДАО-организаций",
      "Удержание: 12% Retention D30 — конверсия 78% активных игроков в ДАО-структуры",
      "Капитализация: Рост LTV на 27% — ввод ДАО-механик и прав собственности на районы увеличил средний Lifetime игрока",
      "Экономика в ММО — это про мотивацию. Если ты даешь игрокам власть над ресурсами (ДАО, монополии), они сами создают контент. Задача ГД — быть не бухгалтером, а архитектором среды, в которой смерть или неудача одного игрока в пустоши создает экономическую выгоду и геймплей для десяти других в городе.",
    ],
    previewImages: [mtMainImg, mtPreview1, mtPreview2],
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
                className="w-full text-left group relative overflow-hidden flex flex-col h-full"
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
                    className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to top, var(--bg-card), rgba(20, 20, 20, 0.3), transparent)",
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
                <div className="p-6 flex flex-col flex-1">
                  <h3
                    className="mb-3 transition-colors group-hover:text-[#CCFF00] min-h-[3rem] line-clamp-2"
                    style={{
                      color: "var(--text-primary)",
                    }}
                  >
                    {c.title}
                  </h3>

                  <div className="mb-4 p-3 flex-1" style={{ backgroundColor: "rgba(204, 255, 0, 0.05)", border: "1px solid rgba(204, 255, 0, 0.1)" }}>
                    <p
                      className="line-clamp-2 text-sm"
                      style={{
                        fontFamily: "var(--body-font)",
                        color: "var(--text-primary)",
                      }}
                    >
                      {c.subtitle}
                    </p>
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