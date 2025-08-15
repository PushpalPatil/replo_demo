import { currentTest, revenueImpactCalculation } from '@/data/mockData';
import BadMetricsTable from './BadMetricsTable';
import BadTimelineTable from './BadTimelineTable';

interface BadDashboardProps {
  onToggleVersion: () => void;
}

export default function BadDashboard({ onToggleVersion }: BadDashboardProps) {
  return (
    <div className="bg-gray-100 min-h-screen p-1">
      <div className="bg-white border border-gray-300 m-1">
        <div className="bg-gray-200 border-b border-gray-300 p-1">
          <h1 className="text-sm font-bold text-gray-800">A/B Test Dashboard - Admin Panel v1.2</h1>
          <p className="text-xs text-gray-600">Current Test Status: {currentTest.status.toUpperCase()}</p>
        </div>
        
        <div className="p-2">
          <div className="border border-gray-300 bg-gray-50 p-1 mb-2">
            <h2 className="text-sm font-bold text-gray-700 mb-1">Test Information</h2>
            <table className="w-full text-xs border-collapse border border-gray-600">
              <tbody>
                <tr className="border-b border-gray-600">
                  <td className="border-r border-gray-600 p-1 bg-gray-100 text-gray-600">Test ID:</td>
                  <td className="p-1 text-gray-600">{currentTest.testId}</td>
                  <td className="border-r border-gray-600 p-1 bg-gray-100 text-gray-600">Start Date:</td>
                  <td className="p-1 text-gray-600">{currentTest.startDate}</td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="border-r border-gray-600 p-1 bg-gray-100 text-gray-600">Test Name:</td>
                  <td className="p-1 text-gray-600">{currentTest.testName}</td>
                  <td className="border-r border-gray-600 p-1 bg-gray-100 text-gray-600">Traffic Split:</td>
                  <td className="p-1 text-gray-600">{currentTest.metadata.trafficSplit}%</td>
                </tr>
                <tr>
                  <td className="border-r border-gray-600 p-1 bg-gray-100 text-gray-600">Description:</td>
                  <td className="p-1 text-gray-600" colSpan={3}>{currentTest.description}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="border border-gray-600 bg-gray-50 p-1 mb-2">
            <h2 className="text-sm font-bold text-gray-700 mb-1">Statistical Data</h2>
            <table className="w-full text-xs border-collapse border border-gray-600">
              <tbody>
                <tr className="border-b border-gray-600">
                  <td className="border-r border-gray-600 p-1 bg-gray-100 text-gray-600">Significance:</td>
                  <td className="p-1 text-gray-600">{currentTest.metadata.significance}%</td>
                  <td className="border-r border-gray-600 p-1 bg-gray-100 text-gray-600">Device:</td>
                  <td className="p-1 text-gray-600">{currentTest.metadata.device}</td>
                </tr>
                <tr>
                  <td className="border-r border-gray-200 p-1 bg-gray-100 text-gray-600">Est. Duration:</td>
                  <td className="p-1 text-gray-600">{currentTest.metadata.estimatedDuration} days</td>
                  <td className="border-r border-gray-200 p-1 bg-gray-100 text-gray-600">Projected Lift:</td>
                  <td className="p-1 text-gray-600">{revenueImpactCalculation.projectedLift}%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <BadMetricsTable />
          
          <BadTimelineTable />

          <div className="mt-2 text-center">
            <button 
              onClick={onToggleVersion}
              className="bg-red-600 text-white px-8 py-3 text-lg font-bold border border-red-700 hover:bg-red-700 transition-colors"
            >
              MAKE THIS BETTER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}