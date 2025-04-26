import React, { useState, createContext } from "react";
import Header from "./components/Header";
import DeviceSelection from "./components/DeviceSelection";
import Dashboard from "./components/Dashboard";
import DiagnosticView from "./components/DiagnosticView";
import HealthAssessment from "./components/HealthAssessment";
import PredictionView from "./components/PredictionView";
import ReportGenerator from "./components/ReportGenerator";

// 全局狀態Context
export const AppContext = createContext();

const devicesMock = [
  { id: "tool-1", name: "設備A" },
  { id: "tool-2", name: "設備B" },
  { id: "tool-3", name: "設備C" },
];

export default function App() {
  const [selectedDevice, setSelectedDevice] = useState(devicesMock[0].id);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [devices] = useState(devicesMock);

  return (
    <AppContext.Provider value={{ selectedDevice, setSelectedDevice, activeTab, setActiveTab, devices }}>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <div className="flex">
          <DeviceSelection />
          <main className="flex-1 p-6">
            {activeTab === "dashboard" && <Dashboard />}
            {activeTab === "diagnostic" && <DiagnosticView />}
            {activeTab === "health" && <HealthAssessment />}
            {activeTab === "prediction" && <PredictionView />}
            {activeTab === "report" && <ReportGenerator />}
          </main>
        </div>
      </div>
    </AppContext.Provider>
  );
}
