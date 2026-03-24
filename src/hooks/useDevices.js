import { useState, useEffect } from "react";
import { io } from "socket.io-client";
const API = import.meta.env.VITE_API_URL;

export function useDevices(token) {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    if (!token) return;

    const fetchDevices = async () => {
      const res = await fetch(`${API}/devices`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) setDevices(await res.json());
    };

    fetchDevices();

    const socket = io(API);
    socket.on("devices:update", fetchDevices);
    return () => socket.disconnect();
  }, [token]);

  const deleteDevice = async (id) => {
    await fetch(`${API}/devices/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
  };

  const updateDevice = async (id, name) => {
    await fetch(`${API}/devices/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name }),
    });
  };

  return { devices, deleteDevice, updateDevice };
}

