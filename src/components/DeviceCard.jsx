function connect(device) {
  const a = document.createElement("a");
  a.href = `rustdesk://connect/${device.rustdesk_id}?password=${device.password}`;
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  setTimeout(() => document.body.removeChild(a), 1000);
}

export default function DeviceCard({ device, onDelete, onUpdate }) {
  const isOnline = device.status === "online";

  return (
    <div style={{
      background: "rgba(10,10,20,0.8)",
      border: `1px solid ${isOnline ? "rgba(0,255,136,0.2)" : "rgba(255,255,255,0.07)"}`,
      borderRadius: "4px",
      padding: "20px",
      fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
      position: "relative",
      transition: "border-color 0.2s, box-shadow 0.2s",
      boxShadow: isOnline ? "0 0 20px rgba(0,255,136,0.04)" : "none",
    }}
    onMouseEnter={e => {
      e.currentTarget.style.borderColor = isOnline ? "rgba(0,255,136,0.4)" : "rgba(255,255,255,0.15)";
      e.currentTarget.style.boxShadow = isOnline ? "0 0 30px rgba(0,255,136,0.08)" : "none";
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderColor = isOnline ? "rgba(0,255,136,0.2)" : "rgba(255,255,255,0.07)";
      e.currentTarget.style.boxShadow = isOnline ? "0 0 20px rgba(0,255,136,0.04)" : "none";
    }}>
      {/* esquina decorativa top-right */}
      <div style={{
        position: "absolute", top: "8px", right: "8px",
        width: "10px", height: "10px",
        borderTop: `2px solid ${isOnline ? "#00ff88" : "#444"}`,
        borderRight: `2px solid ${isOnline ? "#00ff88" : "#444"}`,
      }} />

      {/* header */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "12px" }}>
        <div>
          <p style={{ color: "#ffffff", fontWeight: "700", fontSize: "14px", margin: "0 0 4px 0", letterSpacing: "1px" }}>
            {device.name}
          </p>
          <p style={{ color: "#555", fontSize: "11px", margin: 0, letterSpacing: "1px" }}>
            ID: <span style={{ color: "#888" }}>{device.rustdesk_id}</span>
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <div style={{
            width: "6px", height: "6px", borderRadius: "50%",
            background: isOnline ? "#00ff88" : "#444",
            boxShadow: isOnline ? "0 0 6px #00ff88" : "none",
          }} />
          <span style={{
            fontSize: "9px", letterSpacing: "2px",
            color: isOnline ? "#00ff88" : "#555",
          }}>
            {device.status.toUpperCase()}
          </span>
        </div>
      </div>

      {/* separador */}
      <div style={{
        height: "1px",
        background: `linear-gradient(90deg, ${isOnline ? "rgba(0,255,136,0.2)" : "rgba(255,255,255,0.05)"}, transparent)`,
        marginBottom: "16px",
      }} />

      {/* botones */}
      <div style={{ display: "flex", gap: "8px" }}>
        <button
          onClick={() => connect(device)}
          disabled={!isOnline}
          style={{
            flex: 1, padding: "9px 0",
            background: isOnline ? "rgba(0,255,136,0.1)" : "rgba(255,255,255,0.03)",
            border: `1px solid ${isOnline ? "rgba(0,255,136,0.3)" : "rgba(255,255,255,0.08)"}`,
            borderRadius: "2px",
            color: isOnline ? "#00ff88" : "#333",
            fontFamily: "inherit", fontSize: "10px",
            letterSpacing: "1px", cursor: isOnline ? "pointer" : "not-allowed",
            transition: "all 0.2s",
          }}
          onMouseEnter={e => { if (isOnline) e.target.style.background = "rgba(0,255,136,0.2)"; }}
          onMouseLeave={e => { if (isOnline) e.target.style.background = "rgba(0,255,136,0.1)"; }}
        >
          CONECTAR
        </button>

        <button
          onClick={() => {
            const newName = prompt("Nuevo nombre:");
            if (newName) onUpdate(device.id, newName);
          }}
          style={{
            padding: "9px 14px",
            background: "transparent",
            border: "1px solid rgba(255,170,0,0.25)",
            borderRadius: "2px", color: "#ffaa00",
            fontFamily: "inherit", fontSize: "10px",
            letterSpacing: "1px", cursor: "pointer",
            transition: "all 0.2s",
          }}
          onMouseEnter={e => e.target.style.background = "rgba(255,170,0,0.08)"}
          onMouseLeave={e => e.target.style.background = "transparent"}
        >
          EDITAR
        </button>

        <button
          onClick={() => onDelete(device.id)}
          style={{
            padding: "9px 14px",
            background: "transparent",
            border: "1px solid rgba(255,68,68,0.25)",
            borderRadius: "2px", color: "#ff4444",
            fontFamily: "inherit", fontSize: "10px",
            letterSpacing: "1px", cursor: "pointer",
            transition: "all 0.2s",
          }}
          onMouseEnter={e => e.target.style.background = "rgba(255,68,68,0.08)"}
          onMouseLeave={e => e.target.style.background = "transparent"}
        >
          ELIMINAR
        </button>
      </div>
    </div>
  );
}