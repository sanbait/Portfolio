import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const CV_URL = "https://drive.google.com/file/d/1CefF2K42lhG9cDMnvd3N90YZkjchYGqL/view?usp=drive_link";

const links = [
  { label: "Обо мне", href: "#about" },
  { label: "Кейсы", href: "#cases" },
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
    const el = document.querySelector(href);
    const scroll = () => {
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    if (open) {
      setOpen(false);
      setTimeout(scroll, 300);
    } else {
      scroll();
    }
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
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <span
            className="uppercase"
            style={{
              fontFamily: "var(--h3-font)",
              fontWeight: "var(--h3-weight)",
              fontSize: "16px",
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
              type="button"
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="uppercase transition-all text-[#9ca3af] hover:text-[#CCFF00] cursor-pointer"
              style={{
                fontFamily: "var(--label-font)",
                fontWeight: "600",
                fontSize: "14px",
                letterSpacing: "var(--label-ls)",
              }}
            >
              {link.label}
            </button>
          ))}
          <a
            href={CV_URL}
            target="_blank"
            rel="noreferrer"
            className="cv-button uppercase"
            style={{
              padding: "12px 20px",
              fontSize: "14px",
              fontWeight: "700",
            }}
          >
            CV
          </a>
        </div>

        {/* Mobile burger */}
        <div className="md:hidden flex items-center gap-3">
          <a
            href={CV_URL}
            target="_blank"
            rel="noreferrer"
            className="cv-button uppercase"
            style={{
              padding: "10px 14px",
              fontSize: "14px",
              fontWeight: "700",
            }}
          >
            CV
          </a>
          <button
            type="button"
            className="transition-colors cursor-pointer"
            onClick={() => setOpen(!open)}
            style={{ color: open ? "var(--accent-neon)" : "var(--text-secondary)" }}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
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
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(link.href);
                  }}
                  className="text-left uppercase transition-colors cursor-pointer hover:text-[#CCFF00]"
                  style={{
                    fontFamily: "var(--label-font)",
                    fontWeight: "var(--label-weight)",
                    fontSize: "var(--label-size)",
                    letterSpacing: "var(--label-ls)",
                    color: "var(--text-secondary)",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
