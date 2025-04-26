import React, { useContext } from "react";
import { AppContext } from "../App";

const tabs = [
  { key: "dashboard", label: "監控總覽" },
  { key: "diagnostic", label: "診斷" },
  { key: "health", label: "健康評估" },
  { key: "prediction", label: "預測" },
  { key: "report", label: "報告生成" },
];

export default function Header() {
  const { activeTab, setActiveTab } = useContext(AppContext);

  return (
    <header className="bg-white shadow px-8 py-4 flex items-center justify-between">
      <div className="text-2xl font-bold text-blue-700">半導體PHM智能代理系統</div>
      <nav className="flex space-x-6">
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-3 py-1 rounded-md font-medium ${
              activeTab === tab.key
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-blue-100"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </header>
  );
}
