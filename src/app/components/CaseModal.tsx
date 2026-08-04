import { useState } from "react";
import { motion } from "motion/react";
import { X, Smartphone, Globe, Send, MessageCircle, Monitor } from "lucide-react";
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
  // Legacy fields for backward compatibility
  platform?: string;
  duration?: string;
  projectLink?: string;
  stage?: string;
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
  previewImages?: string[];
  videoUrl?: string;
}

type TabType = "overview" | "role" | "work" | "result" | "materials";

interface CaseModalProps {
  c: CaseStudy;
  onClose: () => void;
}

export function CaseModal({ c, onClose }: CaseModalProps) {
  const [selectedPreview, setSelectedPreview] = useState(c.videoUrl ? -1 : 0);

  // Use case preview images if available, otherwise fallback to defaults
  const previewImages = c.previewImages && c.previewImages.length > 0
    ? c.previewImages
    : [c.image, PREVIEW_INTERFACE, PREVIEW_ECONOMY, PREVIEW_PROGRESSION];

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
        className="relative w-full max-w-7xl max-h-[95vh] overflow-hidden"
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

        <div className="case-modal-scroll max-h-[95vh] overflow-auto">
          {/* Top section: 2-column like reference */}
          <div className="p-6 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6">
              {/* LEFT column: Key Visual + Preview strip */}
              <div className="flex flex-col gap-2">
                {/* Main visual - video or image */}
                <div className="relative w-full aspect-video overflow-hidden bg-black/50" style={{ border: "1px solid var(--border-default)" }}>
                  {c.videoUrl && selectedPreview === -1 ? (
                    <iframe
                      src={c.videoUrl}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={c.title}
                    />
                  ) : (
                    <ImageWithFallback src={previewImages[selectedPreview >= 0 ? selectedPreview : 0]} alt={c.title} className="w-full h-full object-contain" />
                  )}
                </div>

                {/* Preview thumbnails strip */}
                <div className={`grid gap-2 ${previewImages.length === 3 ? 'grid-cols-3' : 'grid-cols-4'}`}>
                  {c.videoUrl && (
                    <button
                      key="video"
                      onClick={() => setSelectedPreview(-1)}
                      className="relative w-full aspect-video overflow-hidden transition-all duration-300 bg-black/50 flex items-center justify-center"
                      style={{
                        border: selectedPreview === -1 ? "1px solid var(--accent-neon)" : "1px solid var(--border-default)",
                        opacity: selectedPreview === -1 ? 1 : 0.6,
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent-neon)" }}>
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                      {selectedPreview === -1 && (
                        <div className="absolute inset-0 shadow-[inset_0_0_8px_rgba(204,255,0,0.3)] pointer-events-none" />
                      )}
                    </button>
                  )}
                  {previewImages.slice(0, c.videoUrl ? 3 : 4).map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedPreview(idx)}
                      className="relative w-full aspect-video overflow-hidden transition-all duration-300 bg-black/50"
                      style={{
                        border: selectedPreview === idx ? "1px solid var(--accent-neon)" : "1px solid var(--border-default)",
                        opacity: selectedPreview === idx ? 1 : 0.6,
                      }}
                    >
                      <ImageWithFallback src={img} alt={`Preview ${idx + 1}`} className="w-full h-full object-contain" />
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

                {/* Bottom Box: Passport */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-[10px] md:text-xs uppercase tracking-[0.2em] mb-4" style={{ color: "var(--text-secondary)", fontFamily: "var(--body-font, 'Space Grotesk', monospace)" }}>
                    ПАСПОРТ ПРОЕКТА
                  </h3>
                  
                  <div className="w-full mb-6" style={{ borderBottom: "1px dashed var(--border-default)" }}></div>

                  <div className="flex flex-col gap-5 flex-1" style={{ fontFamily: "var(--body-font, 'Space Grotesk', monospace)", fontSize: "13px" }}>
                    {/* Genre */}
                    {c.genre && (
                      <div className="flex justify-between items-center gap-4">
                        <span style={{ color: "var(--text-secondary)" }}>Жанр</span>
                        <span className="text-right" style={{ color: "var(--text-primary)" }}>{c.genre}</span>
                      </div>
                    )}

                    {/* Platform */}
                    {c.availableOn && (
                      <div className="flex justify-between items-center gap-4">
                        <span style={{ color: "var(--text-secondary)" }}>Платформа</span>
                        <div className="flex items-center gap-4 text-white">
                          {/* Show one phone icon if either apple or android is present */}
                          {(c.availableOn.includes("apple") || c.availableOn.includes("android")) && (
                            <div className="flex items-center justify-center">
                              <Smartphone size={18} />
                            </div>
                          )}
                          {/* Show other platforms */}
                          {c.availableOn.filter(p => p !== "apple" && p !== "android").map((platform) => (
                            <div key={platform} className="flex items-center justify-center">
                              {platform === "telegram" && <Send size={18} className="translate-y-[1px]" />}
                              {platform === "line" && <MessageCircle size={18} className="text-[#06C755]" />}
                              {platform === "pc" && <Monitor size={18} />}
                              {platform === "web" && <Globe size={18} />}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Monetization */}
                    {c.monetization && (
                      <div className="flex justify-between items-center gap-4">
                        <span style={{ color: "var(--text-secondary)" }}>Монетизация</span>
                        <span className="text-right" style={{ color: "var(--text-primary)" }}>{c.monetization}</span>
                      </div>
                    )}

                    {/* Company */}
                    {c.company && (
                      <div className="flex justify-between items-center gap-4">
                        <span style={{ color: "var(--text-secondary)" }}>Компания</span>
                        <span className="text-right" style={{ color: "var(--text-primary)" }}>{c.company}</span>
                      </div>
                    )}

                    {/* Role */}
                    {c.role && (
                      <div className="flex justify-between items-center gap-4">
                        <span style={{ color: "var(--text-secondary)" }}>Роль</span>
                        <span className="text-right" style={{ color: "var(--text-primary)" }}>{c.role}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-8 mb-8" style={{ borderTop: "1px solid var(--accent-neon)", opacity: 0.35 }} />

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
              
              {/* Optional result description (the first item if it's long text) */}
              {c.outcome && c.outcome.length > 0 && c.outcome[0].length > 100 && (
                <p
                  className="mb-6"
                  style={{
                    fontFamily: "var(--body-font)",
                    fontSize: "var(--body-size)",
                    lineHeight: "var(--body-lh)",
                    color: "var(--text-secondary)",
                  }}
                >
                  {c.outcome[0]}
                </p>
              )}

              {/* Metrics grid - only for items that look like metrics (short text or contains -) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {(c.outcome || []).filter((item, idx) => {
                  // Skip the first item if it was used as a description
                  if (idx === 0 && item.length > 100) return false;
                  // Skip the last item (it's usually the conclusion)
                  if (idx === (c.outcome?.length || 0) - 1) return false;
                  return true;
                }).map((item, i) => (
                  <div
                    key={i}
                    className="p-5 text-center flex items-center justify-center min-h-[80px]"
                    style={{
                      backgroundColor: "rgba(204, 255, 0, 0.05)",
                      border: "1px solid rgba(204, 255, 0, 0.2)",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--body-font)",
                        fontSize: "var(--secondary-size)",
                        lineHeight: "var(--secondary-lh)",
                        color: "var(--text-primary)",
                      }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* Final conclusion section */}
              {c.outcome && c.outcome.length > 0 && (
                <div className="mt-8 mb-4">
                  <h4
                    className="mb-4"
                    style={{
                      fontFamily: "var(--title-font, 'Syne', sans-serif)",
                      fontWeight: "bold",
                      fontSize: "16px",
                      letterSpacing: "0.05em",
                      color: "var(--accent-neon)",
                    }}
                  >
                    Что я вынес из этого кейса:
                  </h4>
                  <p
                    style={{
                      fontFamily: "var(--body-font)",
                      fontSize: "var(--body-size)",
                      lineHeight: "var(--body-lh)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {c.outcome[c.outcome.length - 1]}
                  </p>
                </div>
              )}
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
