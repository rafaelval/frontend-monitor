export default function Navbar({onLogout }) {
  return (
    <div style={{
      background: "rgba(10,10,20,0.95)",
      borderBottom: "1px solid rgba(0,255,136,0.15)",
      padding: "0 32px",
      height: "60px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
      backdropFilter: "blur(10px)",
      position: "sticky", top: 0, zIndex: 100,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        {/* icono terminal */}
        <div style={{
          width: "28px", height: "28px",
          border: "1px solid rgba(0,255,136,0.4)",
          borderRadius: "4px",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <span style={{ color: "#00ff88", fontSize: "12px" }}>▸</span>
        </div>
        <span style={{ color: "#ffffff", fontSize: "13px", fontWeight: "700", letterSpacing: "2px" }}>
          MONITOR<span style={{ color: "#00ff88" }}>DASH</span>
        </span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>

        <button
          onClick={onLogout}
          style={{
            padding: "7px 16px",
            background: "transparent",
            border: "1px solid rgba(255,68,68,0.4)",
            borderRadius: "2px", color: "#ff4444",
            fontFamily: "inherit", fontSize: "10px",
            letterSpacing: "2px", cursor: "pointer",
            transition: "all 0.2s",
          }}
          onMouseEnter={e => {
            e.target.style.background = "rgba(255,68,68,0.1)";
            e.target.style.boxShadow = "0 0 12px rgba(255,68,68,0.2)";
          }}
          onMouseLeave={e => {
            e.target.style.background = "transparent";
            e.target.style.boxShadow = "none";
          }}
        >
          SALIR
        </button>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}