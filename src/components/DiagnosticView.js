import React from "react";

export default function DiagnosticView() {
  return (
    <section>
      <h2 className="text-xl font-bold mb-4">診斷視圖</h2>
      <div className="bg-white rounded shadow p-6">
        <p>這裡顯示選定設備的診斷資訊、異常分析等。</p>
        {/* 可根據需求擴充內容和圖表 */}
      </div>
    </section>
  );
}
