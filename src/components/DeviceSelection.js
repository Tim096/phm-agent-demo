import React, { useContext } from "react";
import { AppContext } from "../App";

export default function DeviceSelection() {
  const { devices, selectedDevice, setSelectedDevice } = useContext(AppContext);

  return (
    <aside className="w-56 bg-white shadow h-[calc(100vh-64px)] p-4">
      <h2 className="text-lg font-semibold mb-4 text-blue-700">設備選擇</h2>
      <ul>
        {devices.map(device => (
          <li key={device.id}>
            <button
              onClick={() => setSelectedDevice(device.id)}
              className={`block w-full text-left px-3 py-2 rounded mb-2 ${
                selectedDevice === device.id
                  ? "bg-blue-600 text-white"
                  : "hover:bg-blue-100"
              }`}
            >
              {device.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
