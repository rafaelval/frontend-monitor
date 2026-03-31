import { useAuth } from "./hooks/useAuth";
import { useDevices } from "./hooks/useDevices";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";
import DeviceCard from "./components/DeviceCard";

function App() {
  const { token, loading, login, logout } = useAuth();
  const { devices, deleteDevice, updateDevice } = useDevices(token);

  if (!token) return <LoginForm onLogin={login} loading={loading} />;

  return (
  <div style={{ minHeight: "100vh", background: "#0a0a0f" }}>
    <Navbar onLogout={logout} />
    <div style={{ padding: "32px" }}>
      <div style={{ marginBottom: "24px", display: "flex", alignItems: "center", gap: "12px" }}>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          color: "#00ff88", fontSize: "10px", letterSpacing: "3px"
        }}>
          ▸ EQUIPOS CONECTADOS
        </span>
        <div style={{ flex: 1, height: "1px", background: "rgba(0,255,136,0.1)" }} />
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          color: "#333", fontSize: "10px"
        }}>
          {devices.length} dispositivos
        </span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px" }}>
        {devices.map((device) => (
          <DeviceCard
            key={device.id}
            device={device}
            onDelete={deleteDevice}
            onUpdate={updateDevice}
          />
        ))}
      </div>
    </div>
  </div>
);
}

export default App;