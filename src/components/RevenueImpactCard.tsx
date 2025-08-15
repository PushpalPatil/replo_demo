import { revenueImpactCalculation, currentTest } from '@/data/mockData';

export default function RevenueImpactCard() {
  const revenueGain = currentTest.variants.variant.revenue - currentTest.variants.control.revenue;
  const { projectedMonthlyIncrease, confidenceInterval, revenuePerVisitor } = revenueImpactCalculation;

  return (
    <div className="bg--replo-lavender rounded-xl border border-gray-400 p-6 shadow-md hover:shadow-md transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold  text-gray-900 font-mono">Revenue Impact</h2>
        <div className="bg-green-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-normal font-mono">
          +{revenueImpactCalculation.projectedLift}% lift
        </div>
      </div>
      
      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-600 mb-2 font-mono">Current test revenue gain</p>
          <p className="text-3xl font-bold text-green-600 font-mono">
            +${revenueGain.toLocaleString()}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono">
          <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm font-mono">
            <p className="text-sm text-gray-600 mb-1 font-mono">Projected monthly increase</p>
            <p className="text-xl font-bold text-green-600 font-mono">
              +${projectedMonthlyIncrease.toLocaleString()}
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm font-mono">
            <p className="text-sm text-gray-600 mb-1 font-mono">Revenue per visitor lift</p>
            <p className="text-xl font-bold text-green-600 font-mono">
              +{revenuePerVisitor.lift}%
            </p>
            <p className="text-xs text-gray-500 mt-1">
              ${revenuePerVisitor.control} → ${revenuePerVisitor.variant}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 border border-green-300 font-mono">
          <p className="text-sm text-gray-600 mb-2 font-mono">95% Confidence interval</p>
          <div className="flex items-center space-x-2">
            <div className="flex-1 bg-green-100 rounded-full h-3 relative">
              <div className="absolute left-0 w-full h-3 bg-gradient-to-r from-green-200 to-green-600 rounded-full"></div>
              <div className="absolute left-1/3 w-1 h-3 bg-green-700 rounded-full"></div>
              <div className="absolute right-1/4 w-1 h-3 bg-green-700 rounded-full"></div>
            </div>
          </div>
          <div className="flex justify-between text-xs text-gray-600 mt-1">
            <span>{confidenceInterval.lower}%</span>
            <span>{confidenceInterval.upper}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}