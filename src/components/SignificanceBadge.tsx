import { currentTest, revenueImpactCalculation } from '@/data/mockData';

export default function SignificanceBadge() {
  const significance = currentTest.metadata.significance;
  const { winnerPrediction, sampleSizeProgress } = revenueImpactCalculation;
  
  const isSignificant = significance >= 95;
  const sampleSizePercent = (sampleSizeProgress.current / sampleSizeProgress.required) * 100;

  return (
    <div className="bg-white rounded-xl border border-gray-400 p-6 shadow-md hover:shadow-md transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-900 font-mono">Statistical Confidence</h2>
        <div className="bg-yellow-200 text-yellow-700 px-3 py-1 rounded-full text-sm font-normal font-mono">
          {significance}%
        </div>
      </div>

      {/* Large circular progress for confidence */}
      <div className="text-center mb-6">
        <div className="relative w-32 h-32 mx-auto mb-4">
          <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#e5e5e5"
              strokeWidth="2"
            />
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke={isSignificant ? "#22c55e" : "#eab308"}
              strokeWidth="2"
              strokeDasharray={`${significance}, 100`}
              className="transition-all duration-1000"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">{significance}%</p>
              <p className="text-xs text-gray-500">confident</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sample size progress bar */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm text-gray-600">Sample Size</p>
          <p className="text-sm font-medium text-gray-700">{sampleSizePercent.toFixed(0)}%</p>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="h-2 rounded-full transition-all duration-1000"
            style={{ 
              backgroundColor: '#274AE2',
              width: `${Math.min(sampleSizePercent, 100)}%`
            }}
          ></div>
        </div>
      </div>

      {/* Winner prediction */}
      <div className="text-center p-3 rounded-lg" style={{ backgroundColor: '#d9effc' }}>
        <p className="text-sm font-semibold font-mono" style={{ color: '#274AE2' }}>
          {winnerPrediction.probability}% chance variant wins
        </p>
      </div>

      {isSignificant && (
        <div className="mt-4 text-center p-3 rounded-lg" style={{ backgroundColor: '#C3ECC9' }}>
          <p className="text-sm font-bold text-green-700">
            ✅ Statistically significant - safe to implement
          </p>
        </div>
      )}
    </div>
  );
}