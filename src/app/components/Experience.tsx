import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar as RechartsRadar } from 'recharts';

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}

const experiences = [
  {
    role: "Senior Game Systems Designer",
    company: "MetaStudio",
    period: "2023 — Настоящее время",
  },
  {
    role: "Lead System Designer",
    company: "GameCraft",
    period: "2022 — 2023",
  },
  {
    role: "Product Designer",
    company: "EdTech Startup",
    period: "2021 — 2022",
  },
  {
    role: "Junior Game Designer",
    company: "Indie Studio",
    period: "2020 — 2021",
  },
];

const skillData = [
  { subject: 'Системный дизайн', A: 95, fullMark: 100 },
  { subject: 'Баланс и Экономика', A: 90, fullMark: 100 },
  { subject: 'Нарративный дизайн', A: 85, fullMark: 100 },
  { subject: 'Level Design', A: 80, fullMark: 100 },
  { subject: 'UX/UI', A: 88, fullMark: 100 },
  { subject: 'Тех. дизайн', A: 82, fullMark: 100 },
  { subject: 'Монетизация', A: 92, fullMark: 100 },
  { subject: 'Live Ops', A: 89, fullMark: 100 },
  { subject: 'Combat Design', A: 85, fullMark: 100 },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Experience */}
          <div>
            <FadeInSection>
              <h2 style={{ color: "var(--text-primary)", marginBottom: "48px" }}>
                ОПЫТ РАБОТЫ
              </h2>
            </FadeInSection>

            <div className="space-y-6">
              {experiences.map((exp, i) => (
                <FadeInSection key={i} delay={i * 0.1}>
                  <div
                    className="p-6 transition-all group"
                    style={{
                      border: "1px solid var(--border-default)",
                      borderRadius: "var(--radius-card-sm)",
                      backgroundColor: "rgba(255, 255, 255, 0.02)",
                    }}
                  >
                    <div className="flex flex-col gap-1">
                      <span
                        className="uppercase mb-1"
                        style={{
                          fontFamily: "var(--label-font)",
                          fontWeight: "var(--label-weight)",
                          fontSize: "10px",
                          letterSpacing: "0.1em",
                          color: "var(--accent-neon)",
                          opacity: 0.8
                        }}
                      >
                        {exp.period}
                      </span>
                      <h3 style={{ color: "var(--text-primary)", fontSize: "1.25rem", fontWeight: "700" }}>
                        {exp.role}
                      </h3>
                      <p
                        className="uppercase"
                        style={{
                          fontFamily: "var(--label-font)",
                          fontWeight: "500",
                          fontSize: "12px",
                          letterSpacing: "0.05em",
                          color: "var(--text-secondary)",
                        }}
                      >
                        {exp.company}
                      </p>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>

          {/* Right: Skills Chart */}
          <div className="h-full">
            <FadeInSection delay={0.2}>
              <h2 style={{ color: "var(--text-primary)", marginBottom: "48px" }}>
                НАВЫКИ
              </h2>
              <div className="w-full h-[500px] flex items-center justify-center rounded-xl overflow-hidden" 
                   style={{ 
                     backgroundColor: "rgba(255, 255, 255, 0.02)", 
                     border: "1px solid var(--border-default)" 
                   }}>
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="75%" data={skillData}>
                    <PolarGrid stroke="rgba(255, 255, 255, 0.1)" />
                    <PolarAngleAxis 
                      dataKey="subject" 
                      tick={{ fill: 'var(--text-secondary)', fontSize: 10, fontWeight: 500 }} 
                    />
                    <PolarRadiusAxis 
                      angle={30} 
                      domain={[0, 100]} 
                      tick={false} 
                      axisLine={false} 
                    />
                    <RechartsRadar
                      name="Skills"
                      dataKey="A"
                      stroke="var(--accent-neon)"
                      fill="var(--accent-neon)"
                      fillOpacity={0.5}
                      dot={{ r: 3, fill: 'var(--accent-neon)' }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </FadeInSection>
          </div>

        </div>
      </div>
    </section>
  );
}
