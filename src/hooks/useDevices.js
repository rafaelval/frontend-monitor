import { useState, useEffect } from "react";
import { io } from "socket.io-client";

export function useDevices(token) {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    if (!token) return;

    const fetchDevices = async () => {
      const res = await fetch("http://localhost:3000/devices", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) setDevices(await res.json());
    };

    fetchDevices();

    const socket = io("http://localhost:3000");
    socket.on("devices:update", fetchDevices);
    return () => socket.disconnect();
  }, [token]);

  const deleteDevice = async (id) => {
    await fetch(`http://localhost:3000/devices/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    // refetch via socket event, el servidor emite devices:update
  };

  const updateDevice = async (id, name) => {
    await fetch(`http://localhost:3000/devices/${id}`, {
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
