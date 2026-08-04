import { useRef } from "react";
import { motion, useInView } from "motion/react";

const skillGroups = [
  {
    category: "Геймификация",
    color: "from-purple-500 to-purple-400",
    bgColor: "bg-purple-500/10",
    border: "border-purple-500/20",
    dot: "bg-purple-400",
    skills: [
      { name: "Game Loop Design", level: 97 },
      { name: "Progression Systems", level: 95 },
      { name: "Reward Mechanics", level: 93 },
      { name: "Behavioral Psychology", level: 90 },
      { name: "Narrative Design", level: 82 },
    ],
  },
  {
    category: "Продуктовое мышление",
    color: "from-cyan-500 to-cyan-400",
    bgColor: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    dot: "bg-cyan-400",
    skills: [
      { name: "Product Strategy", level: 92 },
      { name: "A/B Testing", level: 90 },
      { name: "User Research", level: 88 },
      { name: "OKR / KPI Setting", level: 87 },
      { name: "Roadmap Planning", level: 85 },
    ],
  },
  {
    category: "Аналитика & Данные",
    color: "from-pink-500 to-orange-400",
    bgColor: "bg-pink-500/10",
    border: "border-pink-500/20",
    dot: "bg-pink-400",
    skills: [
      { name: "Amplitude / Mixpanel", level: 88 },
      { name: "SQL (базовый)", level: 76 },
      { name: "Retention Analysis", level: 91 },
      { name: "Funnel Optimization", level: 89 },
      { name: "Cohort Analysis", level: 85 },
    ],
  },
];

const tools = [
  "Figma", "Miro", "Notion", "Jira", "Amplitude",
  "Mixpanel", "Tableau", "Unity (basic)", "Hotjar",
  "Airtable", "Loom", "Slack", "ChatGPT / Claude",
];

function AnimatedBar({ level, color, delay }: { level: number; color: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="relative h-1.5 rounded-full bg-white/8 overflow-hidden">
      <motion.div
        className={`absolute left-0 top-0 h-full rounded-full bg-gradient-to-r ${color}`}
        initial={{ width: 0 }}
        animate={inView ? { width: `${level}%` } : { width: 0 }}
        transition={{ duration: 1.1, delay, ease: "easeOut" }}
      />
    </div>
  );
}

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay }}
    >
      {children}
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="bg-[#0d0d14] py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeInSection>
          <p
            className="text-center text-pink-400/60 tracking-widest uppercase mb-3 text-xs"
            style={{ fontFamily: "JetBrains Mono, monospace" }}
          >
            03 / Навыки
          </p>
          <h2
            className="text-center text-white mb-4"
            style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 700 }}
          >
            Skill Tree
          </h2>
          <p
            className="text-center text-white/45 max-w-xl mx-auto mb-16"
            style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1rem" }}
          >
            Прокачанные навыки — потому что хороший продюсер геймификации сам живёт по правилам прогресс-системы.
          </p>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {skillGroups.map((group, gi) => (
            <FadeInSection key={group.category} delay={gi * 0.1}>
              <div className={`rounded-2xl border ${group.border} ${group.bgColor} p-6 h-full`}>
                <div className="flex items-center gap-2 mb-6">
                  <div className={`w-2 h-2 rounded-full ${group.dot}`} />
                  <h3
                    className="text-white"
                    style={{ fontFamily: "Syne, sans-serif", fontWeight: 600, fontSize: "0.95rem" }}
                  >
                    {group.category}
                  </h3>
                </div>

                <div className="space-y-5">
                  {group.skills.map((skill, si) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span
                          className="text-white/70 text-sm"
                          style={{ fontFamily: "Space Grotesk, sans-serif" }}
                        >
                          {skill.name}
                        </span>
                        <span
                          className="text-white/35 text-xs"
                          style={{ fontFamily: "JetBrains Mono, monospace" }}
                        >
                          {skill.level}%
                        </span>
                      </div>
                      <AnimatedBar level={skill.level} color={group.color} delay={gi * 0.15 + si * 0.08} />
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* Tools */}
        <FadeInSection delay={0.2}>
          <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-6 md:p-8">
            <p
              className="text-white/40 text-xs tracking-widest uppercase mb-5"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              Инструменты
            </p>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 hover:border-purple-500/30 transition-all cursor-default text-sm"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
