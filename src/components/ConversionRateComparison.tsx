import { currentTest } from '@/data/mockData';

export default function ConversionRateComparison() {
  const { control, variant } = currentTest.variants;
  const conversionLift = ((variant.conversionRate - control.conversionRate) / control.conversionRate) * 100;

  return (
    <div className="bg-white rounded-xl border border-gray-400 p-6 shadow-md hover:shadow-md transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-900 font-mono">Conversion Rate</h2>
        <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-normal font-mono">
          +{conversionLift.toFixed(1)}%
        </div>
      </div>

      {/* Large visual comparison */}
      <div className="text-center mb-6">
        <div className="flex items-end justify-center space-x-8 mb-4">
          <div className="text-center">
            <div 
              className="w-16 bg-gray-300 rounded-t-lg mx-auto mb-2 transition-all duration-1000"
              style={{ height: `${(control.conversionRate / variant.conversionRate) * 80}px` }}
            ></div>
            <p className="text-xl font-bold text-gray-700">{control.conversionRate}%</p>
            <p className="text-xs text-gray-500 ">Control</p>
          </div>
          
          <div className="text-center mt-6">
            <div 
              className="w-16 rounded-t-lg mx-auto mb-2 transition-all duration-1000"
              style={{ 
                backgroundColor: '#274AE2',
                height: '80px'
              }}
            ></div>
            <p className="text-xl font-bold" style={{ color: '#274AE2' }}>{variant.conversionRate}%</p>
            <p className="text-xs text-gray-500">Variant</p>
          </div>
        </div>
      </div>

      {/* Simple summary */}
      <div className="text-center p-3 rounded-lg mt-12" style={{ backgroundColor: '#d9effc' }}>
        <p className="text-sm font-semibold font-mono" style={{ color: '#274AE2' }}>
          Video background converts {conversionLift.toFixed(1)}% better
        </p>
      </div>
    </div>
  );
}