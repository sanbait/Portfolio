import { motion } from "motion/react";

export function Hero() {
  const scrollToAbout = () => {
    document.querySelector("#cases")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const marqueeItems = [
    "GAME DESIGN",
    "ECONOMY DESIGN",
    "SYSTEMS DESIGN",
    "MONETIZATION",
    "DATA-DRIVEN DESIGN",
    "PRODUCT THINKING",
    "META PROGRESSION",
    "REWARD SYSTEMS",
    "SOCIAL MECHANICS",
    "TMA",
    "WEB3",
    "GAMEFI",
    "MMORPG",
    "MOBILE F2P",
    "PC / STEAM",
    "CORPORATE GAMIFICATION",
  ];

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden pt-20" style={{ backgroundColor: "var(--bg-primary)" }}>
      {/* Abstract gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 1200px 900px at 85% 15%, rgba(204, 255, 0, 0.12), transparent 60%),
            radial-gradient(ellipse 800px 600px at 15% 85%, rgba(204, 255, 0, 0.08), transparent 55%)
          `,
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(204,255,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(204,255,0,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main content - centered */}
      <div className="relative z-10 flex-1 flex items-center justify-center">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-[var(--container-px)] py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mb-8"
          >
            <p
              className="uppercase"
              style={{
                fontFamily: "var(--label-font)",
                fontWeight: "800",
                fontSize: "16px",
                lineHeight: "var(--label-lh)",
                letterSpacing: "0.14em",
                color: "var(--accent-neon)",
              }}
            >
              SENIOR GAME DESIGNER • DATA-DRIVEN • ECONOMY DESIGN
            </p>
          </motion.div>

          {/* Giant name - centered */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1
              className="mb-10 text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[var(--h1-size)]"
              style={{
                color: "var(--text-primary)",
                fontFamily: "var(--h1-font)",
                fontWeight: "var(--h1-weight)",
                lineHeight: "1.1",
                letterSpacing: "0.02em",
              }}
            >
              АЛЕКСАНДР<br />БАТУРИН
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-12 max-w-2xl mx-auto"
            style={{
              fontFamily: "var(--body-font)",
              fontSize: "var(--body-size)",
              lineHeight: "var(--body-lh)",
              color: "var(--text-secondary)",
            }}
          >
            Специализируюсь на экономике, системном дизайне и монетизации. Смотрю на проект целиком: от прогрессии и мотивации игрока до удержания, метрик и роста продукта.
          </motion.p>

          {/* CTA buttons - centered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap gap-6 justify-center"
          >
            <motion.button
              onClick={scrollToAbout}
              whileHover={{ backgroundColor: "var(--accent-neon)", color: "#000000" }}
              whileTap={{ scale: 0.98 }}
              className="cursor-pointer font-bold uppercase tracking-widest"
              style={{
                width: "min(420px, 100%)",
                padding: "24px 64px",
                backgroundColor: "transparent",
                color: "#FFFFFF",
                borderRadius: "0",
                border: "2px solid var(--accent-neon)",
                fontSize: "18px",
                transition: "none"
              }}
              transition={{ duration: 0 }}
            >
              Кейсы
            </motion.button>
            <motion.button
              onClick={scrollToContact}
              whileHover={{ backgroundColor: "var(--accent-neon)", color: "#000000" }}
              whileTap={{ scale: 0.98 }}
              className="cursor-pointer font-bold uppercase tracking-widest"
              style={{
                width: "min(420px, 100%)",
                padding: "24px 64px",
                backgroundColor: "transparent",
                color: "#FFFFFF",
                borderRadius: "0",
                border: "2px solid var(--accent-neon)",
                fontSize: "18px",
                transition: "none"
              }}
              transition={{ duration: 0 }}
            >
              Контакты
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Running line at BOTTOM */}
      <div
        className="relative overflow-hidden mt-auto"
        style={{
          borderTop: "1px solid rgba(204, 255, 0, 0.2)",
          height: "56px",
          backgroundColor: "transparent",
        }}
      >
        <div className="flex w-fit items-center h-full">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 135, repeat: Infinity, ease: "linear" }}
            className="flex gap-8 whitespace-nowrap items-center px-4"
            style={{
              fontFamily: "var(--marquee-font)",
              fontWeight: "var(--marquee-weight)",
              fontSize: "var(--marquee-size)",
              letterSpacing: "var(--marquee-ls)",
            }}
          >
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="flex items-center gap-8" style={{ color: "var(--accent-neon)" }}>
                {item} <span>•</span>
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
