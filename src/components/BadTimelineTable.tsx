import { currentTest } from '@/data/mockData';

export default function BadTimelineTable() {
  const timeline = currentTest.timeline;

  return (
    <div className="border border-gray-300 bg-gray-50 p-1 mb-2">
      <h2 className="text-sm font-bold text-gray-700 mb-1">Daily Performance Timeline Data (Raw Numbers)</h2>
      <table className="w-full text-xs border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 p-1 text-left text-gray-600">Date</th>
            <th className="border border-gray-400 p-1 text-left text-gray-600">Control Conv</th>
            <th className="border border-gray-400 p-1 text-left text-gray-600">Variant Conv</th>
            <th className="border border-gray-400 p-1 text-left text-gray-600">Control Rev ($)</th>
            <th className="border border-gray-400 p-1 text-left text-gray-600">Variant Rev ($)</th>
            <th className="border border-gray-400 p-1 text-left text-gray-600">Conv Diff</th>
            <th className="border border-gray-400 p-1 text-left text-gray-600">Rev Diff ($)</th>
          </tr>
        </thead>
        <tbody>
          {timeline.map((day, index) => {
            const convDiff = day.variantConversions - day.controlConversions;
            const revDiff = day.variantRevenue - day.controlRevenue;
            
            return (
              <tr key={day.date} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="border border-gray-400 p-1 text-gray-600">{day.date}</td>
                <td className="border border-gray-400 p-1 text-gray-600">{day.controlConversions}</td>
                <td className="border border-gray-400 p-1 text-gray-600">{day.variantConversions}</td>
                <td className="border border-gray-400 p-1 text-gray-600">{day.controlRevenue.toLocaleString()}</td>
                <td className="border border-gray-400 p-1 text-gray-600">{day.variantRevenue.toLocaleString()}</td>
                <td className="border border-gray-400 p-1 text-gray-600">{convDiff > 0 ? '+' : ''}{convDiff}</td>
                <td className="border border-gray-400 p-1 text-gray-600">{revDiff > 0 ? '+' : ''}${revDiff.toLocaleString()}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="mt-1 p-1 bg-gray-100 border border-gray-300">
        <p className="text-xs text-gray-600 text-gray-600">
          <strong>Notes:</strong> Conv = Conversions, Rev = Revenue. 
          Data refreshed every 4 hours. 
          Differences calculated as Variant minus Control. 
          All currency in USD.
        </p>
      </div>
    </div>
  );
}