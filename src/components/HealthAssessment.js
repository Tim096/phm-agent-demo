import React from "react";
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from "recharts";

const healthData = [{ name: "健康指數", value: 86, fill: "#27AEDB" }];

export default function HealthAssessment() {
  return (
    <section>
      <h2 className="text-xl font-bold mb-4">健康評估</h2>
      <div className="bg-white rounded shadow p-6">
        <ResponsiveContainer width="100%" height={200}>
          <RadialBarChart innerRadius="80%" outerRadius="100%" data={healthData} startAngle={180} endAngle={0}>
            <RadialBar minAngle={15} background clockWise dataKey="value" />
            <Legend iconSize={10} layout="vertical" verticalAlign="middle" align="right" />
          </RadialBarChart>
        </ResponsiveContainer>
        <div className="mt-4 text-center text-lg font-semibold text-blue-700">
          健康指數：86
        </div>
      </div>
    </section>
  );
}
