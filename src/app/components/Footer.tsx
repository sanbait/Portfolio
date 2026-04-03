import { Mail, Send } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="py-12 px-6"
      style={{
        backgroundColor: "var(--bg-primary)",
        borderTop: "1px solid var(--border-default)",
      }}
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6" style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        <div className="flex items-center gap-6">
          <a
            href="https://t.me/alexander_baturin"
            className="flex items-center gap-2 transition-colors hover:text-[#CCFF00]"
            style={{
              fontFamily: "var(--label-font)",
              fontWeight: "var(--label-weight)",
              fontSize: "var(--label-size)",
              letterSpacing: "var(--label-ls)",
              color: "var(--text-secondary)",
              textDecoration: "none",
            }}
          >
            <Send size={16} />
            Telegram
          </a>
          <a
            href="mailto:a.baturin@gamedesign.ru"
            className="flex items-center gap-2 transition-colors hover:text-[#CCFF00]"
            style={{
              fontFamily: "var(--label-font)",
              fontWeight: "var(--label-weight)",
              fontSize: "var(--label-size)",
              letterSpacing: "var(--label-ls)",
              color: "var(--text-secondary)",
              textDecoration: "none",
            }}
          >
            <Mail size={16} />
            Email
          </a>
        </div>

        <p
          className="text-center uppercase"
          style={{
            fontFamily: "var(--label-font)",
            fontWeight: "var(--label-weight)",
            fontSize: "var(--label-size)",
            letterSpacing: "var(--label-ls)",
            color: "var(--text-tertiary)",
          }}
        >
          © 2026 Александр Батурин
        </p>
      </div>
    </footer>
  );
}