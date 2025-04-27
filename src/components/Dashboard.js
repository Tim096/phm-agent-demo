import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

// 假聊天資料
const chatData = [
  { sender: "user", text: "我需要分析微蝕刻機ETCH-01和ETCH-02的機差表現" },
  { sender: "ai", text: "好的，我可以幫您分析機差。請問：1. 想分析哪個階段的數據？2. 關注哪些具體參數？" },
  { sender: "user", text: "最近兩周的數據，主要關注CF氣體流量在Metal_Etch製程中的表現，用EM算法分析一下" },
  { sender: "ai", text: "正在處理您的請求... 訪問ETCH-01/02的CF流量數據，提取Metal_Etch製程的記錄，請用機差分析算法" },
  { sender: "ai", text: "分析完成！主要發現：\n• ETCH-01的CF流量控制穩定性\n• ETCH-02低17.2%\n• 高流量區(>85sccm)差異最大\n已在右側顯示詳細分析結果和可視化圖表" }
];

// 假折線圖資料
const lineData = [
  { date: "4/11", diff: 8 }, { date: "4/12", diff: 10 }, { date: "4/13", diff: 12 },
  { date: "4/14", diff: 11 }, { date: "4/15", diff: 13 }, { date: "4/16", diff: 14 },
  { date: "4/17", diff: 13 }, { date: "4/18", diff: 15 }, { date: "4/19", diff: 16 },
  { date: "4/20", diff: 15 }, { date: "4/21", diff: 17 }, { date: "4/22", diff: 18 },
  { date: "4/23", diff: 17 }
];

// 假分段條資料
const barData = [
  { name: "低流量(<60 sccm)", value: 5.2, color: "#27ADEB" },
  { name: "中流量(60-85 sccm)", value: 9.3, color: "#4EDE7C" },
  { name: "高流量(>85 sccm)", value: 18.7, color: "#FFBE42" }
];

// 假參數
const inputParams = [
  { label: "設備", value: "ETCH-01, ETCH-02" },
  { label: "區間", value: "2025-04-11 至 2025-04-25" },
  { label: "參數", value: "CF流量 (sccm)" },
  { label: "製程", value: "Metal_Etch" },
  { label: "分析方法", value: "EM機差算法" }
];

export default function Dashboard() {
  const [input, setInput] = useState("");
  const [chats, setChats] = useState(chatData);
  const [showDoc, setShowDoc] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    setChats([...chats, { sender: "user", text: input }]);
    setInput("");
    // 假裝AI回應
    setTimeout(() => {
      setChats(c => [...c, { sender: "ai", text: "（AI回覆內容，僅為展示用途）" }]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Document Button */}
      <div className="flex justify-end pt-2 pr-4 pb-4 pl-4 bg-white shadow mb-6">
        <button
          className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 font-semibold"
          onClick={() => setShowDoc(true)}
        >
          Document
        </button>
      </div>
      {/* Document Modal */}
      {showDoc && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white max-w-3xl w-full max-h-[85vh] overflow-y-auto rounded-xl shadow-xl relative">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-2xl font-bold"
              onClick={() => setShowDoc(false)}
              aria-label="Close"
            >
              ×
            </button>
            <iframe
              title="PHM Document"
              src={"PHM 智能化.html"}
              className="w-full min-h-[80vh] rounded-b-xl"
              style={{ border: "none" }}
            ></iframe>
          </div>
        </div>
      )}
      <div className="flex gap-4 h-[calc(100vh-120px)]">
        {/* 左側：聊天助手 */}
        <section className="flex flex-col w-[28%] bg-white rounded-xl shadow p-4">
          <h2 className="text-lg font-semibold mb-2 text-blue-900">自然語言算法助手</h2>
          <div className="flex-1 overflow-y-auto space-y-3 mb-2">
            {chats.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.sender === "user" ? "justify-start" : "justify-end"}`}>
                <div className={`rounded-lg px-3 py-2 text-sm whitespace-pre-line
                  ${msg.sender === "user" ? "bg-gray-100 text-gray-900 mr-8" : "bg-blue-100 text-blue-900 ml-8"}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <div className="flex mt-2">
            <input
              className="flex-1 border rounded-l px-2 py-1 text-sm focus:outline-none"
              placeholder="請輸入您的問題..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleSend()}
            />
            <button
              className="bg-blue-600 text-white px-4 py-1 rounded-r hover:bg-blue-700"
              onClick={handleSend}
            >送出</button>
          </div>
        </section>

        {/* 中間：算法狀態 */}
        <section className="flex flex-col w-[35%] bg-white rounded-xl shadow p-4">
          <h2 className="text-lg font-semibold mb-2 text-blue-900">算法執行狀態</h2>
          <div className="mb-2">
            <div className="text-sm text-gray-500">EM機差分析算法</div>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs text-gray-400">算法版本：</span>
              <span className="text-xs">v2.35 (2025.01)</span>
              <span className="text-xs ml-4">狀態：</span>
              <span className="text-green-600 font-semibold text-xs">完成</span>
            </div>
            <div className="text-xs text-gray-400 mt-1">
              樣本數：4,320　異常檢出：1.7%　運算時間：5秒
            </div>
          </div>
          <div className="mb-2">
            <div className="font-semibold text-gray-700 mb-1">輸入參數</div>
            <ul className="text-xs text-gray-600 grid grid-cols-2 gap-x-4">
              {inputParams.map((p, i) => (
                <li key={i}><span className="font-medium">{p.label}：</span>{p.value}</li>
              ))}
            </ul>
          </div>
          <div className="mb-2">
            <div className="font-semibold text-gray-700 mb-1">結果摘要</div>
            <ul className="text-xs">
              <li><span className="text-orange-500 font-bold">12.7%</span>（需注意）</li>
              <li><span className="text-green-600 font-bold">5.2%</span>（正常）</li>
              <li><span className="text-blue-600 font-bold">9.3%</span>（正常）</li>
              <li><span className="text-yellow-500 font-bold">18.7%</span>（需注意）</li>
            </ul>
          </div>
          <button className="bg-purple-600 text-white py-2 rounded mt-auto hover:bg-purple-700 text-sm font-semibold">導出PDF報告</button>
        </section>

        {/* 右側：視覺化 */}
        <section className="flex flex-col w-[37%] bg-white rounded-xl shadow p-4">
          <h2 className="text-lg font-semibold mb-2 text-blue-900">機差分析視覺化</h2>
          <div className="text-sm font-semibold mb-1">CF.流量控制機差：ETCH-01 vs ETCH-02</div>
          <div className="text-xs text-gray-400 mb-2">Metal_Etch製程 | 2025-04-11至2025-04-25</div>
          <div className="bg-gray-50 rounded p-2 mb-3">
            <ResponsiveContainer width="100%" height={120}>
              <LineChart data={lineData}>
                <CartesianGrid stroke="#eee" />
                <XAxis dataKey="date" fontSize={10} />
                <YAxis fontSize={10} />
                <Tooltip />
                <Line type="monotone" dataKey="diff" stroke="#8437DE" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
            <div className="text-xs text-gray-500 text-center">機差時間趨勢</div>
          </div>
          <div className="mb-3">
            <div className="font-semibold text-xs mb-1">不同流量範圍的機差</div>
            <div className="space-y-1">
              {barData.map((d, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-28 text-xs">{d.name}</span>
                  <div className="flex-1 bg-gray-200 h-3 rounded">
                    <div
                      className="h-3 rounded"
                      style={{ width: `${d.value}%`, background: d.color }}
                    ></div>
                  </div>
                  <span className="text-xs font-semibold" style={{ color: d.color }}>{d.value}%</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-blue-50 rounded p-2">
            <div className="font-semibold text-xs mb-1">改善建議</div>
            <ul className="text-xs list-disc ml-5 text-blue-900">
              <li>檢視ETCH-01的CF流量控制邊緣，特別是&gt;85sccm的高流量區</li>
              <li>在下次PM時優先檢查ETCH-01的MFC校正曲線</li>
              <li>暫時限制ETCH-01用於低流量型製程</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
