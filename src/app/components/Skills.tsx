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
    <section id="skills" className="py-24 px-6" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        <FadeInSection>
          <h2 className="screen-title" style={{ color: "var(--text-primary)", marginBottom: "var(--heading-gap)" }}>
            НАВЫКИ
          </h2>
          <p className="max-w-2xl" style={{ color: "var(--text-secondary)", marginBottom: "var(--content-gap)" }}>
            Ключевые компетенции в системном/продуктовом геймдизайне и инструменты, с которыми работаю.
          </p>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "var(--card-gap)", marginBottom: "var(--content-gap)" }}>
          {skillGroups.map((group, gi) => (
            <FadeInSection key={group.category} delay={gi * 0.1}>
              <div className={`rounded-2xl border ${group.border} ${group.bgColor} p-6 h-full`}>
                <div className="flex items-center gap-2 mb-6">
                  <div className={`w-2 h-2 rounded-full ${group.dot}`} />
                  <h4 style={{ color: "var(--text-primary)" }}>
                    {group.category}
                  </h4>
                </div>

                <div className="space-y-5">
                  {group.skills.map((skill, si) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span
                          style={{
                            fontFamily: "var(--secondary-font)",
                            fontSize: "var(--secondary-size)",
                            lineHeight: "var(--secondary-lh)",
                            color: "var(--text-secondary)",
                          }}
                        >
                          {skill.name}
                        </span>
                        <span
                          style={{
                            fontFamily: "var(--label-font)",
                            fontWeight: "var(--label-weight)",
                            fontSize: "var(--label-size)",
                            lineHeight: "var(--label-lh)",
                            letterSpacing: "var(--label-ls)",
                            color: "var(--text-tertiary)",
                          }}
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
            <h3 className="mb-5" style={{ color: "var(--text-primary)" }}>
              Инструменты
            </h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 hover:border-purple-500/30 transition-all cursor-default"
                  style={{
                    fontFamily: "var(--secondary-font)",
                    fontSize: "var(--secondary-size)",
                    lineHeight: "var(--secondary-lh)",
                  }}
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
