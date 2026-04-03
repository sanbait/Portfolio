import { useState } from "react";
import { motion } from "motion/react";
import { X } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// Preview images for gallery
const PREVIEW_INTERFACE = "https://images.unsplash.com/photo-1587573089734-09cb69c0f2b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBnYW1lJTIwdGVsZWdyYW0lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzc1MTc2ODU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const PREVIEW_SPACE = "https://images.unsplash.com/photo-1633415560376-7068469d9d03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMHN0cmF0ZWd5JTIwZ2FtZSUyMHJvZ3VlbGlrZXxlbnwxfHx8fDE3NzUxNzY4NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const PREVIEW_ECONOMY = "https://images.unsplash.com/photo-1544819679-57b273c027a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1lJTIwZWNvbm9teSUyMHN5c3RlbSUyMGNoYXJ0fGVufDF8fHx8MTc3NTE3Njg1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const PREVIEW_PROGRESSION = "https://images.unsplash.com/photo-1573868056472-22834cad367c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1lJTIwZGVzaWduJTIwcHJvZ3Jlc3Npb24lMjBkaWFncmFtfGVufDF8fHx8MTc3NTE3Njg2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

interface CaseStudy {
  id: number;
  tag: string;
  title: string;
  image: string;
  role?: string;
  platform?: string;
  duration: string;
  team: string;
  stage?: string;
  status?: string;
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
  result?: string;
  mechanics?: string[];
  facts?: string[];
  subtitle?: string;
}

type TabType = "overview" | "role" | "work" | "result" | "materials";

interface CaseModalProps {
  c: CaseStudy;
  onClose: () => void;
}

export function CaseModal({ c, onClose }: CaseModalProps) {
  const [selectedPreview, setSelectedPreview] = useState(0);

  // Mock preview images - in real app these would come from case data
  const previewImages = [c.image, PREVIEW_INTERFACE, PREVIEW_ECONOMY, PREVIEW_PROGRESSION];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={onClose}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }}
    >
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-7xl max-h-[95vh] overflow-auto"
        style={{
          backgroundColor: "var(--bg-primary)",
          border: "2px solid var(--accent-neon)",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 w-10 h-10 flex items-center justify-center transition-all hover:bg-[#CCFF00] hover:text-black"
          style={{
            backgroundColor: "rgba(204, 255, 0, 0.1)",
            border: "1px solid var(--border-default)",
            color: "var(--accent-neon)",
          }}
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {/* Top section: 2-column like reference */}
        <div className="p-6 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6">
            {/* LEFT column: Key Visual + Preview strip */}
            <div className="flex flex-col gap-2">
              {/* Main visual */}
              <div className="relative w-full aspect-video overflow-hidden bg-black/50" style={{ border: "1px solid var(--border-default)" }}>
                <ImageWithFallback src={previewImages[selectedPreview]} alt={c.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-14 h-14 rounded-full bg-black/60 flex items-center justify-center">
                    <div className="w-0 h-0 border-t-[7px] border-t-transparent border-l-[11px] border-l-white border-b-[7px] border-b-transparent ml-1" />
                  </div>
                </div>
              </div>

              {/* Preview thumbnails strip */}
              <div className="grid grid-cols-4 gap-2">
                {previewImages.slice(0, 4).map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedPreview(idx)}
                    className="relative w-full aspect-video overflow-hidden transition-all duration-300 bg-black/50"
                    style={{
                      border: selectedPreview === idx ? "1px solid var(--accent-neon)" : "1px solid var(--border-default)",
                      opacity: selectedPreview === idx ? 1 : 0.6,
                    }}
                  >
                    <ImageWithFallback src={img} alt={`Preview ${idx + 1}`} className="w-full h-full object-cover" />
                    {selectedPreview === idx && (
                      <div className="absolute inset-0 shadow-[inset_0_0_8px_rgba(204,255,0,0.3)] pointer-events-none" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT column: Title + Passport */}
            <div className="flex flex-col bg-[#0a0a0f] h-full" style={{ border: "1px solid var(--border-default)" }}>
              {/* Top Box: Title */}
              <div className="p-6 min-h-[110px] flex items-center pr-12" style={{ borderBottom: "1px solid var(--border-default)" }}>
                <h2 className="text-lg md:text-xl font-bold uppercase tracking-wide leading-snug" style={{ color: "var(--text-primary)", fontFamily: "var(--title-font, 'Syne', sans-serif)" }}>
                  {c.title}
                </h2>
              </div>

              {/* Bottom Box: Detail Game */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-[10px] md:text-xs uppercase tracking-[0.2em] mb-4" style={{ color: "var(--text-secondary)", fontFamily: "var(--body-font, 'Space Grotesk', monospace)" }}>
                  Detail Game
                </h3>
                
                <div className="w-full mb-6" style={{ borderBottom: "1px dashed var(--border-default)" }}></div>

                <div className="flex flex-col gap-5 flex-1" style={{ fontFamily: "var(--body-font, 'Space Grotesk', monospace)", fontSize: "13px" }}>
                  {/* Category */}
                  <div className="flex justify-between items-start gap-4">
                    <span style={{ color: "var(--text-secondary)" }}>Category</span>
                    <span className="px-2 py-0.5 text-xs bg-white/5" style={{ border: "1px solid var(--border-default)", color: "var(--text-primary)" }}>{c.role || "Product & Audit"}</span>
                  </div>

                  {/* Genre */}
                  <div className="flex justify-between items-center gap-4">
                    <span style={{ color: "var(--text-secondary)" }}>Genre</span>
                    <span className="text-right" style={{ color: "var(--text-primary)" }}>{c.platform || "Strategy"}</span>
                  </div>

                  {/* Status */}
                  <div className="flex justify-between items-center gap-4">
                    <span style={{ color: "var(--text-secondary)" }}>Status</span>
                    <span className="text-right" style={{ color: "var(--text-primary)" }}>{c.status || c.stage || "Live"}</span>
                  </div>
                  
                  {/* Available on */}
                  <div className="flex justify-between items-center gap-4">
                    <span style={{ color: "var(--text-secondary)" }}>Available on</span>
                    <div className="flex gap-2 text-white">
                       <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                    </div>
                  </div>

                  {/* Developer */}
                  <div className="flex justify-between items-center gap-4">
                    <span style={{ color: "var(--text-secondary)" }}>Developer</span>
                    <span className="text-right" style={{ color: "var(--text-primary)" }}>{c.team || "Internal Team"}</span>
                  </div>
                </div>

                {/* Social Icons */}
                <div className="mt-8 pt-4 flex justify-end gap-6">
                  {[
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>, 
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>, 
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"></path>, 
                    <path d="M18 6L6 18M6 6l12 12"></path>
                  ].map((path, i) => (
                    <button key={i} className="transition-colors hover:text-[#CCFF00]" style={{ color: "var(--text-secondary)" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                        {path}
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content sections - full width below */}
        <div className="px-8 pb-8 space-y-8">
          {/* Overview */}
          {c.about && (
            <div>
              <h3
                className="mb-4 uppercase"
                style={{
                  fontFamily: "var(--label-font)",
                  fontWeight: "var(--label-weight)",
                  fontSize: "var(--label-size)",
                  letterSpacing: "var(--label-ls)",
                  color: "var(--accent-neon)",
                }}
              >
                → О проекте
              </h3>
              <p
                style={{
                  fontFamily: "var(--body-font)",
                  fontSize: "var(--body-size)",
                  lineHeight: "var(--body-lh)",
                  color: "var(--text-secondary)",
                }}
              >
                {c.about}
              </p>
            </div>
          )}

          {/* Situation / Task */}
          {(c.situation || c.task) && (
            <div>
              <h3
                className="mb-4 uppercase"
                style={{
                  fontFamily: "var(--label-font)",
                  fontWeight: "var(--label-weight)",
                  fontSize: "var(--label-size)",
                  letterSpacing: "var(--label-ls)",
                  color: "var(--accent-neon)",
                }}
              >
                → Ситуация / Задача
              </h3>
              <p
                style={{
                  fontFamily: "var(--body-font)",
                  fontSize: "var(--body-size)",
                  lineHeight: "var(--body-lh)",
                  color: "var(--text-secondary)",
                }}
              >
                {c.situation || c.task}
              </p>
            </div>
          )}

          {/* My Role */}
          {c.myRole && c.myRole.length > 0 && (
            <div>
              <h3
                className="mb-4 uppercase"
                style={{
                  fontFamily: "var(--label-font)",
                  fontWeight: "var(--label-weight)",
                  fontSize: "var(--label-size)",
                  letterSpacing: "var(--label-ls)",
                  color: "var(--accent-neon)",
                }}
              >
                → Моя роль
              </h3>
              <ul className="space-y-3">
                {c.myRole.map((point, i) => (
                  <li key={i} className="flex gap-3">
                    <span style={{ color: "var(--accent-neon)", flexShrink: 0 }}>•</span>
                    <span
                      style={{
                        fontFamily: "var(--body-font)",
                        fontSize: "var(--body-size)",
                        lineHeight: "var(--body-lh)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* What I Did - structured */}
          {c.whatIDid && Object.keys(c.whatIDid).length > 0 && (
            <div className="space-y-8">
              <h3
                className="mb-6 uppercase"
                style={{
                  fontFamily: "var(--label-font)",
                  fontWeight: "var(--label-weight)",
                  fontSize: "var(--label-size)",
                  letterSpacing: "var(--label-ls)",
                  color: "var(--accent-neon)",
                }}
              >
                → Что сделал
              </h3>
              {c.whatIDid.gameLoop && c.whatIDid.gameLoop.length > 0 && <WorkSection title="Игровой цикл" items={c.whatIDid.gameLoop} />}
              {c.whatIDid.economy && c.whatIDid.economy.length > 0 && <WorkSection title="Экономика" items={c.whatIDid.economy} />}
              {c.whatIDid.progression && c.whatIDid.progression.length > 0 && <WorkSection title="Прогрессия" items={c.whatIDid.progression} />}
              {c.whatIDid.monetization && c.whatIDid.monetization.length > 0 && <WorkSection title="Монетизация" items={c.whatIDid.monetization} />}
              {c.whatIDid.social && c.whatIDid.social.length > 0 && <WorkSection title="Социальные механики" items={c.whatIDid.social} />}
              {c.whatIDid.retention && c.whatIDid.retention.length > 0 && <WorkSection title="Удержание" items={c.whatIDid.retention} />}
              {c.whatIDid.testing && c.whatIDid.testing.length > 0 && <WorkSection title="Проверка гипотез" items={c.whatIDid.testing} />}
            </div>
          )}

          {/* Actions - fallback if no structured data */}
          {(!c.whatIDid || Object.keys(c.whatIDid).length === 0) && c.actions && c.actions.length > 0 && (
            <div>
              <h3
                className="mb-4 uppercase"
                style={{
                  fontFamily: "var(--label-font)",
                  fontWeight: "var(--label-weight)",
                  fontSize: "var(--label-size)",
                  letterSpacing: "var(--label-ls)",
                  color: "var(--accent-neon)",
                }}
              >
                → Что было сделано
              </h3>
              <ul className="space-y-3">
                {c.actions.map((action, i) => (
                  <li key={i} className="flex gap-3">
                    <span style={{ color: "var(--accent-neon)", flexShrink: 0 }}>•</span>
                    <span
                      style={{
                        fontFamily: "var(--body-font)",
                        fontSize: "var(--body-size)",
                        lineHeight: "var(--body-lh)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {action}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Result */}
          {(c.outcome || c.facts || c.result) && (
            <div>
              <h3
                className="mb-4 uppercase"
                style={{
                  fontFamily: "var(--label-font)",
                  fontWeight: "var(--label-weight)",
                  fontSize: "var(--label-size)",
                  letterSpacing: "var(--label-ls)",
                  color: "var(--accent-neon)",
                }}
              >
                → Результат
              </h3>
              <ul className="space-y-4">
                {(c.outcome || c.facts || [c.result || ""]).map((item, i) => (
                  <li
                    key={i}
                    className="p-4"
                    style={{
                      backgroundColor: "rgba(204, 255, 0, 0.03)",
                      border: "1px solid rgba(204, 255, 0, 0.1)",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--body-font)",
                        fontSize: "var(--body-size)",
                        lineHeight: "var(--body-lh)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Key mechanics */}
          {c.mechanics && c.mechanics.length > 0 && (
            <div>
              <h3
                className="mb-4 uppercase"
                style={{
                  fontFamily: "var(--label-font)",
                  fontWeight: "var(--label-weight)",
                  fontSize: "var(--label-size)",
                  letterSpacing: "var(--label-ls)",
                  color: "var(--accent-neon)",
                }}
              >
                → Ключевые механики
              </h3>
              <div className="flex flex-wrap gap-2">
                {c.mechanics.map((mech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5"
                    style={{
                      backgroundColor: "rgba(204, 255, 0, 0.1)",
                      border: "1px solid rgba(204, 255, 0, 0.2)",
                      fontFamily: "var(--label-font)",
                      fontSize: "var(--label-size)",
                      letterSpacing: "var(--label-ls)",
                      color: "var(--text-primary)",
                      textTransform: "uppercase",
                    }}
                  >
                    {mech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Materials */}
          <div>
            <h3
              className="mb-6 uppercase"
              style={{
                fontFamily: "var(--label-font)",
                fontWeight: "var(--label-weight)",
                fontSize: "var(--label-size)",
                letterSpacing: "var(--label-ls)",
                color: "var(--accent-neon)",
              }}
            >
              → Материалы
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[PREVIEW_INTERFACE, PREVIEW_SPACE, PREVIEW_ECONOMY, PREVIEW_PROGRESSION].map((img, idx) => (
                <div
                  key={idx}
                  className="relative h-64 overflow-hidden"
                  style={{
                    border: "1px solid var(--border-default)",
                  }}
                >
                  <ImageWithFallback src={img} alt={`Material ${idx + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function PassportRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between">
      <p
        className="uppercase"
        style={{
          fontFamily: "var(--label-font)",
          fontWeight: "var(--label-weight)",
          fontSize: "var(--label-size)",
          letterSpacing: "var(--label-ls)",
          color: "var(--text-tertiary)",
        }}
      >
        {label}
      </p>
      <p
        style={{
          fontFamily: "var(--body-font)",
          fontSize: "var(--secondary-size)",
          lineHeight: "var(--secondary-lh)",
          color: "var(--text-primary)",
        }}
      >
        {value}
      </p>
    </div>
  );
}

function WorkSection({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4
        className="mb-3 uppercase"
        style={{
          fontFamily: "var(--label-font)",
          fontWeight: "var(--label-weight)",
          fontSize: "var(--label-size)",
          letterSpacing: "var(--label-ls)",
          color: "var(--accent-neon)",
        }}
      >
        {title}
      </h4>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3">
            <span style={{ color: "var(--accent-neon)", flexShrink: 0, marginTop: "6px" }}>•</span>
            <span
              style={{
                fontFamily: "var(--body-font)",
                fontSize: "var(--secondary-size)",
                lineHeight: "var(--secondary-lh)",
                color: "var(--text-secondary)",
              }}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}