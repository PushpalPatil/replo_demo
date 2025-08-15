import { currentTest } from '@/data/mockData';
import RevenueImpactCard from './RevenueImpactCard';
import ConversionRateComparison from './ConversionRateComparison';
import SignificanceBadge from './SignificanceBadge';
import MetricsCards from './MetricsCards';
import TimelineChart from './TimelineChart';

interface GoodDashboardProps {
  onToggleVersion: () => void;
}

export default function GoodDashboard({ onToggleVersion }: GoodDashboardProps) {
  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-600 p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
            <div>
              <h1 className="text-3xl font-bold font-mono text-gray-900 mb-2 font-inter">
                Replo A/B Dashboard
              </h1>
              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6">
                <p className="text-gray-600">
                  <span className="font-medium">Test:</span> {currentTest.testName}
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    currentTest.status === 'running' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    {currentTest.status.charAt(0).toUpperCase() + currentTest.status.slice(1)}
                  </span>
                </div>
                <p className="text-sm text-gray-500">
                  Started {new Date(currentTest.startDate).toLocaleDateString()}
                </p>
              </div>
            </div>
            
            <button
              onClick={onToggleVersion}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-mono font-semibold rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
              style={{ backgroundColor: '#274AE2' }}
            >
              ← Back to Bad Version
            </button>
          </div>
        </div>

        {/* Priority 1: Revenue Impact - Most Important */}
        <RevenueImpactCard />

        {/* Priority 2 & 3: Conversion Rate & Statistical Significance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ConversionRateComparison />
          <SignificanceBadge />
        </div>

        {/* Priority 4: Key Metrics Cards */}
        <div className="space-y-6 mt-15">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-800 font-mono">Key Performance Metrics</h2>
            <div className="text-sm text-gray-500">
              Showing data from {currentTest.timeline.length} days of testing
            </div>
          </div>
          <MetricsCards />
        </div>

        {/* Priority 5: Timeline Chart */}
        <TimelineChart />

        {/* Additional Insights Section */}
        <div className="bg-white rounded-xl border border-gray-400 p-6 shadow-lg mt-15">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-mono">Key Insights & Recommendations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-300 rounded-full mt-2"></div>
                <div>
                  <p className="font-medium text-gray-800">Strong Performance</p>
                  <p className="text-sm text-gray-600">
                    Video background variant shows consistent +17.2% conversion lift across all days
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <p className="font-medium text-gray-800">User Engagement</p>
                  <p className="text-sm text-gray-600">
                    18-second increase in time on page suggests higher content engagement
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                <div>
                  <p className="font-medium text-gray-800">Statistical Confidence</p>
                  <p className="text-sm text-gray-600">
                    94.2% confidence level meets standard significance threshold
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <div>
                  <p className="font-medium text-gray-800">Implementation Ready</p>
                  <p className="text-sm text-gray-600">
                    Test has sufficient data to make implementation decision
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-700 font-medium">
              ✅ <strong>Recommendation:</strong> Implement the video background variant. 
              Expected monthly revenue increase of $12,450 with 95% confidence interval of 8.2% - 22.6% lift.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 py-8">
          <p>Dashboard powered by Replo • Last updated: {new Date().toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}