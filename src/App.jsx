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
    <div className="min-h-screen bg-gray-100">
      <Navbar onLogout={logout} />
      <div className="p-6">
        <h2 className="text-lg font-semibold mb-4">Equipos conectados</h2>
        <div className="grid md:grid-cols-3 gap-6">
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