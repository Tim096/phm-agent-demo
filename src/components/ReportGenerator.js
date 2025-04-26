import React from "react";

export default function ReportGenerator() {
  return (
    <section>
      <h2 className="text-xl font-bold mb-4">報告生成器</h2>
      <div className="bg-white rounded shadow p-6">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          下載分析報告
        </button>
        <p className="mt-2 text-gray-500">（此按鈕可連接後端導出PDF/Excel等報告）</p>
      </div>
    </section>
  );
}
