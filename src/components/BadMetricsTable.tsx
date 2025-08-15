import { currentTest } from '@/data/mockData';

export default function BadMetricsTable() {
  const { control, variant } = currentTest.variants;

  return (
    <div className="border border-gray-300 bg-gray-50 p-1 mb-2">
      <h2 className="text-sm font-bold text-gray-700 mb-1">Variant Performance Comparison Data</h2>
      <table className="w-full text-xs border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 p-1 text-left text-gray-600">Metric</th>
            <th className="border border-gray-400 p-1 text-left text-gray-600">Control ({control.name})</th>
            <th className="border border-gray-400 p-1 text-left text-gray-600">Variant ({variant.name})</th>
            <th className="border border-gray-400 p-1 text-left text-gray-600">Difference</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-300">
            <td className="border border-gray-400 p-1 bg-gray-100 font-semibold text-gray-600">Visitors</td>
            <td className="border border-gray-400 p-1 text-gray-600">{control.visitors.toLocaleString()}</td>
            <td className="border border-gray-400 p-1 text-gray-600">{variant.visitors.toLocaleString()}</td>
            <td className="border border-gray-400 p-1 text-gray-600">{(variant.visitors - control.visitors).toLocaleString()}</td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="border border-gray-400 p-1 bg-gray-100 font-semibold text-gray-600">Conversions</td>
            <td className="border border-gray-400 p-1 text-gray-600">{control.conversions.toLocaleString()}</td>
            <td className="border border-gray-400 p-1 text-gray-600">{variant.conversions.toLocaleString()}</td>
            <td className="border border-gray-400 p-1 text-gray-600">{(variant.conversions - control.conversions).toLocaleString()}</td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="border border-gray-400 p-1 bg-gray-100 font-semibold text-gray-600">Revenue ($)</td>
            <td className="border border-gray-400 p-1 text-gray-600">${control.revenue.toLocaleString()}</td>
            <td className="border border-gray-400 p-1 text-gray-600">${variant.revenue.toLocaleString()}</td>
            <td className="border border-gray-400 p-1 text-gray-600">${(variant.revenue - control.revenue).toLocaleString()}</td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="border border-gray-400 p-1 bg-gray-100 font-semibold text-gray-600">Conversion Rate (%)</td>
            <td className="border border-gray-400 p-1 text-gray-600">{control.conversionRate}%</td>
            <td className="border border-gray-400 p-1 text-gray-600">{variant.conversionRate}%</td>
            <td className="border border-gray-400 p-1 text-gray-600">{(variant.conversionRate - control.conversionRate).toFixed(2)}%</td>
          </tr>
          <tr className="border-b border-gray-300">
              <td className="border border-gray-400 p-1 bg-gray-100 font-semibold text-gray-600">AOV ($)</td>
            <td className="border border-gray-400 p-1 text-gray-600">${control.averageOrderValue.toFixed(2)}</td>
            <td className="border border-gray-400 p-1 text-gray-600">${variant.averageOrderValue.toFixed(2)}</td>
            <td className="border border-gray-400 p-1 text-gray-600">${(variant.averageOrderValue - control.averageOrderValue).toFixed(2)}</td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="border border-gray-400 p-1 bg-gray-100 font-semibold text-gray-600">Bounce Rate (%)</td>
            <td className="border border-gray-400 p-1 text-gray-600">{control.bounceRate}%</td>
            <td className="border border-gray-400 p-1 text-gray-600">{variant.bounceRate}%</td>
            <td className="border border-gray-400 p-1 text-gray-600">{(variant.bounceRate - control.bounceRate).toFixed(1)}%</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-1 bg-gray-100 font-semibold text-gray-600">Time on Page (s)</td>
            <td className="border border-gray-400 p-1 text-gray-600">{control.timeOnPage}s</td>
            <td className="border border-gray-400 p-1 text-gray-600">{variant.timeOnPage}s</td>
            <td className="border border-gray-400 p-1 text-gray-600">{(variant.timeOnPage - control.timeOnPage)}s</td>
          </tr>
        </tbody>
      </table>
      <p className="text-xs text-gray-500 mt-1">* All metrics calculated from test start date. Revenue figures include tax and shipping.</p>
    </div>
  );
}