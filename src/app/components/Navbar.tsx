import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Обо мне", href: "#about" },
  { label: "Кейсы", href: "#cases" },
  { label: "Опыт", href: "#experience" },
  { label: "Контакты", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(10, 10, 10, 0.85)" : "rgba(10, 10, 10, 0.15)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid rgba(204, 255, 0, 0.2)" : "1px solid rgba(204, 255, 0, 0.1)",
        boxShadow: scrolled ? "0 8px 32px rgba(204, 255, 0, 0.05)" : "none",
      }}
    >
      <div
        className="mx-auto px-8 h-20 flex items-center justify-between"
        style={{ maxWidth: "var(--container-max)" }}
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group"
        >
          <span
            className="uppercase"
            style={{
              fontFamily: "var(--h3-font)",
              fontWeight: "var(--h3-weight)",
              fontSize: "14px",
              letterSpacing: "0.12em",
              color: "var(--accent-neon)",
            }}
          >
            ПОРТФОЛИО
          </span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="uppercase transition-all text-[#9ca3af] hover:text-[#CCFF00]"
              style={{
                fontFamily: "var(--label-font)",
                fontWeight: "var(--label-weight)",
                fontSize: "var(--label-size)",
                letterSpacing: "var(--label-ls)",
              }}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden transition-colors"
          onClick={() => setOpen(!open)}
          style={{ color: open ? "var(--accent-neon)" : "var(--text-secondary)" }}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
            style={{
              backgroundColor: "rgba(10, 10, 10, 0.95)",
              backdropFilter: "blur(12px)",
              borderBottom: "1px solid var(--border-default)",
            }}
          >
            <div className="flex flex-col px-8 py-6 gap-4">
              {links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className="text-left uppercase transition-colors"
                  style={{
                    fontFamily: "var(--label-font)",
                    fontWeight: "var(--label-weight)",
                    fontSize: "var(--label-size)",
                    letterSpacing: "var(--label-ls)",
                    color: "var(--text-secondary)",
                  }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}