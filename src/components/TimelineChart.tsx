'use client';

import { currentTest } from '@/data/mockData';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export default function TimelineChart() {
  const chartData = currentTest.timeline.map(day => ({
    date: new Date(day.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    fullDate: day.date,
    controlRevenue: day.controlRevenue,
    variantRevenue: day.variantRevenue,
    controlConversions: day.controlConversions,
    variantConversions: day.variantConversions,
    revenueGap: day.variantRevenue - day.controlRevenue,
    conversionGap: day.variantConversions - day.controlConversions
  }));

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-medium text-gray-800 mb-2">{label}</p>
          <div className="space-y-1">
            <div className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                <span className="text-sm text-gray-600">Control Revenue:</span>
              </div>
              <span className="text-sm font-medium text-gray-700">
                ${data.controlRevenue.toLocaleString()}
              </span>
            </div>
            <div className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Variant Revenue:</span>
              </div>
              <span className="text-sm font-medium text-blue-600">
                ${data.variantRevenue.toLocaleString()}
              </span>
            </div>
            <hr className="my-2" />
            <div className="flex items-center justify-between space-x-4">
              <span className="text-sm text-gray-600">Daily Gain:</span>
              <span className={`text-sm font-bold ${data.revenueGap > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {data.revenueGap > 0 ? '+' : ''}${data.revenueGap.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white border border-gray-400 rounded-md p-6 mt-15 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 font-mono"> Performance Timeline</h2>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            <span className="text-sm text-gray-600 font-mono font-semibold">Control</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-sm text-gray-600 font-mono font-semibold">Variant</span>
          </div>
        </div>
      </div>

      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="date"
              stroke="#6b7280"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#6b7280"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="controlRevenue"
              stroke="#9ca3af"
              strokeWidth={3}
              dot={{ fill: '#9ca3af', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#9ca3af', strokeWidth: 2 }}
            />
            <Line
              type="monotone"
              dataKey="variantRevenue"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#3b82f6', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 p-4 bg-blue-50 rounded-lg border" style={{ borderColor: 'var(--blue-project)' }}>
        <div className="flex items-center justify-between">
          <p className="text-sm text-blue-700 font-mono">
            <span className="font-semibold font-mono">Trend Analysis:</span> Variant consistently outperforms control with growing revenue gap over time.
          </p>
          <div className="text-right">
            <p className="text-sm text-blue-600 font-mono font-semibold">Current daily advantage</p>
            <p className="text-lg font-bold text-blue-700">
              +${(chartData[chartData.length - 1]?.revenueGap || 0).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}