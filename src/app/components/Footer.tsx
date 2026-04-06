 

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
          GAME DESIGNER • БАТУРИН АЛЕКСАНДР
        </p>
      </div>
    </footer>
  );
}
