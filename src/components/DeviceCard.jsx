function connect(device) {
  const url = `rustdesk://connect/${device.rustdesk_id}?password=${device.password}`;
  
  const iframe = document.createElement("iframe");
  iframe.style.display = "none";
  iframe.src = url;
  document.body.appendChild(iframe);

  setTimeout(() => {
    document.body.removeChild(iframe);
  }, 2000);
}

export default function DeviceCard({ device, onDelete, onUpdate }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <p className="font-bold">{device.name}</p>
      <p className="text-sm text-gray-500">{device.rustdesk_id}</p>
      <span
        className={`text-xs px-2 py-1 rounded-full ${
          device.status === "online"
            ? "bg-green-100 text-green-600"
            : "bg-red-100 text-red-600"
        }`}
      >
        {device.status}
      </span>
      <div className="mt-3 flex gap-2">
        <button
          onClick={() => connect(device)}
          disabled={device.status === "offline"}
          className="bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white px-3 py-1 rounded"
        >
          Conectar
        </button>
        <button
          onClick={() => {
            const newName = prompt("Nuevo nombre:");
            if (newName) onUpdate(device.id, newName);
          }}
          className="bg-yellow-500 text-white px-3 py-1 rounded"
        >
          Editar
        </button>
        <button
          onClick={() => onDelete(device.id)}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}