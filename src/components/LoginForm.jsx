import { useState } from "react";

export default function LoginForm({ onLogin, loading }) {
  const [form, setForm] = useState({ email: "", password: "" });

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0a0f",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* grid de fondo */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `linear-gradient(rgba(0,255,136,0.03) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(0,255,136,0.03) 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
      }} />

      {/* glow central */}
      <div style={{
        position: "absolute",
        width: "600px", height: "600px",
        background: "radial-gradient(circle, rgba(0,255,136,0.06) 0%, transparent 70%)",
        borderRadius: "50%",
        pointerEvents: "none",
      }} />

      <div style={{
        position: "relative",
        width: "380px",
        border: "1px solid rgba(0,255,136,0.2)",
        borderRadius: "4px",
        background: "rgba(10,10,20,0.9)",
        padding: "40px",
        boxShadow: "0 0 40px rgba(0,255,136,0.08), inset 0 0 40px rgba(0,0,0,0.5)",
      }}>
        {/* esquinas decorativas */}
        {["topLeft","topRight","bottomLeft","bottomRight"].map((pos) => (
          <div key={pos} style={{
            position: "absolute",
            width: "12px", height: "12px",
            borderColor: "#00ff88",
            borderStyle: "solid",
            borderWidth: pos.includes("top") && pos.includes("Left") ? "2px 0 0 2px"
              : pos.includes("top") ? "2px 2px 0 0"
              : pos.includes("Left") ? "0 0 2px 2px" : "0 2px 2px 0",
            top: pos.includes("top") ? "8px" : "auto",
            bottom: pos.includes("bottom") ? "8px" : "auto",
            left: pos.includes("Left") ? "8px" : "auto",
            right: pos.includes("Right") ? "8px" : "auto",
          }} />
        ))}

        <div style={{ marginBottom: "32px" }}>
          <p style={{ color: "#00ff88", fontSize: "11px", letterSpacing: "3px", marginBottom: "8px" }}>
            SISTEMA DE MONITOREO
          </p>
          <h2 style={{ color: "#ffffff", fontSize: "22px", fontWeight: "700", margin: 0, letterSpacing: "1px" }}>
            ACCESO AL PANEL
          </h2>
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label style={{ display: "block", color: "#00ff88", fontSize: "10px", letterSpacing: "2px", marginBottom: "6px" }}>
            EMAIL
          </label>
          <input
            style={{
              width: "100%", padding: "12px",
              background: "rgba(0,255,136,0.04)",
              border: "1px solid rgba(0,255,136,0.2)",
              borderRadius: "2px", color: "#e0e0e0",
              fontFamily: "inherit", fontSize: "13px",
              outline: "none", boxSizing: "border-box",
              transition: "border-color 0.2s",
            }}
            onFocus={e => e.target.style.borderColor = "rgba(0,255,136,0.6)"}
            onBlur={e => e.target.style.borderColor = "rgba(0,255,136,0.2)"}
            placeholder="usuario@empresa.com"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>

        <div style={{ marginBottom: "28px" }}>
          <label style={{ display: "block", color: "#00ff88", fontSize: "10px", letterSpacing: "2px", marginBottom: "6px" }}>
            CONTRASEÑA
          </label>
          <input
            style={{
              width: "100%", padding: "12px",
              background: "rgba(0,255,136,0.04)",
              border: "1px solid rgba(0,255,136,0.2)",
              borderRadius: "2px", color: "#e0e0e0",
              fontFamily: "inherit", fontSize: "13px",
              outline: "none", boxSizing: "border-box",
              transition: "border-color 0.2s",
            }}
            onFocus={e => e.target.style.borderColor = "rgba(0,255,136,0.6)"}
            onBlur={e => e.target.style.borderColor = "rgba(0,255,136,0.2)"}
            type="password"
            placeholder="••••••••"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </div>

        <button
          onClick={() => onLogin(form.email, form.password)}
          style={{
            width: "100%", padding: "14px",
            background: loading ? "rgba(0,255,136,0.1)" : "rgba(0,255,136,0.12)",
            border: "1px solid rgba(0,255,136,0.4)",
            borderRadius: "2px", color: "#00ff88",
            fontFamily: "inherit", fontSize: "12px",
            letterSpacing: "3px", fontWeight: "700",
            cursor: loading ? "not-allowed" : "pointer",
            transition: "all 0.2s",
          }}
          onMouseEnter={e => {
            if (!loading) {
              e.target.style.background = "rgba(0,255,136,0.2)";
              e.target.style.boxShadow = "0 0 20px rgba(0,255,136,0.2)";
            }
          }}
          onMouseLeave={e => {
            e.target.style.background = "rgba(0,255,136,0.12)";
            e.target.style.boxShadow = "none";
          }}
        >
          {loading ? "VERIFICANDO..." : "INICIAR SESIÓN"}
        </button>
      </div>
    </div>
  );
}