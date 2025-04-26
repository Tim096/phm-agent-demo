import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const predData = [
  { time: "明天", value: 92 },
  { time: "後天", value: 88 },
  { time: "三天後", value: 85 },
];

export default function PredictionView() {
  return (
    <section>
      <h2 className="text-xl font-bold mb-4">預測視圖</h2>
      <div className="bg-white rounded shadow p-6">
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={predData}>
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#8437DE" />
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-4 text-center text-lg font-semibold text-purple-700">
          未來趨勢預測
        </div>
      </div>
    </section>
  );
}
